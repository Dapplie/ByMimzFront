/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                customGray: '#323B3F', // Replace with your desired color
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
