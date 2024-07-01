import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-10 px-4">
      <div className="mycontainer mx-auto my-0 ">
        <div className="relative flex flex-col gap-20 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[55%] md:flex-row flex flex-col gap-16 lg:flex-row lg:gap-28">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://minepi.com/white-paper/"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Pi Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://minepi.com/support/"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Support and FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://minepi.com/pioneer-code-of-conduct/"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Community Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://socialchain.app/tos"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="group">
                <a
                  href="https://socialchain.app/tos"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://socialchain.app/developer_terms"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Developer Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://minepi.com/pi-trademark-guidelines/"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Pi Trademark
                </a>
              </li>
              <li>
                <a
                  href="https://minepi.com/safety/"
                  className="text-[#ccc] font-[500] hover:text-[#84358E] transition-all ease-in-out duration-[0.2s] cursor-pointer"
                >
                  Safety Center
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pb-20 items-end relative lg:w-[45%] lg:absolute top-0 right-0 h-auto">
            <a href="/">
              <img src="/logo.webp" alt="" className="h-auto w-[65%] lg:absolute lg:top-0 lg:right-0 md:absolute top-0 right-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
