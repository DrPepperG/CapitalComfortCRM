// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        '@stylistic/indent': ['error', 4],
        '@stylistic/semi': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': 'off'
    }
});
