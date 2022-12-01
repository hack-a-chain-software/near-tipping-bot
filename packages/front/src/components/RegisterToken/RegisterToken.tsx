export const RegisterToken = () => {
  return(
      <section id="register_token" className="text-white flex flex-col items-center py-32 px-8 ">

          <svg className="absolute top-[2210px] left-0 z-40" width="250" height="800" viewBox="0 0 281 953" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_7_223)">
                  <path d="M-157.791 872.706C-265.437 870.068 -377.061 880.177 -463.923 807.084C-560.275 726.005 -611.579 606.354 -616.654 486.576C-622.519 348.153 -600.105 202.011 -492.772 126.2C-378.375 45.4 -211.34 30.3869 -77.0351 105.435C43.7853 172.947 50.4551 329.491 99.9648 457.413C148.446 582.678 266.077 718.243 200.829 823.37C135.849 928.065 -28.7623 875.867 -157.791 872.706Z" fill="#424250" />
              </g>
              <defs>
                  <filter id="filter0_d_7_223" x="-677.511" y="0.608887" width="957.587" height="951.882" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="30" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.537255 0 0 0 0 0.968627 0 0 0 0.04 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_223" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_223" result="shape" />
                  </filter>
              </defs>
          </svg>
          <svg className="absolute top-[1800px] right-0 w-[14vw] h-[75vw] z-40"   viewBox="0 0 232 762" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.2646 191.682C135.839 105.677 204.92 19.8048 304.221 2.48064C398.49 -13.9656 475.873 61.5131 559.146 108.659C643.126 156.205 758.547 180.532 783.412 273.779C808.248 366.919 719.034 444.653 671.031 528.244C623.133 611.653 599.347 722.325 508.197 753.03C414.827 784.483 321.423 722.025 234.725 675.22C144.721 626.631 40.4429 581.609 9.86944 484.003C-21.349 384.338 28.7926 280.791 83.2646 191.682Z" fill="#424250"/>
          </svg>

           <svg className="absolute top-[2450px] right-[100px] z-50"width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9238 0.908445C11.2935 -0.0906252 12.7065 -0.0906209 13.0762 0.908449L15.5982 7.72386C15.7144 8.03797 15.962 8.28562 16.2761 8.40185L23.0916 10.9238C24.0906 11.2935 24.0906 12.7065 23.0916 13.0762L16.2761 15.5982C15.962 15.7144 15.7144 15.962 15.5982 16.2761L13.0762 23.0916C12.7065 24.0906 11.2935 24.0906 10.9238 23.0916L8.40185 16.2761C8.28562 15.962 8.03797 15.7144 7.72386 15.5982L0.908445 13.0762C-0.0906252 12.7065 -0.0906209 11.2935 0.908449 10.9238L7.72386 8.40185C8.03797 8.28562 8.28562 8.03797 8.40185 7.72386L10.9238 0.908445Z" fill="#FDFDFF"/>
          </svg>


          <p className="font-extrabold text-fS32px pt-12 pb-8 z-50 text-center">Didn’t find the <span className="text-azoxo">token you need?</span></p>

          <div className="flex flex-col lg:flex-row items-center pb-12 my-14 z-50">
              <img src="\images\tipping_bot.png" alt="Tipping bot"></img>
              <div className="flex flex-col items-center px-8">
                  <p className="text-center pb-12 font-normal text-xl">Make a request to add a new token <br className="hidden lg:block"></br>
                      through google forms by clicking the button below</p>
                  <button className="text-white flex rounded-full  p-2.5 justify-between w-1/8 text-xl  inline-flex items-center
                      bg-gradient-to-r from-pink to-blue_button bottom-0 " type="button">
                          <span className=" font-medium px-4 text-xl"  > Click here to request </span>
                  </button>
              </div>
          </div>

      </section>


  );

}

export default RegisterToken;
