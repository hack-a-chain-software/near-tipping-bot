import { ButtonLP } from "../button_lp";
import { SendtokenAsset } from "../assets/sendtokenasset";

export const SendToken = () => {
  return (

      <section id="easiest_send_cryptocurrencies" className="text-white flex py-32 justify-around m-auto relative">
        <SendtokenAsset></SendtokenAsset>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:m-auto lg:w-1/3 lg:space-y-4 z-50  max-w-[1440px] mx-auto">
              <h2 className="font-extrabold p-5 text-4xl ">Send <span className="text-azoxo"> NEAR </span> and <span className="text-azoxo"> NEP-141</span> tokens
                  directly on discord.</h2>
              <img className="p-5 lg:hidden " src="/images/wave_tipping_bot.png" alt="tipping bot waving"></img>
              <p className="font-medium text-xl text-justify px-5 pb-8">Engage your community with ranking, social score, and token
                  submissions with no fees, without opening your wallet.</p>
              <ButtonLP></ButtonLP>
          </div>

          <div className="hidden lg:block lg:w-1/3 flex lg:items-center lg:m-auto  max-w-[1440px] mx-auto z-50">
              <img src="/images/wave_tipping_bot.png" alt="tipping bot waving"></img>
          </div>

      </section>
  );
}


export default SendToken;
