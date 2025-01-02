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
        'custom_lightgray': '#dedede',
        'prev_post_gray-scroll': '#3e3e3e',
        'post_gray-scroll': '#545454',
        'custom_gray-dark': '#313235',
        'link_hover_gray': '#757575',
        'anchor_blue': '#3cb2eb',
        'anchor_blue_dark': '#8bd1f3',
        'skeleton1_light': '#c6c6c6',
        'skeleton2_light': '#e4e4e4',
        'skeleton1_dark': '#404040',
        'skeleton2_dark': '#545454'
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      }
    },
    darkMode: 'class',
  },
  plugins: [],
};

export default config;