module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azoxo: "#6D71FF",
        black: "#333333",
        pink: "#FC89F7",
        blue_button: "#7983FF",
        graphite: "#424250",
        purple: "#AB80FF",
        grey: "#3D3D3D",
      },
      fontSize: {
        fS32px: "32px",
      },
      backgroundImage: {
        lpbg: "url('/images/bg_landing_page_1x.jpg')",
        button: "linear-gradient(270deg, #7983FF 47.22%, #FC89F7 100%)",
      },
    },
  },
  plugins: [],
};
