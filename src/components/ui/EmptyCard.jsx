import React from "react";

const EmptyCard = () => {
  return (
    <div className="w-full bg-white rounded-3xl py-20 flex flex-col items-center justify-center text-center">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white" />
        <div className="-ml-5 h-10 w-10 rounded-full bg-gray-300 border-2 border-white" />
        <div className="-ml-5 h-10 w-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-white font-bold">
          +
        </div>
      </div>

      <p className="font-medium text-[16px] leading-5 text-[#8A94A1] mb-6">You haven't staked yet</p>

       <button className="flex-1 bg-[#1A48FF] text-white py-3 px-4 text-[14px] leading-4 rounded-full font-semibold  hover:bg-blue-700 transition">
          Start Staking
        </button>
    </div>
  );
};

export default EmptyCard;
