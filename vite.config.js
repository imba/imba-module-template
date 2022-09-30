import { imba } from 'vite-plugin-imba';
import { resolve } from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [imba()],
	build: {
		lib: {
			name: "my-lib",
			fileName: "my-lib",
			entry: resolve(__dirname, 'src/index.js'),
		},
	},
});
