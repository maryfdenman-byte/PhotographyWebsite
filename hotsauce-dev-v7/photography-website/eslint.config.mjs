import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

// eslint-config-next 15 is still eslintrc-format, so FlatCompat bridges it into
// ESLint 9's flat config. This replaces `next lint`, which is removed in Next 16.
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const config = [
  {
    ignores: [
      '.next/**',
      '.next-dev/**',
      'out/**',
      'node_modules/**',
      'next-env.d.ts',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // The dev-server helpers are plain CommonJS Node scripts, not app code.
    files: ['scripts/**/*.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
]

export default config
