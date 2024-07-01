import React from "react";
import { iconsOne, iconsTwo, iconsThree } from "../../lib/icons";

const Main = () => {
  return (
    <div className="pt-4 pb-8">
      <div className="mycontainer mx-auto my-0 px-3">
        <div className="">
          <div className="flex justify-center items-center">
            <svg
              viewBox="176.20000000000005 47.4 530.8 530.7"
              xmlns="http://www.w3.org/2000/svg"
              width="1834"
              height="2500"
              fill="white"
              className="h-[100px] w-[100px]"
            >
              <circle cx="441.6" cy="312.8" fill="none" r="227.4" />
              <g fill="#f6b133">
                <path d="M441.6 47.4c-146.6 0-265.4 118.8-265.4 265.4S295 578.1 441.6 578.1 707 459.3 707 312.7 588.1 47.4 441.6 47.4zm0 492.8c-125.6 0-227.4-101.8-227.4-227.4S316 85.4 441.6 85.4 669 187.2 669 312.8 567.2 540.2 441.6 540.2z" />
                <path d="M412 214h-34.5c-2.8 0-5-2.3-5-5v-25.2c0-2.8 2.3-5 5-5H412c2.8 0 5 2.3 5 5V209c.1 2.7-2.2 5-5 5zM493.5 214H459c-2.8 0-5-2.3-5-5v-25.2c0-2.8 2.3-5 5-5h34.5c2.8 0 5 2.3 5 5V209c0 2.7-2.2 5-5 5zM340.5 313.7h-45.4v-32.3s1.8-44.6 43.7-45.2h191.4v-26.3h45.6v25.4s-1.2 45.9-43.4 46.5l-33.8.9.5 156.2s.5 2.6-2.6 4.3l-35.2 12.5s-7.8 3.2-8.1-4.7V282H418v155.3s1 4.6-4.1 6.8l-32.3 11.4s-10.1 3.8-10-6.3V281.7h-30.9z" />
              </g>
            </svg>
          </div>

          <div className="mt-5 mb-6">
            <h2 className="text-[#edb703] font-[700] text-[17.4px] leading-[32.4px] text-center">
              Welcome to the Pi browser
            </h2>
          </div>

          <div className="flex flex-col gap-14 p-6 lg:w-[400px] my-0 mx-auto">
            <div className="flex items-center justify-between">
              {iconsOne.map((icon, index) => (
                <div
                  key={index}
                  className="w-[60px] h-[60px]  flex items-center justify-center flex-col"
                >
                  <div className="w-[60px] h-[60px]">
                    <a href={icon.url}>
                      <img
                        src={icon.src}
                        alt="phone"
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </div>

                  <p className="mt-2 text-[#783a8c]">{icon.name}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              {iconsTwo.map((icon, index) => (
                <div
                  key={index}
                  className="w-[60px] h-[60px] flex items-center justify-center flex-col"
                >
                  <div className="w-[60px] h-[60px]">
                    <a href={icon.url}>
                      <img
                        src={icon.src}
                        alt="phone"
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </div>

                  <p className="mt-2 text-[#783a8c]">{icon.name}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              {iconsThree.map((icon, index) => (
                <div
                  key={index}
                  className="w-[60px] h-[60px]  flex items-center justify-center flex-col"
                >
                  <div className="w-[60px] h-[60px]">
                    <a href={icon.url}>
                      <img
                        src={icon.src}
                        alt="phone"
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </div>

                  <p className="mt-2 text-[#783a8c]">{icon.name}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="w-[60px] h-[60px]">
                <div className="w-[60px] h-[60px]">
                  <a href="/wallet">
                    <img
                      src="/p2p.jpg"
                      alt="phone"
                      className="h-full w-full object-contain"
                    />
                  </a>
                </div>

                <p className="mt-2 text-[#783a8c]">Exchange</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center">
            <a href="/validate">
              <button className="p-2 text-[14px] flex items-center w-[100%] gap-2 bg-[#783a8c] rounded-[4px] text-white  justify-center  lg:w-[100%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-[30px] h-[30px]"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path>
                </svg>
                Explore The Testnet Ecosystem
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
