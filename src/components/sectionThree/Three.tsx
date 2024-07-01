import React from "react";

// https://chatgpt.com/c/8bca55f1-271b-4c37-8ec6-a7cd2720e693
// https://chatgpt.com/c/83346c5d-9b97-46d1-b907-76f84a8dc823
// https://pi-net.onrender.com/


const Three = () => {
  return (
    <div className="py-3">
      <div className="mycontainer my-0 mx-auto px-5">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="lg:flex-1 flex items-center justify-center">
            <img src="/three.png" alt="phone image" className="w-[600px]"/>
          </div>

          <div className="flex flex-col gap-6 lg:flex-1 md:px-[66px] pt-[40px]">
            <h1 className="text-[32.1px] text-[#783a8c] font-semibold leading-[42.12px]">Pi makes crypto mining easy.</h1>
            <h4 className="text-[#444444] font-semibold">
              Breakthrough tech allows you to mine Pi on your phone without
              draining your battery.
            </h4>

            <button className="p-3 flex items-center gap-4 bg-[#783a8c] rounded-[4px] text-white  justify-center lg:w-[300px]">
              Learn The Tech Behind Pi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-[30px] h-[30px]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
