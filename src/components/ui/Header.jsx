import {
  Bubbles,
  Building2,
  Calendar,
  ChevronLeft,
  Infinity,
  Panda,
  User,
} from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white  mt-8 px-4 py-8 rounded-md lg:px-8">
      <div className=" flex justify-between sm:justify-between ">
        <div className="hidden lg:flex items-center px-4 py-3 rounded-full bg-gray-200">
          <span className="font-serif text-xs font-semibold text-slate-900 ">
            Go Back
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex lg:hidden  items-center rounded-full px-2 py-2  my-2 bg-gray-200">
            <span className="font-serif text-xs font-semibold text-slate-900 w-fit">
              <ChevronLeft size={16} />
            </span>
          </div>

          <div className=" hidden md:flex lg:hidden  items-center gap-1">
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-800 rounded-full text-white">
              <span>
                <Infinity size={12} />
              </span>
              <span className="font-serif text-xs">Matic</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full">
              <span>
                <Panda size={12} />
              </span>
              <span className="font-serif text-xs">Pancake Swap</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col  justify-center place-items-end">
          <span className="font-serif text-slate-500 text-xs">
            Last Harvest
          </span>
          <span className="font-serif text-md">4 minutes ago</span>
        </div>
      </div>

      <div className="md:flex  md:items-center mt-10 md:justify-between">
        <div className="max-w-fit flex  gap-3 items-center flex-wrap">
          <div className="">
            <span className="flex text-lg sm:text-2xl lg:text-5xl font-sm  p-4">
              BTC
              <User
                className="ml-2 w-3 h-3 lg:w-5 lg:h-5 bg-orange-500 rounded-full text-white  
            "
                size={12}
              />
            </span>
          </div>
          <span className="text-xl lg:text-3xl font-sm text-gray-500">/</span>
          <div className="">
            <span className="flex text-lg sm:text-2xl lg:text-5xl font-sm p-4">
              USDT
              <Calendar
                className="ml-2 w-3 h-3 lg:w-5 lg:h-5 bg-green-500 rounded-full text-white  
            "
                size={12}
              />
            </span>
          </div>
          <span className="text-xl lg:text-3xl font-sm text-gray-500">/</span>
          <div className="">
            <span className="flex text-lg sm:text-2xl lg:text-5xl font-sm p-4">
              ETH
              <Building2
                className="ml-2 w-3 h-3 lg:w-5 lg:h-5 bg-blue-500 rounded-full text-white  
            "
                size={12}
              />
            </span>
          </div>
          <span className="hidden md:block text-xl lg:text-3xl font-sm text-gray-500">
            /
          </span>
          <div className="hidden md:block">
            <span className="flex text-lg sm:text-2xl lg:text-5xl font-sm p-4">
              XRP
              <Bubbles
                className=" ml-2 w-3 h-3 lg:w-5 lg:h-5 bg-black rounded-full text-white  
              "
                size={12}
              />
            </span>
          </div>
        </div>

        <div className="flex sm:hidden xl:flex items-center gap-1">
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-800 rounded-full text-white">
            <span>
              <Infinity size={12} />
            </span>
            <span className="font-serif text-xs">Matic</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full">
            <span>
              <Panda size={12} />
            </span>
            <span className="font-serif text-xs">Pancake Swap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
