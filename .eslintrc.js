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
        "react/prefer-stateless-function": 0,
        "jsx-a11y/label-has-for": 1,
        "func-names": 0,
        "react/prop-types": 1
    },
    "env": {
        "jest": true,
        "browser": true
    },
};