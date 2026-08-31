import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

/**
 * Config flat do ESLint 9. Substitui o `next lint`, que foi removido no Next 16
 * (o comando passou a interpretar "lint" como um diretório e falhava).
 *
 * Rodar com `npm run lint`.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'public/**'],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      // Avisa em vez de quebrar: são úteis, mas não valem travar um build.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]

export default config
