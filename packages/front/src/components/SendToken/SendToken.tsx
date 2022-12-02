import { ButtonLP } from "../button_lp";

export const SendToken = () => {
  return (

      <section id="easiest_send_cryptocurrencies" className="text-white flex py-20 justify-around m-auto max-w-[1440px]">

          <svg className="absolute top-[350px] left-0" width="180" height="680" viewBox="0 0 174 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.46012 14.6469C108.585 71.1643 30.4676 231.709 60.2208 345.493C85.7733 443.213 211.467 526.549 162.388 614.783C113.072 703.446 -19.7721 671.251 -121.227 671.704C-207.142 672.087 -293.69 671.69 -360.086 617.113C-438.302 552.819 -509.503 463.325 -496.932 362.875C-484.253 261.557 -385.189 205.51 -301.3 147.363C-204.963 80.5887 -97.376 -41.7121 5.46012 14.6469Z" fill="#424250" />
          </svg>

          <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:m-auto lg:w-1/3 lg:space-y-4 z-50">
              <h2 className="font-extrabold p-5 text-4xl ">Send <span className="text-azoxo"> NEAR </span> and <span className="text-azoxo"> NEP-141</span> tokens
                  directly on discord.</h2>
              <img className="p-5 lg:hidden " src="/images/wave_tipping_bot.png" alt="tipping bot waving"></img>
              <p className="font-medium text-xl text-justify px-5 pb-8">Engage your community with ranking, social score, and token
                  submissions with no fees, without opening your wallet.</p>
              <ButtonLP></ButtonLP>
          </div>

          <div className="hidden lg:block lg:w-1/3 flex lg:items-center lg:m-auto z-50">
              <img src="/images/wave_tipping_bot.png" alt="tipping bot waving"></img>
          </div>

      </section>
  );
}


export default SendToken;
