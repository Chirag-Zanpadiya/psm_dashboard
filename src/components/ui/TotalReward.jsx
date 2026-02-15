import React from "react";

const TotalReward = () => {
  return (
    <div className="h-full  flex flex-col justify-between ">
      {/* // outter most dic */}
      <div className="lg:flex lg:flex-col lg:justify-end ">
        {/* first div : total reward + number */}
        <div className="flex flex-col gap-4 lg:gap-8 ">
          {/* div for icon + number */}
          <div className="flex items-center gap-2 ">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 9.75C10.85 10.35 10.35 10.85 9.75 18.75C9.15 10.85 8.65 10.35 0.75 9.75C8.65 9.15 9.15 8.65 9.75 0.75C10.35 8.65 10.85 9.15 18.75 9.75Z"
                  stroke="#061935"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium text-[12px] leading-4 text-[#8A94A1]">
              Total Rewards
            </span>
          </div>
          {/* div for 40000 */}
          <div>
            <span className="font-medium text-[24px] leading-7 lg:text-[40px] lg:leading-10 tracking-[-0.02em] text-[#00C113]">
              €40,000
            </span>
          </div>
        </div>

      </div>

        {/* icon + see all button */}
      <div className="flex items-center justify-between ">
        {/* div for three icons */}
        <div class="flex items-center -space-x-5">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative z-10"
          >
            <g clip-path="url(#clip0_1_1)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                fill="#5975BE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9999 20.3705L19.9999 8L14 20.3705H25.9999ZM19.9999 24.7366L14 20.3705H25.9999L19.9999 24.7366ZM19.9999 26.3865L14.0001 22.1764L19.9999 32V26.3865ZM19.9999 32L26 22.1764L19.9999 26.3865V32Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative z-10"
          >
            <g clip-path="url(#clip0_1_2)">
              <g clip-path="url(#clip1_1_2)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z"
                  fill="#23292F"
                />
                <path
                  d="M34.4512 11.5752H30.8379L25.1206 17.231C24.2882 18.0513 23.1665 18.5112 21.9978 18.5112C20.8291 18.5112 19.7074 18.0513 18.875 17.231L13.1621 11.5752H9.54589L17.0684 19.0205C19.7934 21.7153 24.2085 21.7153 26.9316 19.0205L34.4512 11.5752Z"
                  fill="#FCFCFD"
                />
                <path
                  d="M9.5 32.2783H13.1157L18.8794 26.5767C19.7118 25.7563 20.8335 25.2964 22.0022 25.2964C23.1709 25.2964 24.2926 25.7563 25.125 26.5767L30.8867 32.2783H34.5L26.9316 24.7871C24.2065 22.0923 19.7915 22.0923 17.0684 24.7871L9.5 32.2783Z"
                  fill="#FCFCFD"
                />
              </g>
            </g>
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              rx="21"
              stroke="white"
              stroke-width="2"
            />
          </svg>

          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="relative z-10"
          >
            <rect x="1" y="1" width="42" height="42" rx="21" fill="#E3E6E9" />
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              rx="21"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M18.522 21.26H20.93V22.772H18.522V25.18H16.884V22.772H14.462V21.26H16.884V18.838H18.522V21.26ZM27.7281 21.68C28.2508 21.904 28.6614 22.2307 28.9601 22.66C29.2681 23.08 29.4221 23.5747 29.4221 24.144C29.4221 25.068 29.0861 25.81 28.4141 26.37C27.7328 26.9393 26.8228 27.224 25.6841 27.224C24.4148 27.224 23.4441 26.916 22.7721 26.3C22.1094 25.6747 21.7781 24.8067 21.7781 23.696H23.6121C23.6401 24.984 24.3121 25.628 25.6281 25.628C26.1974 25.628 26.6454 25.488 26.9721 25.208C27.2988 24.928 27.4621 24.55 27.4621 24.074C27.4621 23.5607 27.2941 23.164 26.9581 22.884C26.6221 22.604 26.1554 22.464 25.5581 22.464H24.8161V21.078H25.5441C26.7108 21.078 27.2941 20.616 27.2941 19.692C27.2941 19.272 27.1448 18.9453 26.8461 18.712C26.5474 18.4693 26.1368 18.348 25.6141 18.348C24.4848 18.348 23.8921 18.8753 23.8361 19.93H22.0161C22.0348 18.9313 22.3521 18.1613 22.9681 17.62C23.5934 17.0787 24.4801 16.808 25.6281 16.808C26.7014 16.808 27.5508 17.0553 28.1761 17.55C28.8108 18.0353 29.1281 18.698 29.1281 19.538C29.1281 20.49 28.6614 21.204 27.7281 21.68Z"
              fill="#061935"
            />
          </svg>
        </div>

        {/* div for see all button */}
        <div>
            <button className="bg-[#E3E6E9] px-4 py-3 lg:px-4 text-[#061935] text-[14px] leading-4 font-bold lg:py-3 rounded-full">
                See All
            </button>
        </div>
      </div>
    </div>
  );
};

export default TotalReward;
