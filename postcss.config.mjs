export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: ['advanced', {
        discardComments: {
          removeAll: true,
        },
        reduceIdents: false, // Prevents breaking animations
        zindex: false, // Prevents z-index issues
        mergeIdents: false,
        minifyFontValues: {
          removeQuotes: false // Prevents font name issues
        },
        normalizeWhitespace: {
          removeNewlines: true,
          removeIndent: true,
          removeTrailingWhitespace: true
        },
        discardUnused: {
          fontFace: false // Keep all font-face rules
        },
        // Additional optimizations
        colormin: true, // Minify colors
        convertValues: true, // Convert values when possible
        calc: { precision: 5 }, // Optimize calc() expressions
        minifySelectors: true, // Minify selectors
        minifyParams: true, // Minify @media parameters
        mergeLonghand: true, // Merge longhand properties
        mergeRules: true // Merge duplicate rules
      }]
    } : false
  },
};
