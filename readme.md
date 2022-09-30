# Component Template

Since Imba components are actual custom elements, you can use
them with both plain HTML and most JavaScript UI frameworks
(React, Vue, Svelte, etc.)

The easiest way to include Imba components and scripts in your
existing project is with Vite. If your existing project doesn't
use Vite, this is still possible, just skip to
[#without-vite](#without-vite).

## With Vite

1. Add `imba` and `vite-plugin-imba` to your project:
	```bash
	npm i -D imba vite-plugin-imba
	```

1. In `vite.config.js` import the Imba plugin:

	```js
	import { imba } from 'vite-plugin-imba'
	```

1. And add `imba()` to the list of plugins:

	```js
		plugins: [vue(),imba()],
	```

1. In your app you can now import any imba files with:

	```
	import './filename.imba'
	```

1. [#using-components](#using-components)

## Without Vite

This repository is set up so that you can conveniently clone,
build, and import it as a module via `import ./folder`. In some
cases it's as simple as that.

However, since eslint is quite prominent and doesn't agree with
the output of Imba's compiler, the most general and consistent
way of including Imba components in your project is by sourcing
the bundle with a `<script>` tag.

1. Click `Use this template` on this repository and choose a
name, we'll use the name `imba-component` as an example.

1. Clone your `imba-component` repository into your existing
project's `/public` directory.

1. Run:

	```
	cd imba-component
	npm i
	npm run build
	```

1. In your non-Imba project's `index.html` file, source the
component's bundle with a script tag:

	```
	<script src="imba-component/dist/my-lib.js"></script>
	```

1. [#using-components](#using-components)

## Using Components

To use the imported/sourced components, append the component's
name with `-tag`. For example, if I create this tag in an Imba
file:

```
tag marshmellow
  <self> "yo!"
```

In React I could use the component with:

```
<marshmellow-tag/>
```
