module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "import",
        "jsx-a11y",
        "react",
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0
    },
    "env": {
        "jest": true,
        "browser": true
    },
};