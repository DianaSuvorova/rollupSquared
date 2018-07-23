export default {
  input: `./src/indexSquared.js`,
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      sourcemap: 'inline',
    },
  ],
};
