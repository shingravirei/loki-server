module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    extends: ['airbnb-base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'no-console': 0,
        semi: 'off',
        'no-unused-vars': 'warn',
        'arrow-body-style': 'warn',
        indent: ['error', 4],
        'comma-dangle': 'off',
        'arrow-parens': 'off',
        'operator-linebreak': ['off']
    }
};
