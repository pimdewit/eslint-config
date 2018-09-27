module.exports = {
  "extends": [
    "plugin:react/recommended",
    "google"
  ],
  "plugins": [
    "react",
    "jsdoc"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "import/no-extraneous-dependencies": [
      "warn",
      {
        "devDependencies": true
      }
    ],
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
      "never"
    ],
    "object-curly-newline": [
      "warn",
      {
        "consistent": true,
        "multiline": true
      }
    ],
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }
    ],
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
    "no-param-reassign": true,
    "jsdoc/check-param-names": true,
    "jsdoc/check-tag-names": true,
    "jsdoc/newline-after-description": [
      "warn",
      "never"
    ],
    "jsdoc/require-description-complete-sentence": true,
    "jsdoc/require-hyphen-before-param-description": true,
    "jsdoc/require-param": true,
    "jsdoc/require-param-type": true,
    "jsdoc/require-returns-type": true,
    "no-underscore-dangle": false,
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
    "arrow-body-style": false,
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
}