import { AvaiableTokensAsset } from "../assets/availabletokensasset";
import { LeftWhiteStar } from "../assets/availabletokensasset";
import { RightWhiteStar } from "../assets/availabletokensasset";
import { ButtonavAilableTokens } from "./buttonavailabletokens/buttonavailabletoken";

export const AvaiableTokens = () => {
  return (
    <section
      id="available_tokens"
      className="items-center text-center px-8 text-white py-32 relative"
    >
      <LeftWhiteStar></LeftWhiteStar>
      <RightWhiteStar></RightWhiteStar>
      <AvaiableTokensAsset></AvaiableTokensAsset>

      <h2 className=" font-extrabold text-fS32px text-center pt-12 pb-22">
        Our<span className="text-purple my-4"> available tokens</span>
      </h2>

      <div className="my-24 lg:mx-44 flex flex-col justify-between lg:grid lg:grid-cols-5 lg:gap-0 gap-5">
        <div className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center   lg:w-10/12  p-4 z-50">
          <img src="\images\BTC.png" alt="Bitcoin"></img>
          <p className="font-medium text-3xl px-4">BTC</p>
        </div>

        <div className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center  lg:w-10/12 p-4 z-50">
          <img src="\images\AVAX.png" alt="AVAX"></img>
          <p className="font-medium text-3xl px-4">AVAX</p>
        </div>

        <div className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center  lg:w-10/12  p-4 z-50">
          <img src="\images\SOL.png" alt="SOL"></img>
          <p className="font-medium text-3xl px-4">SOL</p>
        </div>

        <div className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center lg:w-10/12  p-4 z-50">
          <img src="\images\SAND.png" alt="SAND"></img>
          <p className="font-medium text-3xl px-4">SAND</p>
        </div>

        <div className="bg-black bg-opacity-60 shadow-how_to_use_shadow rounded-lg flex inline-flex items-center justify-center  lg:w-10/12  p-4 z-50">
          <img src="\images\DAI.png" alt="DAI"></img>
          <p className="font-medium text-3xl px-4">DAI</p>
        </div>
      </div>
      <ButtonavAilableTokens></ButtonavAilableTokens>
    </section>
  );
};

export default AvaiableTokens;
