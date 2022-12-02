export const NavBar = () => {
    return(
        <nav className="bg-black bg-cover bg-center font-extrabold text-white flex flex-col lg:flex-row lg:justify-between">
            <div className="py-4 ml-16 lg:ml-36 flex items-center lg:justify-around">
                <img src="/images/tipping_bot_logo.png" alt="Tipping bot logo"></img>
                <p className="px-4 text">NEAR <span className="text-azoxo">Tipping Bot</span> </p>
            </div>
            <div className="py-4 lg:mr-36 text-center lg:flex">
                <p className="p-4">How to use</p>
                <p className="p-4">Token List</p>
                <p className="p-4">Token Request</p>
            </div>
        </nav>
    );
}

export default NavBar;
