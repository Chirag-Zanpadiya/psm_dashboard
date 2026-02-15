import {
  BellRing,
  ChartNoAxesCombined,
  CircleDollarSign,
  CircleStar,
  FileText,
  IdCard,
  Landmark,
  Lightbulb,
  Menu,
  Network,
  Ship,
  SquareMenu,
  User,
} from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center w-fit  p-1">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7178 11.4984C5.25511 11.4984 0 6.34168 0 0H4.70438C4.70438 3.79589 7.84948 6.88209 11.7178 6.88209V11.4984Z"
              fill="#061935"
            />
            <path
              d="M25.513 11.4984C19.0503 11.4984 13.7951 6.34168 13.7951 0H18.4995C18.4995 3.79589 21.6446 6.88209 25.513 6.88209V11.4984Z"
              fill="#061935"
            />
            <path
              d="M11.7178 24C5.25511 24 0 18.8433 0 12.5016H4.70438C4.70438 16.2975 7.84948 19.3837 11.7178 19.3837V24Z"
              fill="#061935"
            />
            <path
              d="M25.513 24C19.0503 24 13.7951 18.8433 13.7951 12.5016H18.4995C18.4995 16.2975 21.6446 19.3837 25.513 19.3837V24Z"
              fill="#061935"
            />
          </svg>

          <h1 className="hidden lg:block font-bold ">OCEANMONEY</h1>
        </div>

        <div className="hidden lg:flex items-center gap-1 ">
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white hover:bg-blue-700 hover:text-white  ">
            <Landmark size={12} />
            <span className="text-sm font-sm ">Neo Banking</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white hover:bg-blue-700 hover:text-white  ">
            <CircleDollarSign size={12} />
            <span className="text-sm font-sm ">Crypto</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white hover:bg-blue-700 hover:text-white  ">
            <Network size={12} />
            <span className="text-sm font-sm  ">Wealth</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white hover:bg-blue-700 hover:text-white  ">
            <ChartNoAxesCombined size={12} />
            <span className="text-sm font-sm ">NFTs</span>
          </div>
          <div className="flex  items-center gap-1 px-3 py-2 rounded-full bg-white hover:bg-blue-700 hover:text-white  ">
            <div className="flex gap-1 items-center ">
              <IdCard size={14} />
              <span className="text-sm font-sm ">Card</span>
            </div>
          </div>
        </div>

        <div className="flex gap-1 items-center  lg:gap-2">
          <div className="flex items-center gap-1">
            <div className="hidden lg:flex items-center gap-1 px-3 py-2 rounded-full bg-[#E3E6E9] hover:bg-blue-700 hover:text-white">
              <FileText size={12} />
              <span className="text-sm font-sm ">Transactions</span>
            </div>
            <div className=" lg:flex items-center gap-1 px-3 py-3 rounded-full bg-[#E3E6E9] hover:bg-blue-700 hover:text-white">
              <Lightbulb  size={12} />
            </div>
            <div className="flex items-center gap-1 px-3 py-3 rounded-full bg-[#E3E6E9] hover:bg-blue-700 hover:text-white">
              <BellRing size={12} />
            </div>
          </div>

          <div className=" rounded-md flex">
            <div className="flex border-2 border-orange-600 items-center px-2 py-2   rounded-full bg-blue-700 text-white">
              <span className="text-xs font-medium flex items-center justify-between">
                ML
              </span>
            </div>
            <div className=" lg:block relative right-3 top-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="14" rx="7" fill="#FF5A00" />
                <g clip-path="url(#clip0_8_656)">
                  <path
                    d="M11.1668 6.20815C11.2085 5.99981 11.0418 5.74981 10.8335 5.74981L8.4585 5.41648L7.37516 3.24981C7.3335 3.16648 7.29183 3.12481 7.2085 3.08314C7.00016 2.95814 6.75016 3.04148 6.62516 3.24981L5.5835 5.41648L3.2085 5.74981C3.0835 5.74981 3.00016 5.79148 2.9585 5.87481C2.79183 6.04148 2.79183 6.29148 2.9585 6.45814L4.66683 8.12481L4.25016 10.4998C4.25016 10.5831 4.25016 10.6665 4.29183 10.7498C4.41683 10.9581 4.66683 11.0415 4.87516 10.9165L7.00016 9.79148L9.12516 10.9165C9.16683 10.9581 9.25016 10.9581 9.3335 10.9581C9.37516 10.9581 9.37516 10.9581 9.41683 10.9581C9.62516 10.9165 9.79183 10.7081 9.75016 10.4581L9.3335 8.08314L11.0418 6.41648C11.1252 6.37481 11.1668 6.29148 11.1668 6.20815Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_656">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(2 2)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="bg-black p-3 inline-block lg:hidden rounded-full">
            <svg
              viewBox="0 0 100 80"
              className="w-3 h-3 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="12" rx="6"></rect>
              <rect y="30" width="100" height="12" rx="6"></rect>
              <rect y="60" width="100" height="12" rx="6"></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
