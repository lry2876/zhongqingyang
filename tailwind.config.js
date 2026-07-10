/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // 东方养生美学配色
        ink: {
          green: "#2D5043",     // 主墨绿
          greenLight: "#5A7A6E", // 浅墨绿
          greenDeep: "#1E3A30", // 深墨绿
        },
        cream: {
          DEFAULT: "#F5F1E8",   // 米白主色
          dark: "#EDE6D3",      // 深米白
          light: "#FAF7EF",     // 浅米白
        },
        ochre: {
          DEFAULT: "#C97B4A",   // 赭石主色
          light: "#E0A47A",     // 浅赭石
          deep: "#A85F33",      // 深赭石
        },
        earth: {
          brown: "#3D2E1F",     // 深棕
          gray: "#8B7E6B",      // 暖灰
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],  // 标题宋体
        sans: ['"Noto Sans SC"', "sans-serif"], // 正文黑体
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-slow": "pulseSlow 2.5s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(45, 80, 67, 0.12)",
        card: "0 8px 32px -12px rgba(45, 80, 67, 0.18)",
        glow: "0 0 32px -4px rgba(201, 123, 74, 0.25)",
      },
    },
  },
  plugins: [],
};
