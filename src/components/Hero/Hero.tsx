// bpkd yxyb zktk xkrj
const Hero = () => {
  return (
    <div className="bg-[#251339] h-[100vh] flex items-center lg:justify-center">
      <div className="mycontainer my-0 mx-auto lg:flex lg:items-center px-3">
        <div className="mt-3 lg:w-[60%]">
          <h1 className="text-[34.58px] lg:text-[50px] lg:leading-[1.1em] leading-[43.7px] mb-[24px] font-bold text-white">
            The First Digital Currency You Can Mine On Your Phone
          </h1>

          <h3 className="mb-[33px] text-white text-[19.2px] leading-[25.6px]">
            Start mining Pi cryptocurrency today with our free, energy-light
            mobile app!
          </h3>

         <div className="items-center flex">
         <a href="/validate">
          <button className="py-[15px] px-[45px] flex items-center gap-3 border-2 rounded-[10px] border-[#db9c3f] text-[#db9c3f] justify-center font-[500]">
            Activate your wallet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#db9c3f"
              className="h-[20px] w-[20px]"
            >
              <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
            </svg>
          </button>
         </a>
         </div>
        </div>

        <div className="hidden w-40% lg:flex lg:justify-end">
          <img src="/phone.webp" alt="phone" className="h-auto w-[80%]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
