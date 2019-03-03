module.exports = {
  "extends": [
    "plugin:react/recommended",
    "google"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "require-jsdoc-except"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "arrow-parens": "as-needed",
    "no-new": [
      "off"
    ],
    "complexity": [
      "warn",
      8
    ],
    "curly": [
      "warn",
      "all"
    ],
    "dot-location": [
      "warn",
      "property"
    ],
    "dot-notation": "warn",
    "eqeqeq": [
      "warn",
      "always"
    ],
    "no-multi-spaces": "warn",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "camelcase": [
      "warn",
      {
        "properties": "always"
      }
    ],
    "comma-spacing": [
      "warn",
      {
        "after": true
      }
    ],
    "comma-style": [
      "warn",
      "last"
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "keyword-spacing": [
      "warn",
      {
        "after": true
      }
    ],
    "max-depth": [
      "warn",
      {
        "max": 4
      }
    ],
    "max-len": [
      "warn",
      {
        "code": 100,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],
    "max-nested-callbacks": [
      "warn",
      {
        "max": 2
      }
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2
      }
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": false
      }
    ],
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": true
      }
    ],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-curly-newline": [
      "warn",
      {
        "consistent": true,
        "multiline": true
      }
    ],
    'require-jsdoc' : ['off'],
    "require-jsdoc-except/require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
      },
      "check-param-names": 1,
      "check-tag-names": 1,
      "newline-after-description": [
        "warn",
        "never"
      ],
      "require-description-complete-sentence": 1,
      "require-hyphen-before-param-description": 1,
      "require-param": 1,
      "require-param-type": 1,
      "require-returns-type": 1,
      "ignore": [
        "constructor",
        "render",
        "componentDidMount",
        "componentWillUnmount",
        "componentDidCatch",
      ]
    }],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "markers": [
            "/"
          ],
          "exceptions": [
            "-",
            "+"
          ]
        },
        "block": {
          "markers": [
            "!"
          ],
          "exceptions": [
            "*"
          ],
          "balanced": true
        }
      }
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "no-param-reassign": 1,
    "no-underscore-dangle": 0,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ],
    "arrow-body-style": 0,
    "prefer-promise-reject-errors": [
      "off"
    ]
  },
  "settings": {
    "jsdoc": {
      "tagNamePreference": {
        "returns": "return"
      }
    }
  }
};
