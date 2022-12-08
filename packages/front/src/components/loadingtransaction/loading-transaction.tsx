export const LoadingTransaction = () => {
  return (
    <div className="flex justify-center flex-col lg:flex-row text-center items-center min-h-screen bg-grey font-sans  text-white">
      <img
        loading="lazy"
        src="/images/tipping_bot_loading_page.png"
        alt="Tiping bot waving"
        className="mx-0 pr-0"
      />
      <div className="px-2 flex items-center lg:items-start">
        <div className="text-start py-0 my-0">
          <h1 className="font-extrabold text-5xl pb-8">Processing</h1>
          <p className="font-medium text-xl opacity-80">
            Processing your sending
          </p>
        </div>
        <div className="px-4 py-3.5 pl-8">
          <svg
            className="animate-spin"
            width="40"
            height="40"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19.5"
              cy="19.5"
              r="16.8235"
              stroke="url(#paint0_linear_97_1149)"
              stroke-width="5.35294"
            />
            <defs>
              <linearGradient
                id="paint0_linear_97_1149"
                x1="4.0814"
                y1="33.7849"
                x2="39"
                y2="10.4302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6D71FF" />
                <stop offset="0.686455" stop-color="#AB80FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingTransaction;
