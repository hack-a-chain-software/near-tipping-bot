import { RegisterTokenAsset } from "../assets/registertokenasset";
import { LeftWhiteStarRegister } from "../assets/registertokenasset";
import { RightPurpleStarRegister } from "../assets/registertokenasset";
import { RightWhiteStarRegister } from "../assets/registertokenasset";
import { ButtonRegisterToken } from "./button";

export const RegisterToken = () => {
  return (
    <section
      id="register_token"
      className="text-white flex flex-col items-center pb-32 pt-12 px-8 bg-black/[0.2] relative"
    >
      <RegisterTokenAsset></RegisterTokenAsset>
      <LeftWhiteStarRegister></LeftWhiteStarRegister>
      <RightWhiteStarRegister></RightWhiteStarRegister>
      <RightPurpleStarRegister></RightPurpleStarRegister>

      <p className="font-extrabold text-fS32px pt-12 pb-8 z-50 text-center">
        Didn’t find the <span className="text-azoxo">token you need?</span>
      </p>

      <div className="flex flex-col lg:flex-row items-center pt-8 pb-4 my-14 z-50">
        <img
          loading="lazy"
          src="/images/tipping_bot.png"
          alt="Tipping bot"
        ></img>
        <div className="flex flex-col items-center px-8">
          <p className="text-center pb-12 font-normal text-xl">
            Make a request to add a new token{" "}
            <br className="hidden lg:block"></br>
            through google forms by clicking the button below
          </p>

          <ButtonRegisterToken />
        </div>
      </div>
    </section>
  );
};

export default RegisterToken;
