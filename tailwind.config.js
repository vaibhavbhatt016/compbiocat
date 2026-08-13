/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'science-blue': '#0f172a',
                'slate-gray': '#64748b',
                'science-teal': '#14b8a6', // teal-500
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
