import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import html2 from 'rollup-plugin-html2';
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
    html2({
      template: './src/index.html',
      fileName: 'index.html',
      // inject: 'head',
      // externals: [
      //   { type: 'js', file: 'index.js', pos: 'before'}
      // ]
    }),
    serve({
      contentBase: './dist',
      open: true,
    }),
  ],
};
