
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // 'azull': '#2C3E50',
        // 'naranja': '#E67E22',
        // 'griso': '#34495E',
        // 'rojito': '#D62828',
        // 'azul-oscuro': '#1F497D',
        // Colores principales
        'azull': '#17202A',
        'verde-bosque': '#0E6655',
        'naranja-quemado': '#D35400',
        'esmeralda': '#2ECC71',
        
        // Colores de fondo
        'sidebar': '#34495E',
        'fondoclaro': '#F5F5F5',
        
        // Color rojo para logout
        'logout': '#D62828',

        // Colores adicionales
        'amarillo': '#F1C40F',
        'morado': '#9B59B6',
        'cyan': '#3498DB',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};