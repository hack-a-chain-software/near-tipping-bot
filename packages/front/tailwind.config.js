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
        // grey: '#3D3D3D',
        lilac: "#DEDFFF",

        blue: {
          0: "#040d21",
        },
        grey: {
          100: "#333333",
        },
        purple: {
          0: "#6D71FF",
        },
      },

      fontSize: {
        fS32px: "32px",
      },

      backgroundImage: {
        lpbg: "url('/images/main-bg.jpg')",
        "bn-gradient": "linear-gradient(270deg, #7983FF 47.22%, #FC89F7 100%)",
      },

      boxShadow: {
        primary: "0px 2.84008px 35.501px rgba(171, 128, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
