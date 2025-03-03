import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-[#0FABCA] w-full px-10 p-8 gap-[50px] flex flex-col sm:flex-row sm:items-center sm:justify-evenly sm:gap-0">
      <div className="flex flex-col gap-[30px]">
        <div className="flex items-end">
          <h1 className="text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] font-semibold text-white leading-[45px] sm:leading-[55px]">
            Thanks for reading&nbsp;
          </h1>

          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="heart-beat-animation text-[3rem] text-red-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
          </svg>
        </div>
        <a
          className="py-[11px] px-[40px] bg-white text-[#0FABCA] text-center rounded-md text-[1.4rem] font-semibold"
          href="mailto:it.nguyentienanh@gmail.com"
        >
          Contact me
        </a>
      </div>
      
      <div className="w-full sm:w-[27%]">
        <img
          src="https://i.ibb.co/ZMWkDzW/Crowdfunding-or-raising-money-for-startup.png"
          alt="Crowdfunding or raising money for startup"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default CTASection;
