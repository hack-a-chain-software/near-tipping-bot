import { HowToUseAsset } from "../assets/howtouseassets";
import { PurpleStarHowToUse } from "../assets/howtouseassets";
import { WhiteStarHowToUse } from "../assets/howtouseassets";

export const HowToUse = () => {
  return(

      <section id="how_to_use" className=" text-white m-auto  px-2 py-32  justify-between bg-black/[0.2] relative z-20">
        <HowToUseAsset></HowToUseAsset>
        <svg className="absolute top-[430px] left-0  z-40" width="180" height="600" viewBox="0 0 166 552" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-303.256 429.714C-345.109 374.079 -382.679 307.872 -368.546 239.666C-355.129 174.917 -286.981 144.377 -235.527 102.852C-183.637 60.9745 -138.659 -7.00511 -72.4589 0.71323C-6.33507 8.4227 20.8879 85.4979 62.3539 137.582C103.729 189.553 168.744 232.958 165.276 299.327C161.724 367.311 97.8617 411.455 45.7561 455.267C-8.33632 500.75 -63.7684 556.311 -134.219 551.153C-206.156 545.886 -259.892 487.357 -303.256 429.714Z" fill="#424250" />
        </svg>
        <PurpleStarHowToUse></PurpleStarHowToUse>
        <WhiteStarHowToUse></WhiteStarHowToUse>



      <h2 className=" font-extrabold text-fS32px text-center pt-4 pb-22  mt-0 mb-12">How to <span className="text-pink my-4">use</span></h2>


      <div className="my-2/3 mx-6 lg:my-24 lg:mx-36 flex flex-col lg:block lg:grid lg:grid-cols-4 ">

          <div className="items-center text-center z-40 w-9/12">
              <h3 className="pb-8 font-extrabold text-xl">Step 1</h3>

              <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 shadow-how_to_use_shadow z-50">

                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className="pb-1">Register</h3>
                      <span className="text-pink">Server</span>
                  </div>
                  <p className="font-medium text-base px-2 text-center"> An administrator use the command <span className="text-pink">/Create new server</span> to register the server within the bot.</p>

              </div>
          </div>

          <div className="items-center text-center z-50 w-9/12">
              <h3 className="pb-8 font-extrabold text-xl">Step 2</h3>

              <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 items-center shadow-how_to_use_shadow">

                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className="pb-1">Enable</h3>
                      <span className="text-pink">Tokens</span>
                  </div>

                  <p className="font-medium text-base">Use the <span className="text-pink">/enable token</span> command to choose which tokens to make available on your server.</p>
              </div>
          </div>

          <div className="items-center text-center  z-50 w-9/12">
              <h3 className="pb-8 font-extrabold text-xl">Step 3</h3>
              <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 items-center shadow-how_to_use_shadow">
                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className=" pb-1">Set</h3>
                      <span className="text-pink">Tokens</span>

                  </div>

                  <p className="font-medium text-base">Use the <span className="text-pink">/set wallet</span> command to add the address of the wallet you
                      want to receive tokens.</p>
              </div>
          </div>

          <div className="items-center text-center  z-50 w-9/12">
              <h3 className="pb-8 font-extrabold text-xl ">Step 4</h3>
              <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 shadow-how_to_use_shadow">
                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className="pb-1">Send</h3>
                      <span className="text-pink">Tokens</span>
                  </div>

                  <p className="font-medium text-base">Use the <span className="text-pink">/send </span>
                      command to send tokens to anyone on your server.</p>
              </div>
          </div>

      </div>
  </section>

  );
}

export default HowToUse;
