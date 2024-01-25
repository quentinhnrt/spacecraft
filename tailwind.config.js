/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#C1E8FF",
                    200: "#7DA0CA",
                    300: "#5483B3",
                    400: "#052659",
                    500: "#021024",
                },
                secondary: {
                    100: "#FFD6C1",
                    200: "#FFB27D",
                    300: "#FF9F54",
                    400: "#592105",
                    500: "#240A02",
                },
            }
        },
    },
    plugins: [],
}

