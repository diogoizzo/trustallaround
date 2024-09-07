module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                tm: "1300px",
                desktop: "1800px",
                Bfullhd: "1930px",
            },
            colors: {
                "brand-orange-hover": "#FDEBD8",
                "brand-orange": "#F59B2C",
                "brand-blue": "#26475E",
                "brand-blue-hover": "#ebeff2",
                "brand-gray": "#707070",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
