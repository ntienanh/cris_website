'use client';

import { StyleProvider, createCache, extractStyle, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

export default function AntdStyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() => createCache()); // gets antd cached styles

  // innsert cache style on the server
  useServerInsertedHTML(() => (
    <style id='antd' dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}></style>
  ));

  return (
    <StyleProvider hashPriority='high' transformers={[legacyLogicalPropertiesTransformer]} cache={cache}>
      {children}
    </StyleProvider>
  );
}
