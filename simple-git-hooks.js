/* eslint-disable unicorn/prefer-module */

module.exports = {
    'pre-commit': 'npx lint-staged',
    'commit-msg': 'npx --no-install commitlint --edit "$1"',
};
