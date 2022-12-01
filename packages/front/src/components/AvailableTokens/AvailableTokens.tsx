export const AvaiableTokens = () => {
  return (
    <section id="available_tokens" className="items-center text-center px-8  text-white py-32">
      <svg className="absolute top-[1350px] left-0  z-40" width="180" height="600" viewBox="0 0 166 552" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-303.256 429.714C-345.109 374.079 -382.679 307.872 -368.546 239.666C-355.129 174.917 -286.981 144.377 -235.527 102.852C-183.637 60.9745 -138.659 -7.00511 -72.4589 0.71323C-6.33507 8.4227 20.8879 85.4979 62.3539 137.582C103.729 189.553 168.744 232.958 165.276 299.327C161.724 367.311 97.8617 411.455 45.7561 455.267C-8.33632 500.75 -63.7684 556.311 -134.219 551.153C-206.156 545.886 -259.892 487.357 -303.256 429.714Z" fill="#424250" />
      </svg>

      <h2 className=" font-extrabold text-fS32px text-center pt-12 pb-22">Our<span className="text-purple my-4"> available tokens</span></h2>

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

      <button className="text-white flex rounded-full  p-2.5 justify-between w-1/8 text-xl  inline-flex items-center
          bg-gradient-to-r from-pink to-blue_button " type="button">
        <span className=" font-medium px-4 text-xl"  > See all tokens </span>
      </button>
    </section>
  )

}

export default AvaiableTokens;
