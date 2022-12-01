export const HowToUse = () => {
  return(

      <section id="how_to_use" className=" text-white m-auto  px-2 py-32  justify-between">

      <svg className="absolute  right-0  top-[950px] z-40" width="100"   height="800" viewBox="0 0 111 698" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M710.977 424.602C690.228 523.244 653.878 627.288 566.106 676.854C482.782 723.909 384.597 678.69 290.346 662.14C195.295 645.451 78.3885 661.166 23.7431 581.623C-30.8397 502.171 27.2051 399.056 44.4557 304.218C61.6687 209.588 47.0331 97.3386 122.646 37.8914C200.099 -23.0032 309.023 4.58383 406.387 19.6651C507.463 35.3215 620.797 42.837 682.281 124.577C745.062 208.041 732.476 322.399 710.977 424.602Z" fill="#424250"/>
      </svg>

      <svg className="absolute top-[1400px] right-[30px] z-50"width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9238 0.908445C11.2935 -0.0906252 12.7065 -0.0906209 13.0762 0.908449L15.5982 7.72386C15.7144 8.03797 15.962 8.28562 16.2761 8.40185L23.0916 10.9238C24.0906 11.2935 24.0906 12.7065 23.0916 13.0762L16.2761 15.5982C15.962 15.7144 15.7144 15.962 15.5982 16.2761L13.0762 23.0916C12.7065 24.0906 11.2935 24.0906 10.9238 23.0916L8.40185 16.2761C8.28562 15.962 8.03797 15.7144 7.72386 15.5982L0.908445 13.0762C-0.0906252 12.7065 -0.0906209 11.2935 0.908449 10.9238L7.72386 8.40185C8.03797 8.28562 8.28562 8.03797 8.40185 7.72386L10.9238 0.908445Z" fill="#6D71FF"/>
      </svg>

      <h2 className=" font-extrabold text-fS32px text-center pt-4 pb-22  mt-0 mb-12">How to <span className="text-pink my-4">use</span></h2>


      <div className="my-2/3 mx-6 lg:my-24 lg:mx-24 flex flex-col lg:block lg:grid lg:grid-cols-4 gap-12 ">

          <div className="items-center text-center z-50">
              <h3 className="pb-8 font-extrabold text-xl">Step 1</h3>

              <div className="bg-black bg-opacity-60 rounded-md p-8 h-5/6 drop-shadow-lg ">

                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className="pb-1">Register</h3>
                      <span className="text-pink">Server</span>
                  </div>
                  <p className="font-medium text-base px-2 text-center"> An administrator use the command <span className="text-pink">/Create new server</span> to register the server within the bot.</p>

              </div>
          </div>

          <div className="items-center text-center drop-shadow-lg z-50">
              <h3 className="pb-8 font-extrabold text-xl">Step 2</h3>

              <div className="bg-black bg-opacity-60 rounded-md p-8 h-5/6">

                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className="pb-1">Enable</h3>
                      <span className="text-pink">Tokens</span>
                  </div>

                  <p className="font-medium text-base">Use the <span className="text-pink">/enable token</span> command to choose which tokens to make available on your server.</p>
              </div>
          </div>

          <div className="items-center text-center drop-shadow-lg z-50">
              <h3 className="pb-8 font-extrabold text-xl">Step 3</h3>
              <div className="bg-black bg-opacity-60 rounded-md p-8 h-5/6 items-center">
                  <div className="font-extrabold text-2xl pb-4">
                      <h3 className=" pb-1">Set</h3>
                      <span className="text-pink">Tokens</span>

                  </div>

                  <p className="font-medium text-base">Use the <span className="text-pink">/set wallet</span> command to add the address of the wallet you
                      want to receive tokens.</p>
              </div>
          </div>

          <div className="items-center text-center drop-shadow-lg z-50">
              <h3 className="pb-8 font-extrabold text-xl ">Step 4</h3>
              <div className="bg-black bg-opacity-60 rounded-md p-8 h-5/6 ">
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
