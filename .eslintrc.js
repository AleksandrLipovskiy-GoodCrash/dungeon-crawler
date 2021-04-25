module.exports = {
	root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
	parser: '@typescript-eslint/parser',
	plugins: [
    'prettier',
		'@typescript-eslint',
    'jest'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
	],
	rules: {
    'semi': ['error', 'never'],
    'prettier/prettier': ['error'],
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/no-namespace': 2,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-explicit-any': 0
	}
}
