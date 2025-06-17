module.exports = {
  compress: {
    ecma: 5,
    comparisons: false,
    inline: 2,
    drop_console: process.env.NODE_ENV === 'production',
    drop_debugger: process.env.NODE_ENV === 'production',
  },
  mangle: {
    safari10: true,
  },
  output: {
    ecma: 5,
    comments: false,
    ascii_only: true,
  },
}; 