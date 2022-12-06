import { NavHashLink } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <nav className="bg-black bg-cover bg-center font-extrabold text-white flex flex-col lg:flex-row lg:justify-between">
      <div className="py-4 ml-16 lg:ml-36 flex items-center lg:justify-around">
        <img src="/images/tipping_bot_logo.png" alt="Tipping bot logo"></img>
        <p className="px-4 text">
          NEAR <span className="text-azoxo">Tipping Bot</span>{" "}
        </p>
      </div>
      <div className="py-4 lg:mr-36 text-center lg:flex">
        <NavHashLink smooth to="/#how_to_use" className="p-4">
          How to use
        </NavHashLink>
        <NavHashLink smooth to="/#available_tokens" className="p-4">
          Token List
        </NavHashLink>
        <NavHashLink smooth to="/#register_token" className="p-4">
          Token Request
        </NavHashLink>
      </div>
    </nav>
  );
};

export default NavBar;
