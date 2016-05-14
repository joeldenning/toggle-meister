SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "toggle-meister": {
      "main": "toggle-meister.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx",
              "babel-plugin-transform-decorators-legacy"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
    "babel-types": "npm:babel-types@6.8.1",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "canopy-styleguide": "npm:canopy-styleguide@4.2.9",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@2.4.0",
    "cpr-multiselect": "npm:cpr-multiselect@2.2.11",
    "css": "github:MeoMix/jspm-loader-css@master",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "fuzzy": "npm:fuzzy@0.1.1",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "lodash": "npm:lodash@4.12.0",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.10",
    "postcss-safe-parser": "npm:postcss-safe-parser@1.0.7",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "react": "npm:react@15.0.2",
    "react-dom": "npm:react-dom@15.0.2",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.4.0",
    "redux": "npm:redux@3.5.2",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "sofe": "npm:sofe@1.2.3",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vanilla": "github:systemjs/plugin-css@0.1.21",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
        "cssnano": "npm:cssnano@3.5.2",
        "node-cssnano": "npm:cssnano@3.5.2"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "browserslist": "npm:browserslist@1.3.1",
        "caniuse-db": "npm:caniuse-db@1.0.30000466",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:browserslist@1.3.1": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000466"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:color@0.11.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:colormin@1.1.0": {
      "map": {
        "color": "npm:color@0.11.1",
        "css-color-names": "npm:css-color-names@0.0.3"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:cssnano@3.5.2": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "decamelize": "npm:decamelize@1.2.0",
        "defined": "npm:defined@1.0.0",
        "indexes-of": "npm:indexes-of@1.0.1",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-calc": "npm:postcss-calc@5.2.1",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "postcss-convert-values": "npm:postcss-convert-values@2.3.4",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.6",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.8",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.1",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.1.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-svgo": "npm:postcss-svgo@2.1.3",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-zindex": "npm:postcss-zindex@2.1.1"
      }
    },
    "npm:csso@2.0.0": {
      "map": {
        "clap": "npm:clap@1.1.1",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.0"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:normalize-url@1.5.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "prepend-http": "npm:prepend-http@1.0.4",
        "query-string": "npm:query-string@4.1.0",
        "sort-keys": "npm:sort-keys@1.1.1"
      }
    },
    "npm:postcss-calc@5.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.3"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "colormin": "npm:colormin@1.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-convert-values@2.3.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqid": "npm:uniqid@1.0.0"
      }
    },
    "npm:postcss-merge-idents@2.1.6": {
      "map": {
        "has-own": "npm:has-own@1.0.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-merge-rules@2.0.8": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-params@1.0.4": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.0.0"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.5.2",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-ordered-values@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-selector-parser@2.0.0": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:postcss-svgo@2.1.3": {
      "map": {
        "is-svg": "npm:is-svg@2.0.1",
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "svgo": "npm:svgo@0.6.6"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:query-string@4.1.0": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:reduce-css-calc@1.2.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:sort-keys@1.1.1": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:svgo@0.6.6": {
      "map": {
        "coa": "npm:coa@1.0.1",
        "colors": "npm:colors@1.1.2",
        "csso": "npm:csso@2.0.0",
        "js-yaml": "npm:js-yaml@3.6.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "sax": "npm:sax@1.2.1",
        "whet.extend": "npm:whet.extend@0.9.9"
      }
    },
    "npm:postcss-safe-parser@1.0.7": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:cpr-multiselect@2.2.11": {
      "map": {
        "lodash": "npm:lodash@4.12.0"
      }
    },
    "npm:sofe@1.2.3": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "npm:postcss@5.0.21": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-template": "npm:babel-template@6.8.0"
      }
    },
    "npm:babel-template@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:history@2.1.1": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-router@2.4.0": {
      "map": {
        "history": "npm:history@2.1.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6",
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.12.0",
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash": "npm:lodash@4.12.0",
        "lodash-es": "npm:lodash-es@4.12.0",
        "loose-envify": "npm:loose-envify@1.1.0",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:babel-code-frame@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:babel-plugin-syntax-jsx@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "map": {
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.8.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-traverse@6.8.0": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.6.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.2"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:fbjs@0.8.2": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.2",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:node-fetch@1.5.2": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:react@15.0.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.2",
        "loose-envify": "npm:loose-envify@1.1.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:canopy-styleguide@4.2.9": {
      "map": {
        "canopy-iconography": "npm:canopy-iconography@1.7.6",
        "history": "npm:history@1.17.0"
      }
    },
    "npm:history@1.17.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:readable-stream@2.1.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.2"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    }
  }
});
