import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    // 语言配置
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
    // 规则需要放到最下面,否则你的自定义规则可能被其他配置覆盖掉.
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    }
  }
];
