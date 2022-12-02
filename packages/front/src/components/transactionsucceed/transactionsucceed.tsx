export const TransactionSucceed = () => {
  return (
    <div className="flex bg-grey font-sans  text-white flex-col mb-0 pb-0 items-stretch ">
        <div className="flex flex-col lg:flex-row justify-center text-center items-center   min-h-screen">
          <img src="\images\tipping_bot_transaction_succeed.png"  alt='tipping bot happy'></img>
          <div className="px-2 flex items-start">
            <div className="text-start py-0 my-0">
              <h1 className="font-extrabold text-5xl pb-8">Tokens sent succesfully!</h1>
              <p className="font-medium text-xl opacity-80  pb-8">Here’s your hash number :)</p>

              <div className=" mb-8">
                <form className="flex flex-row p-0.5">
                  <p className="font-normal text-lg text-black p-1 w-full h-10 rounded-l-xl border-2 border-purple border-r-0 bg-lilac outline-roxo_input grow-1 ">12345678</p>
                  <button type="submit" className=" px-1 bg-lilac  h-10  rounded-r-xl border-l-0  border-2 border-purple border-l-0 "><img src="\assets\copy-icon.png"></img></button>
                </form>
              </div>
              <div className="pt-2 text-center h-full">
                <a className="underline font-medium text-xl">Back to discord</a>
              </div>
            </div>
            <div className="px-4 py-0.5 pl-8">
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23ZM31.5166 18.7207C32.0845 17.9255 31.9004 16.8206 31.1053 16.2526C30.3102 15.6847 29.2052 15.8688 28.6372 16.664L21.005 27.3491L17.1741 23.5182C16.4832 22.8273 15.363 22.8273 14.672 23.5182C13.9811 24.2091 13.9811 25.3293 14.672 26.0203L19.9797 31.328C20.3475 31.6957 20.8584 31.883 21.3767 31.8401C21.895 31.7972 22.3682 31.5285 22.6705 31.1053L31.5166 18.7207Z" fill="#6BC083" />
              </svg>
            </div>
          </div>

        </div>
      </div>

  );

}

export default TransactionSucceed;
