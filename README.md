## Rolling rolled up application.

Vanilla Rollup can only support the ESM format. So one can either include `rollup-plugin-commonjs` for upstream dependency. Or generate both UMD and ESM bundles for the base lib.

1. `yarn rollup` creates [./src/index_rolledUp.js](./src/index_rolledUp.js) and [./src/index_rolledUp.mjs](./src/index_rolledUp.mjs) from [./src/index.js](./src/index.js)
2. `./src/indexSquared.js` uses `./src/index_rolledUp.mjs`. Rollup will default to .mjs whenever available.
3. `yarn rollupSquared` to bundle [./dist/index.js](./dist/index.js)

All based on this [answer](https://github.com/rollup/rollup/issues/2346).

Thanks!
