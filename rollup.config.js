import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import ulgify from 'rollup-plugin-uglify';

export default {
  entry: 'input.js',
  dest: 'output.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_moules/**'
    }),
    commonjs(),
    resolve({
    jsnext: true,
    browser: true
  }),
  uglify()
  ]
};
