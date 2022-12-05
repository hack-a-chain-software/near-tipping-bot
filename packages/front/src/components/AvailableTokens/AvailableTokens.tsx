export const AvaiableTokens = () => {
  return (
    <section
      id="available_tokens"
      className="items-center text-center px-8 text-white py-32 relative"
    >
      <svg
        className="absolute left-[120px]  top-[110px] z-40"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9238 0.908445C11.2935 -0.0906252 12.7065 -0.0906209 13.0762 0.908449L15.5982 7.72386C15.7144 8.03797 15.962 8.28562 16.2761 8.40185L23.0916 10.9238C24.0906 11.2935 24.0906 12.7065 23.0916 13.0762L16.2761 15.5982C15.962 15.7144 15.7144 15.962 15.5982 16.2761L13.0762 23.0916C12.7065 24.0906 11.2935 24.0906 10.9238 23.0916L8.40185 16.2761C8.28562 15.962 8.03797 15.7144 7.72386 15.5982L0.908445 13.0762C-0.0906252 12.7065 -0.0906209 11.2935 0.908449 10.9238L7.72386 8.40185C8.03797 8.28562 8.28562 8.03797 8.40185 7.72386L10.9238 0.908445Z"
          fill="#FDFDFF"
        />
      </svg>

      <svg
        className="absolute right-[120px]  top-[90px] z-40"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9238 0.908445C11.2935 -0.0906252 12.7065 -0.0906209 13.0762 0.908449L15.5982 7.72386C15.7144 8.03797 15.962 8.28562 16.2761 8.40185L23.0916 10.9238C24.0906 11.2935 24.0906 12.7065 23.0916 13.0762L16.2761 15.5982C15.962 15.7144 15.7144 15.962 15.5982 16.2761L13.0762 23.0916C12.7065 24.0906 11.2935 24.0906 10.9238 23.0916L8.40185 16.2761C8.28562 15.962 8.03797 15.7144 7.72386 15.5982L0.908445 13.0762C-0.0906252 12.7065 -0.0906209 11.2935 0.908449 10.9238L7.72386 8.40185C8.03797 8.28562 8.28562 8.03797 8.40185 7.72386L10.9238 0.908445Z"
          fill="#FDFDFF"
        />
      </svg>

      <svg
        className="absolute top-[300px] right-0  z-40"
        width="221"
        height="762"
        viewBox="0 0 221 762"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.2646 191.682C135.839 105.677 204.92 19.8048 304.221 2.48064C398.49 -13.9656 475.873 61.5131 559.146 108.659C643.126 156.205 758.547 180.532 783.412 273.779C808.248 366.919 719.034 444.653 671.031 528.244C623.133 611.653 599.347 722.325 508.197 753.03C414.827 784.483 321.423 722.025 234.725 675.22C144.721 626.631 40.4429 581.609 9.86944 484.003C-21.349 384.338 28.7926 280.791 83.2646 191.682Z"
          fill="#424250"
        />
      </svg>

      <h2 className=" font-extrabold text-fS32px text-center pt-12 pb-22">
        Our<span className="text-purple my-4"> available tokens</span>
      </h2>

      <div className="my-24 mx-14 lg:mx-24 flex flex-col justify-between lg:grid lg:grid-cols-5 gap-5">
        <div className="bg-black rounded-md flex inline-flex items-center justify-center  w-full p-4 z-50">
          <img src="\images\BTC.png" alt="Bitcoin"></img>
          <p className="font-medium text-3xl px-4">BTC</p>
        </div>

        <div className="bg-black rounded-md flex inline-flex items-center justify-center w-full p-4 z-50">
          <img src="\images\AVAX.png" alt="AVAX"></img>
          <p className="font-medium text-3xl px-4">AVAX</p>
        </div>

        <div className="bg-black rounded-md flex inline-flex items-center justify-center w-full p-4 z-50">
          <img src="\images\SOL.png" alt="SOL"></img>
          <p className="font-medium text-3xl px-4">SOL</p>
        </div>

        <div className="bg-black rounded-md flex inline-flex items-center justify-center w-full p-4 z-50">
          <img src="\images\SAND.png" alt="SAND"></img>
          <p className="font-medium text-3xl px-4">SAND</p>
        </div>

        <div className="bg-black rounded-md flex inline-flex items-center justify-center w-full p-4 z-50">
          <img src="\images\DAI.png" alt="DAI"></img>
          <p className="font-medium text-3xl px-4">DAI</p>
        </div>
      </div>

      <button
        className="text-white flex rounded-full  p-2.5 justify-between w-1/8 text-xl  inline-flex items-center
          bg-gradient-to-r from-pink to-blue_button "
        type="button"
      >
        <span className=" font-medium px-4 text-xl"> See all tokens </span>
      </button>
    </section>
  );
};

export default AvaiableTokens;
