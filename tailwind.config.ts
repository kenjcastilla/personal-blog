import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@headlessui/react/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        // 'lg': '1150px'
      },
      colors: {
        'custom_white': '#f7f7f7',
        'custom_black': '#101010',
        'prev_post_gray-scroll': '#3e3e3e',
        'custom_gray': '#313235',
        'link_hover_gray': '#757575',
        'anchor_blue': '#3cb2eb',
        'anchor_blue-dark': '#8bd1f3',
      }
    },
    darkMode: 'class',
  },
  plugins: [],
};
export default config;
