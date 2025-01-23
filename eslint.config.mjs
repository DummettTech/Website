import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));

const eslintConfig = new FlatCompat({
  baseDirectory: __dirname,
}).extends("next/core-web-vitals", "next/typescript", 'prettier');

export default eslintConfig;
