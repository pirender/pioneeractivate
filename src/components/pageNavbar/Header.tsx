import React from "react";

const Header = () => {
  return (
    <div className="bg-[#593B8B] py-3">
      <div className="navCon mx-auto my-0 flex justify-between items-center px-3">
        <div>
          <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="White"
            className="h-[30px] w-[30px]"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
          </a>
        </div>
        <div>
          <p className="flex items-center gap-3 text-white">
            Home
            <svg
              viewBox="176.20000000000005 47.4 530.8 530.7"
              xmlns="http://www.w3.org/2000/svg"
              width="1834"
              height="2500"
              fill="white"
              className="h-[30px] w-[30px]"
            >
              <circle cx="441.6" cy="312.8" fill="none" r="227.4" />
              <g fill="#f6b133">
                <path d="M441.6 47.4c-146.6 0-265.4 118.8-265.4 265.4S295 578.1 441.6 578.1 707 459.3 707 312.7 588.1 47.4 441.6 47.4zm0 492.8c-125.6 0-227.4-101.8-227.4-227.4S316 85.4 441.6 85.4 669 187.2 669 312.8 567.2 540.2 441.6 540.2z" />
                <path d="M412 214h-34.5c-2.8 0-5-2.3-5-5v-25.2c0-2.8 2.3-5 5-5H412c2.8 0 5 2.3 5 5V209c.1 2.7-2.2 5-5 5zM493.5 214H459c-2.8 0-5-2.3-5-5v-25.2c0-2.8 2.3-5 5-5h34.5c2.8 0 5 2.3 5 5V209c0 2.7-2.2 5-5 5zM340.5 313.7h-45.4v-32.3s1.8-44.6 43.7-45.2h191.4v-26.3h45.6v25.4s-1.2 45.9-43.4 46.5l-33.8.9.5 156.2s.5 2.6-2.6 4.3l-35.2 12.5s-7.8 3.2-8.1-4.7V282H418v155.3s1 4.6-4.1 6.8l-32.3 11.4s-10.1 3.8-10-6.3V281.7h-30.9z" />
              </g>
            </svg>
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-[30px] w-[30px]"
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
