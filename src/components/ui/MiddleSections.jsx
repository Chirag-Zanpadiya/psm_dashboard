import React from "react";

const MiddleSections = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* left side two btn : all stacked + stacked */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* <div></div> */}
        <div className="flex gap-2 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none flex items-center justify-center py-3 lg:py-4 lg:px-6 bg-[#061935] rounded-full ">
            <span className="font-bold text-[16px] leading-5 text-[#FFFFFF]">
              All stakes
            </span>
          </div>
          <div className="flex-1 lg:flex-none flex items-center justify-center py-3 lg:py-4 lg:px-6 bg-[#E3E6E9] rounded-full">
            <span className="font-bold text-[16px] leading-5 text-[#061935]">
              Staked
            </span>
          </div>
        </div>
      </div>
      {/* right side two btn : all stacked + stacked */}
      <div className="flex  gap-1 flex-row items-center justify-between lg:gap-2 ">
        <div className="relative w-1/2 lg:w-[280px] ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="block w-full py-3 lg:py-4 pl-10 pr-3 bg-white border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />

          {/*  */}
        </div>

        <div className="flex items-center  gap-1 lg:gap-2">
          <button className=" order-2 md:order-1 flex items-center px-4 py-3 lg:py-4 space-x-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
            <span className=" block md:hidden font-bold text-sm lg:text-[16px] leading-5 text-[#061935]">
              All
            </span>
            <span className=" hidden md:block font-bold text-sm lg:text-[16px] leading-5 text-[#061935]">
              All Assets
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_4551)">
                <path
                  d="M17.0002 9.16994C16.8128 8.98369 16.5594 8.87915 16.2952 8.87915C16.031 8.87915 15.7776 8.98369 15.5902 9.16994L12.0002 12.7099L8.46019 9.16994C8.27283 8.98369 8.01938 8.87915 7.75519 8.87915C7.49101 8.87915 7.23756 8.98369 7.05019 9.16994C6.95646 9.26291 6.88207 9.37351 6.8313 9.49537C6.78053 9.61723 6.75439 9.74793 6.75439 9.87994C6.75439 10.012 6.78053 10.1427 6.8313 10.2645C6.88207 10.3864 6.95646 10.497 7.05019 10.5899L11.2902 14.8299C11.3832 14.9237 11.4938 14.9981 11.6156 15.0488C11.7375 15.0996 11.8682 15.1257 12.0002 15.1257C12.1322 15.1257 12.2629 15.0996 12.3848 15.0488C12.5066 14.9981 12.6172 14.9237 12.7102 14.8299L17.0002 10.5899C17.0939 10.497 17.1683 10.3864 17.2191 10.2645C17.2699 10.1427 17.296 10.012 17.296 9.87994C17.296 9.74793 17.2699 9.61723 17.2191 9.49537C17.1683 9.37351 17.0939 9.26291 17.0002 9.16994Z"
                  fill="#061935"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_4551">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <div className="flex py-2 px-4 lg:py-3 space-x-1 bg-gray-200 rounded-full">
            <button class="p-1.5 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <button className="p-1.5 bg-white text-gray-900 rounded-full shadow-sm focus:outline-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSections;
