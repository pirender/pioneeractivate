"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    "Pi Blockchain",
    "Developers",
    "About us",
    "Blog",
    "Support",
  ];

  const toggleMenu = () => {
    if (menuOpen) {
      // Start slide-out animation
      setMenuOpen(false);
      setTimeout(() => setMenu(false), 500); // Duration of slide-out animation
    } else {
      setMenu(true);
      setTimeout(() => setMenuOpen(true), 10); // Small delay to ensure visibility before starting animation
    }
  };

  const toggleSearch = () => {
    if (searchOpen) {
      // Start slide-out animation
      setSearchOpen(false);
      setTimeout(() => setSearchVisible(false), 500); // Duration of slide-out animation
    } else {
      setSearchVisible(true);
      setTimeout(() => setSearchOpen(true), 10); // Small delay to ensure visibility before starting animation
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  // Define the container variants for staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Change 100 to the scroll position you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 fixed top-0 z-50 w-full ${
        isScrolled ? "bg-[#593B8B]" : "bg-transparent"
      }`}
    >
      <div className="mycontainer my-0 mx-auto flex items-center justify-between py-6 px-3">
        <a href="/">
        <Image src="/logo.webp" alt="logo" width={120} height={120} />
        </a>

        <div className="items-center gap-10 hidden lg:flex">
          <div className="flex items-center gap-2">
            <div>
              <ul className="flex items-center gap-3">
                <li className="group relative">
                  <div className="flex items-center gap-3">
                    <div>
                      <a
                        href="https://minepi.com/pi-blockchain/"
                        className="text-white"
                      >
                        Pi Blockchain
                      </a>
                      <div
                        className={`w-0 h-[2px] transition-all duration-[0.4s] ease-in group-hover:w-full ${
                          !isScrolled ? "bg-white" : "bg-[#fab44b]"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={`${!isScrolled ? "white" : "#fab44b"}`}
                        className="h-[20px] w-[20px]"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-0 pt-[15px]">
                    <ul className="bg-white transition-all duration-[0.8s] ease-in opacity-0 w-[280px] py-8 pl-6 hidden flex-col gap-3 rounded-[10px] group-hover:opacity-[1] group-hover:flex">
                      <li className="line-under w-[25%]">
                        <a href="https://minepi.com/pi-blockchain/pi-node/" className="text-gray-700">
                          Pi Node
                        </a>
                        <div className="pops"></div>
                      </li>
                      <li className="line-under w-[52%]">
                        <a href="https://blockexplorer.minepi.com/" className="text-gray-700">
                          Pi BlockExplorer
                        </a>
                        <div className="pops"></div>
                      </li>
                      <li className="line-under w-[46%]">
                        <a href="https://minepi.com/white-paper/" className="text-gray-700">
                          Pi Whitepaper
                        </a>
                        <div className="pops"></div>
                      </li>
                      <li className="line-under w-[33%]">
                        <a href="https://minepi.com/roadmap/" className="text-gray-700">Roadmap</a>
                        <div className="pops"></div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="group relative">
                  <div className="flex items-center gap-3">
                    <div>
                      <a
                        href="https://minepi.com/developers/"
                        className="text-white"
                      >
                        Developers
                      </a>
                      <div
                        className={`w-0 h-[2px] transition-all duration-[0.4s] ease-in group-hover:w-full ${
                          !isScrolled ? "bg-white" : "bg-[#fab44b]"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={`${!isScrolled ? "white" : "#fab44b"}`}
                        className="h-[20px] w-[20px]"
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-0 pt-[15px]">
                    <ul className="bg-white transition-all duration-[0.8s] ease-in opacity-0 py-8 px-6 hidden flex-col gap-3 rounded-[10px] group-hover:opacity-[1] w-[280px] group-hover:flex">
                      <li className="line-under w-[60%]">
                        <div>
                          <a href="https://minepi.com/developers/" className="text-gray-700">
                            New Developers
                          </a>
                          <div className="pops"></div>
                        </div>
                      </li>
                      <li className="line-under w-[60%]">
                        <a href="https://minepi.com/developers/" className="text-gray-700">
                          Why Build on Pi?
                        </a>
                        <div className="pops"></div>
                      </li>
                      <li className="line-under w-[48%]">
                        <a href="https://minepi.com/developers/pi-hackathon/" className="text-gray-700">
                          Pi Hackathon
                        </a>
                        <div className="pops"></div>
                      </li>
                      <li className="line-under w-[85%]">
                        <a href="https://minepi.com/developer-ambassador/" className="text-gray-700">
                          Developer Ambassador
                        </a>
                        <div className="pops"></div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="flex items-center gap-4">
              <li className=" group">
                <a href="https://minepi.com/about/" className="text-white">
                  About Us
                </a>
                <div
                  className={`w-0 h-[2px] transition-all duration-[0.4s] ease-in group-hover:w-full ${
                    !isScrolled ? "bg-white" : "bg-[#fab44b]"
                  }`}
                ></div>
              </li>
              <li className="group">
                <a href="https://minepi.com/blog/" className=" text-white">
                  Blog
                </a>
                <div
                  className={`w-0 h-[2px] transition-all duration-[0.4s] ease-in group-hover:w-full ${
                    !isScrolled ? "bg-white" : "bg-[#fab44b]"
                  }`}
                ></div>
              </li>
              <li className="group">
                <a href="https://minepi.com/support/" className=" text-white">
                  Support
                </a>
                <div
                  className={`w-0 h-[2px] transition-all duration-[0.4s] ease-in group-hover:w-full ${
                    !isScrolled ? "bg-white" : "bg-[#fab44b]"
                  }`}
                ></div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://twitter.com/PiCoreTeam">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-[30px] w-[30px] cursor-pointer"
              >
                <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/PiCoreTeam/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-[30px] w-[30px] cursor-pointer"
              >
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/c/PiCoreTeam">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-[30px] w-[30px] cursor-pointer"
              >
                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/c/PiCoreTeam">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-[30px] w-[30px] cursor-pointer"
              >
                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
              </svg>
            </a>
          </div>
          <div>
            <svg
              className="h-[30px] w-[30px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              onClick={toggleSearch}
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <div>
            <svg
              className="h-[30px] w-[30px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              onClick={toggleSearch}
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>

          <div>
            {!menuOpen ? (
              <svg
                className="h-[30px] w-[30px] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                onClick={toggleMenu}
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-[30] h-[30px] cursor-pointer"
                onClick={toggleMenu}
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            )}
          </div>
        </div>
        {searchVisible && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-opacity-40 bg-black z-[90] ${
              searchOpen
                ? "bg-opacity-40 transition-all duration-500 ease-in-out"
                : "bg-opacity-0 transition-all duration-500 ease-in-out"
            }`}
          >
            <div
              className={`w-full py-8 px-10 bg-[#593b8b] ${
                searchOpen
                  ? "translate-y-0 transition-all duration-500 ease-in-out"
                  : "-translate-y-full transition-all duration-500 ease-in-out"
              }`}
            >
              <div className="flex items-center justify-center border-b-2 border-[#db9c3f] pb-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-white font-semibold bg-transparent placeholder:text-white focus:outline-none focus:cursor-[white] placeholder:tracking-widest"
                />
                <div className="bg-[#00000020] rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-[12] h-[12px] cursor-pointer font-bold"
                    onClick={toggleSearch}
                  >
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 0.95 : 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-[70px] left-0 w-full h-full bg-[#251339] flex flex-col justify-center items-center z-50 pb-[150px] m-auto`}
          >
            <nav className="text-center">
              <motion.ul
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                variants={containerVariants}
                transition={{ duration: 0.5 }}
                className="text-white space-y-5 text-2xl"
              >
                {menuItems.map((item, index) => (
                  <motion.li key={index} variants={listItemVariants}>
                    <a className="font-bold text-3xl" href="#">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.hr
                initial={{ width: 0 }}
                animate={{ width: menuOpen ? "60%" : "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="my-5 mx-auto"
              />
              <motion.div
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex justify-center space-x-5 mt-5"
              >
                <motion.svg
                  variants={iconVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-[30px] w-[30px] cursor-pointer"
                >
                  <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
                </motion.svg>
                <motion.svg
                  variants={iconVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-[30px] w-[30px] cursor-pointer"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </motion.svg>
                <motion.svg
                  variants={iconVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-[30px] w-[30px] cursor-pointer"
                >
                  <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                </motion.svg>
                <motion.svg
                  variants={iconVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-[30px] w-[30px] cursor-pointer"
                >
                  <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                </motion.svg>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
