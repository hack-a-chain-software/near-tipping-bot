import {
  HowToUseRightAsset,
  PurpleStarHowToUse,
  WhiteStarHowToUse,
  HowToUseLeftAsset,
} from "@/components/assets/how-to-use";

export const HowToUse = () => {
  return (
    <section
      id="how_to_use"
      className=" text-white m-auto  px-2 py-32  justify-between bg-black/[0.2] relative z-20"
    >
      <HowToUseRightAsset></HowToUseRightAsset>
      <HowToUseLeftAsset></HowToUseLeftAsset>
      <PurpleStarHowToUse></PurpleStarHowToUse>
      <WhiteStarHowToUse></WhiteStarHowToUse>

      <h2 className=" font-extrabold text-fS32px text-center pt-4 pb-22  mt-0 mb-12">
        How to <span className="text-pink my-4">use</span>
      </h2>

      <div className="my-2/3 mx-6 lg:my-24 lg:mx-36 flex flex-col lg:block lg:grid lg:grid-cols-4 lg:gap-0 gap-12">
        <div className="items-center text-center z-40 lg:w-9/12">
          <h3 className="pb-8 font-extrabold text-xl">Step 1</h3>

          <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 shadow-how_to_use_shadow z-50">
            <div className="font-extrabold text-2xl pb-4">
              <h3 className="pb-1">Register</h3>
              <span className="text-pink">Server</span>
            </div>
            <p className="font-medium text-base text-center">
              {" "}
              An administrator use the command{" "}
              <span className="text-pink">/register</span> to register the
              server within the bot.
            </p>
          </div>
        </div>

        <div className="items-center text-center z-50 lg:w-9/12">
          <h3 className="pb-8 font-extrabold text-xl">Step 2</h3>

          <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 items-center shadow-how_to_use_shadow">
            <div className="font-extrabold text-2xl pb-4">
              <h3 className="pb-1">Enable</h3>
              <span className="text-pink">Tokens</span>
            </div>

            <p className="font-medium text-base">
              Use the <span className="text-pink">/addtoken</span> command to
              choose which tokens to make available on your server.
            </p>
          </div>
        </div>

        <div className="items-center text-center  z-50 lg:w-9/12">
          <h3 className="pb-8 font-extrabold text-xl">Step 3</h3>
          <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 items-center shadow-how_to_use_shadow">
            <div className="font-extrabold text-2xl pb-4">
              <h3 className=" pb-1">Set</h3>
              <span className="text-pink">Tokens</span>
            </div>

            <p className="font-medium text-base">
              Use the <span className="text-pink">/setwallet</span> command to
              add the address of the wallet you want to receive tokens.
            </p>
          </div>
        </div>

        <div className="items-center text-center  z-50 w-9/12">
          <h3 className="pb-8 font-extrabold text-xl ">Step 4</h3>
          <div className="bg-black bg-opacity-60 rounded-lg p-8 h-5/6 shadow-how_to_use_shadow">
            <div className="font-extrabold text-2xl pb-4">
              <h3 className="pb-1">Send</h3>
              <span className="text-pink">Tokens</span>
            </div>

            <p className="font-medium text-base">
              Use the <span className="text-pink">/send </span>
              command to send tokens to anyone on your server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
