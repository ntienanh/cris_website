'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // cacheTime: 10 * 60 * 1000, // 10 phút: Giữ dữ liệu trong cache
        staleTime: 5 * 60 * 1000, // 5 phút: Tránh fetch lại dữ liệu không cần thiết
        refetchOnWindowFocus: false, // Không fetch lại khi chuyển tab
        refetchOnReconnect: true, // Fetch lại khi mạng kết nối lại
        retry: 2, // Thử lại tối đa 2 lần khi gặp lỗi
      },
    },
  });
}

export default function QueryClientProviderWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
