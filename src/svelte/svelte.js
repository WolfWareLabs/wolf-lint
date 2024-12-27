import index from "../index.js";
import "eslint-plugin-svelte";

export default {
    configs: {
        recommendedWithConfig: (svelteConfig) => [
            ...index.configs.recommended,
            {
                files: ["*.svelte", "**/*.svelte"],
                languageOptions: {
                    parserOptions: {
                        parser: "@typescript-eslint/parser",
                        svelteConfig,
                    },
                },
                rules: {
                    "no-undef-init": "off",
                    "consistent-return": "off",
                    "prefer-const": "off",
                    "svelte/no-dom-manipulating": "warn",
                    "svelte/no-dupe-on-directives": "error",
                    "svelte/no-dupe-use-directives": "error",
                    "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
                    "svelte/no-store-async": "error",
                    "svelte/require-store-callbacks-use-set-param": "error",
                    "svelte/require-store-reactive-access": "error",
                    "svelte/valid-prop-names-in-kit-pages": "error",
                    "svelte/no-target-blank": "error",
                    "svelte/block-lang": ["error", { script: "ts" }],
                    "svelte/button-has-type": "error",
                    "svelte/no-ignored-unsubscribe": "error",
                },
            },
        ],
    },
};
