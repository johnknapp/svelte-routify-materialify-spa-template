## Minimal Svelte / Routify / Materialify SPA template

----

What's here:

- [Svelte rollup](https://github.com/sveltejs/template) (via `degit`)
- [Routify "Install to existing project"](https://routify.dev/guide/installation/install-to-existing-project) (via `npm i`)
- [Materialify "Advanced Install"](https://svelte-materialify.vercel.app/getting-started/installation/) (via `npm i`)

----

Setup notes:

- Rollup has been configured to emit modules (as Routify expects) to public/modules
- Materialify requires `svelte-preprocess`. Postinstall message from svelte-preprocess: `echo "[svelte-preprocess] Don't forget to install the preprocessors packages that will be used: node-sass/sass, stylus, less, postcss & postcss-load-config, coffeescript, pug, etc..."`
  - hence: `npm i -D node-sass`
- Following Materialify advanced install, continue to Materialify [Usage](https://svelte-materialify.vercel.app/getting-started/usage/) and follow the instructions
- Within `App.svelte`, I wrapped routes within `<MaterialApp></MaterialApp>`
- Made sure `public/index.html` has the proper css and js import statements
- TODO: add [nollup](https://github.com/PepsRyuu/nollup) some day