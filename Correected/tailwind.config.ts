import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mesaf: {
          blue: "#004bba",
          blueDark: "#002868",
          blueLight: "#2563eb",
          blueSubtle: "#eff6ff",
          // Teal aliases mapped to Royal Blue for seamless compatibility
          teal: "#004bba",
          tealLight: "#2563eb",
          tealDark: "#002868",
          tealSubtle: "#eff6ff",
          gold: "#f59e0b",
          goldLight: "#fbbf24",
          goldDark: "#b45309",
          goldSubtle: "#fffbeb",
          orange: "#ea580c",
          orangeLight: "#f97316",
          orangeSubtle: "#fff7ed",
          coral: "#e11d48",
          coralLight: "#f43f5e",
          coralSubtle: "#fff1f2",
          navy: "#00193d",
          navyLight: "#002d72",
          slate: "#f8fafc",
        },
      },
      boxShadow: {
        'donor-card': '0 4px 20px -2px rgba(0, 75, 186, 0.08)',
        'donor-hover': '0 12px 30px -4px rgba(0, 75, 186, 0.16)',
        'give-glow': '0 4px 25px -2px rgba(0, 75, 186, 0.35)',
        'gold-glow': '0 4px 25px -2px rgba(245, 158, 11, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
