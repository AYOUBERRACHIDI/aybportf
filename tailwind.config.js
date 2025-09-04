/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Mode
        bgLight: '#F9FAFB', // Gray-50
        primary: '#1F2937', // Gray-800
        secondary: '#059669', // Emerald-600
        accent: '#FBBF24', // Amber-400
        textPrimary: '#111827', // Gray-900
        textSecondary: '#6B7280', // Gray-500
        divider: '#E5E7EB', // Gray-200

        // Dark Mode
        bgDark: '#111827', // Gray-900
        primaryDark: '#4A5568', // Adjusted Gray-600 for better contrast
        secondaryDark: '#10B981', // Emerald-500
        accentDark: '#FCD34D', // Amber-300
        textPrimaryDark: '#F9FAFB', // Gray-50
        textSecondaryDark: '#D1D5DB', // Gray-300
        dividerDark: '#4B5563', // Gray-600
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'glow': '0 0 15px rgba(16, 185, 129, 0.4)',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #1F2937, #059669)',
        'gradient-dark': 'linear-gradient(135deg, #4A5568, #10B981)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};