export const ButtonSendToken = () => {
  return (
    <button
      className="flex items-center text-white rounded-full  mx-auto px-5  py-3 text-xl  justify-between bg-bgbutton lg:mx-0 lg:mr-auto lg:my-4 align-middle"
      onClick={() =>
        window.open(
          "https://discord.com/api/oauth2/authorize?client_id=1051851105300123668&permissions=2147503104&scope=bot"
        )
      }
      type="button"
    >
      <span className=" font-medium px-1">Get on your server </span>

      <svg
        className="lg:pt-1"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.775 5.26233C21.3867 3.34045 17.6086 3.01467 17.4469 3.00295C17.1961 2.98186 16.957 3.12248 16.8539 3.35451C16.8445 3.36858 16.7625 3.55842 16.6711 3.85373C18.2508 4.12092 20.1914 4.65764 21.9469 5.74748C22.2281 5.92092 22.3148 6.29123 22.1414 6.57248C22.0266 6.75764 21.832 6.85842 21.6305 6.85842C21.5227 6.85842 21.4125 6.82795 21.3141 6.76701C18.2953 4.89436 14.5266 4.80061 13.8 4.80061C13.0734 4.80061 9.30234 4.89436 6.28594 6.76701C6.00469 6.94279 5.63438 6.85608 5.46094 6.57483C5.28516 6.29123 5.37188 5.92326 5.65313 5.74748C7.40859 4.65998 9.34922 4.12092 10.9289 3.85608C10.8375 3.55842 10.7555 3.37092 10.7484 3.35451C10.643 3.12248 10.4062 2.97717 10.1531 3.00295C9.99141 3.01467 6.21328 3.34045 3.79219 5.28811C2.52891 6.45764 0 13.292 0 19.2006C0 19.3061 0.028125 19.4069 0.0796878 19.4983C1.82344 22.5639 6.58359 23.3655 7.66875 23.4006C7.67344 23.4006 7.68047 23.4006 7.6875 23.4006C7.87969 23.4006 8.06016 23.3092 8.17266 23.1545L9.26953 21.6451C6.30937 20.8811 4.79766 19.5826 4.71094 19.5053C4.4625 19.2873 4.43906 18.9076 4.65938 18.6592C4.87734 18.4108 5.25703 18.3873 5.50547 18.6053C5.54063 18.6381 8.325 21.0006 13.8 21.0006C19.2844 21.0006 22.0688 18.6287 22.0969 18.6053C22.3453 18.3897 22.7227 18.4108 22.943 18.6615C23.1609 18.91 23.1375 19.2873 22.8891 19.5053C22.8023 19.5826 21.2906 20.8811 18.3305 21.6451L19.4273 23.1545C19.5398 23.3092 19.7203 23.4006 19.9125 23.4006C19.9195 23.4006 19.9266 23.4006 19.9313 23.4006C21.0164 23.3655 25.7766 22.5639 27.5203 19.4983C27.5719 19.4069 27.6 19.3061 27.6 19.2006C27.6 13.292 25.0711 6.45764 23.775 5.26233ZM9.9 16.8006C8.73984 16.8006 7.8 15.7272 7.8 14.4006C7.8 13.074 8.73984 12.0006 9.9 12.0006C11.0602 12.0006 12 13.074 12 14.4006C12 15.7272 11.0602 16.8006 9.9 16.8006ZM17.7 16.8006C16.5398 16.8006 15.6 15.7272 15.6 14.4006C15.6 13.074 16.5398 12.0006 17.7 12.0006C18.8602 12.0006 19.8 13.074 19.8 14.4006C19.8 15.7272 18.8602 16.8006 17.7 16.8006Z"
          fill="white"
        />
      </svg>
    </button>
  );
};
export default ButtonSendToken;
