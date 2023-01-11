import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import html from 'rollup-plugin-bundle-html';
import serve from 'rollup-plugin-serve';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    commonjs(),
    sass({
      insert: true,
      output: './dist/bundle.css',
    }),
    html({
      include: '**/*.html',
      fileName: './dist/index.html',
      template: './src/index.html',
    }),
    serve({
      contentBase: './dist',
      open: true,
    }),
  ],
};
