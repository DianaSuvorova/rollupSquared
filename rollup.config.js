

export default {
  input: `./src/index.js`,
  output: [
    {
      file: './src/index_rolledUp.js',
      format: 'umd',
      sourcemap: 'inline',
      name: 'indexRolledUp'
    },
  ],
};
