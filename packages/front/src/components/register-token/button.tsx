export const ButtonRegisterToken = () => {
  return (
    <button
      className="text-white flex rounded-full py-3 px-2.5 justify-between w-1/8 text-xl  inline-flex items-center bg-bgbutton bottom-0 "
      type="button"
      onClick={() =>
        window.open(
          "https://discord.com/api/oauth2/authorize?client_id=1051851105300123668&permissions=2147503104&scope=bot"
        )
      }
    >
      <span className=" font-medium px-4 text-xl">
        {" "}
        Get the bot on your server{" "}
      </span>
    </button>
  );
};
export default ButtonRegisterToken;
