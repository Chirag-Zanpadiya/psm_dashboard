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
import Logo from "./Logo";
import Button from "./Button";
import Icon from "../Common/Icon";

const NavBar = () => {
  return (
    <div className="h-full w-full ">
      <div className="flex justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-1 ">
          <Button size="sm" weight="medium" leftIcon={<Icon name="neobank" />}>
            Neo Bank
          </Button>
          <Button size="sm" weight="medium" leftIcon={<Icon name="crypto" />}>
            Crypto
          </Button>
          <Button size="sm" weight="medium" leftIcon={<Icon name="wealth" />}>
            Wealth
          </Button>
          <Button size="sm" weight="medium" leftIcon={<Icon name="nfts" />}>
            NFTs
          </Button>
          <Button size="sm" weight="medium" leftIcon={<Icon name="card" />}>
            Card
          </Button>
        </div>

        <div className="flex gap-1 items-center  lg:gap-2">
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              weight="medium"
              leftIcon={<Icon name="transcation" />}
            >
              Transcation
            </Button>

            <Button
              size="sm"
              weight="medium"
              className="py-3"
              leftIcon={<Icon name="learning" />}
            ></Button>

            <Button
              size="sm"
              weight="medium"
              leftIcon={<Icon name="bell" />}
            >
            </Button>
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
