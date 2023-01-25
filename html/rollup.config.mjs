import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import html2 from 'rollup-plugin-html2';
import serve from 'rollup-plugin-serve';
// import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import { copy } from '@web/rollup-plugin-copy';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    copy({ patterns: '**/*.{svg,jpg,json,png,pdf,ico,txt}', exclude: 'node_modules' }),
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
    // serve({
    //   contentBase: './dist',
    //   open: true,
    // }),
    // image()
    url({
      destDir: 'dist/assets/',
      publicPath: './src/assets/',
      fileName: '[name][extname]',
      include: [
              '**/*.svg',
              '**/*.png',
              '**/*.gif',
              '**/*.jpg',
              '**/*.jpeg',
      ]
    }),
  ],
};
