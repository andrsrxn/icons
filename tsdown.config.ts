import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/react/ui/index.ts', './src/react/brands/index.ts', './src/react/flags/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  cjsDefault: false,
  dts: true,
  clean: true,
  tsconfig: './tsconfig.json',
  target: 'es2024',
  platform: 'neutral',
  unbundle: true,
  sourcemap: false,
  logLevel: 'info',
  exports: false,
})
