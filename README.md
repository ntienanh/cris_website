Prettier
prettier-plugin-organize-imports
prettier-plugin-tailwindcss

---

/\*_ @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} _/
const config = {
printWidth: 120,
tabWidth: 2,
useTabs: false,
semi: true,
singleQuote: true,
trailingComma: 'all',
jsxSingleQuote: true,
endOfLine: 'lf',
arrowParens: 'avoid',
plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
tailwindFunctions: ['clsx'],
tailwindAttributes: ['className', 'classNames'],
};

module.exports = config;

---

Eslint
eslint-config-prettier
eslint-plugin-prettier
eslint-config-next

\*\*\*\* typoraphy

<h1 className='headline-1'>Headline 1</h1>
      <h2 className='headline-2'>Headline 2</h2>
      <h3 className='headline-3'>Headline 3</h3>
      <h4 className='headline-4'>Headline 4</h4>
      <h5 className='headline-5'>Headline 5</h5>
      <h6 className='headline-6'>Headline 6</h6>

      <p className='subtitle-1'>Subtitle 1</p>
      <p className='subtitle-2'>Subtitle 2</p>

      <p className='body-1'>Body 1 - Văn bản chính</p>
      <p className='body-2'>Body 2 - Văn bản phụ</p>

      <p className='caption'>Caption - Chú thích</p>
      <button className='button'>Button - Nút bấm</button>
      <p className='overline'>Overline - Chữ nhỏ trên tiêu đề</p>
