import React from "react";

const Below12Card = ({ symbol, name, apy, staked, reward, subtitle }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-50 ">
      {/* TOP */}
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Coin Icon */}
          <div className="flex items-center gap-2 ">
            <p>{symbol}</p>

            <div className="flex flex-col ">
              <p className="font-medium text-[16px] leading-5 text-[#061935]">
                {name}
              </p>
              <p className="font-medium text-[12px] leading-4 text-[#8A94A1]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#E3E6E9" />
          <g clip-path="url(#clip0_57_3262)">
            <path
              d="M20.47 20.0294L18.11 22.3894C17.9859 22.5143 17.9162 22.6833 17.9162 22.8594C17.9162 23.0355 17.9859 23.2045 18.11 23.3294C18.172 23.3919 18.2457 23.4415 18.327 23.4753C18.4082 23.5092 18.4954 23.5266 18.5834 23.5266C18.6714 23.5266 18.7585 23.5092 18.8398 23.4753C18.921 23.4415 18.9947 23.3919 19.0567 23.3294L21.8834 20.5027C21.9459 20.4408 21.9954 20.367 22.0293 20.2858C22.0631 20.2046 22.0806 20.1174 22.0806 20.0294C22.0806 19.9414 22.0631 19.8543 22.0293 19.773C21.9954 19.6918 21.9459 19.6181 21.8834 19.5561L19.0567 16.6961C18.9944 16.6343 18.9205 16.5854 18.8393 16.5522C18.7581 16.5191 18.6711 16.5022 18.5834 16.5027C18.4956 16.5022 18.4087 16.5191 18.3274 16.5522C18.2462 16.5854 18.1723 16.6343 18.11 16.6961C17.9859 16.821 17.9162 16.99 17.9162 17.1661C17.9162 17.3422 17.9859 17.5112 18.11 17.6361L20.47 20.0294Z"
              fill="#061935"
            />
          </g>
          <defs>
            <clipPath id="clip0_57_3262">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(12 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* APY */}
      <div className="mt-6">
        <p className="font-medium text-[12px] leading-4 text-[#8A94A1]">APY</p>
        <p className="font-medium text-[12px] leading-4 text-[#8A94A1] lg:text-[40px] lg:leading-10 lg:tracking-[-0.02em] lg:text-[#061935] mt-1">
          {apy}%
        </p>
      </div>

      {/* STATS */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-medium text-[12px] leading-4 text-[#8A94A1]">
            You Staked
          </p>
          <p className="font-medium text-[16px] leading-5 text-[#8A94A1]">
            {staked}
          </p>
        </div>

        <div className="flex flex-col   ">
          <p className="font-medium text-[12px] leading-4 text-[#8A94A1]">
            Your Rewards
          </p>
          <p className="font-medium text-end text-[16px] leading-5 text-[#8A94A1]">
            {reward}
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 bg-[#1A48FF] text-white py-3 px-4 text-[14px] leading-4 rounded-full font-semibold  hover:bg-blue-700 transition">
          Stake
        </button>

        <button className="flex-1 bg-[#E3E6E9] py-3 px-4 text-[#061935]  text-[12px] leading-4 rounded-full font-semibold hover:bg-gray-300 transition">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Below12Card;
