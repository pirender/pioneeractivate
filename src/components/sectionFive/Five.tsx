import Image from "next/image";
import React from "react";

const Five = () => {
  return (
    <div className="gradient py-[80px] mt-[80px]">
      <div className="mycontainer my-0 mx-auto px-1">
        <div className="flex flex-col lg:flex-row lg:items-center md:px-[15%]">
          <div className="flex items-center lg:items-start lg:justify-start justify-center lg:flex-1">
            <img
              className="h-[auto] w-[70%] max-w-[450px]"
              src="/phone-pi.webp"
              alt="phone pi"
            />
          </div>

          <div className="flex flex-col gap-6 lg:flex-1">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-[25.5px] lg:text-[30px] lg:leading-10 leading-[31.5px] text-[#F4AF47]">
                Download the mobile app to start mining today! Join now.
              </h2>

              <h5 className="text-white text-[16px] font-[500] leading-[26px]">
                Keep your money! Mining Pi is free.  
                All you need is an invitation from an existing trusted
                member on the network. If you have an invitation you can
                download the mobile app
                below.
              </h5>
            </div>

            <div className="flex flex-col gap-8 lg:gap-2 lg:flex-row">
              <div>
                <img
                  className="h-[auto] mx-w-[563px]"
                  src="/google_play.png"
                  alt="google"
                />
              </div>
              <div>
                <img className="h-[auto] w-[563px] mx-w-[563px]" src="/apple_store.png" alt="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
