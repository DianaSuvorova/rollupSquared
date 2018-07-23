## Rolling rolled up application.

1. `yarn rollup` creates [./src/index_rolledUp.js](./src/index_rolledUp.js) from [./src/index.js](./src/index.js)
2. `./src/indexSquared.js` uses `./src/index_rolledUp.js` that was bundeled by rollup.
`yarn rollupSquared` tries to create `./dist/index.js` from [./src/indexSquared.js](./src/indexSquared.js) but fails with `Error: 'default' is not exported by src/index_rolledUp.js`.
