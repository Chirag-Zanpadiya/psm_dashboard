import React from "react";

const Footer = () => {
  return (
    <footer className="mt-25 w-full  pt-16 pb-8 relative">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-4  md:flex md:flex-row items-center md:justify-between ]">
        <p className="font-medium text-[12px] leading-4 text-[#8A94A1] ">
          © 2023 Ocean Money | All Rights Reserved
        </p>

        {/*  status */}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="font-medium text-[12px] leading-4 text-[#8A94A1]">
            v 0.10
          </span>
          <span className="flex items-center gap-1 bg-white px-3 py-2 rounded-full">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#00C113" />
            </svg>

            <span className="text-[#061935]  text-[12px] leading-4  font-semibold">
              Status
            </span>
          </span>
        </div>
      </div>

      {/* middle icons */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-gray-200/60 rounded-full px-2 py-2">
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#1A48FF" />
                <g clip-path="url(#clip0_57_3133)">
                  <path
                    d="M16.6667 19.3333C18.1394 19.3333 19.3333 18.1394 19.3333 16.6667C19.3333 15.1939 18.1394 14 16.6667 14C15.1939 14 14 15.1939 14 16.6667C14 18.1394 15.1939 19.3333 16.6667 19.3333Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6667 25.9998C18.1394 25.9998 19.3333 24.8059 19.3333 23.3332C19.3333 21.8604 18.1394 20.6665 16.6667 20.6665C15.1939 20.6665 14 21.8604 14 23.3332C14 24.8059 15.1939 25.9998 16.6667 25.9998Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.3337 19.3333C24.8064 19.3333 26.0003 18.1394 26.0003 16.6667C26.0003 15.1939 24.8064 14 23.3337 14C21.8609 14 20.667 15.1939 20.667 16.6667C20.667 18.1394 21.8609 19.3333 23.3337 19.3333Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.333 24.6667V22"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.6667 23.3335H22"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3133">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="white" />
                <g clip-path="url(#clip0_57_3141)">
                  <path
                    d="M22 26H18V22C18 20.8667 18.8667 20 20 20C21.1333 20 22 20.8667 22 22V26Z"
                    stroke="#061935"
                    stroke-width="1.09091"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.9998 14L25.3332 18.6667V24.6667C25.3332 25.4 24.7332 26 23.9998 26H15.9998C15.2665 26 14.6665 25.4 14.6665 24.6667V18.6667L19.9998 14Z"
                    stroke="#061935"
                    stroke-width="1.09091"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3141">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-200/60  rounded-full px-2 py-2">
            <span className="" >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" rounded-full"
            >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.3"
                />
                <g clip-path="url(#clip0_57_3147)">
                  <path
                    d="M24.6668 14.6667H15.3335C14.2002 14.6667 13.3335 15.5334 13.3335 16.6667V22.6667C13.3335 23.8001 14.2002 24.6667 15.3335 24.6667H24.6668C25.8002 24.6667 26.6668 23.8001 26.6668 22.6667V16.6667C26.6668 15.5334 25.7335 14.6667 24.6668 14.6667ZM20.6668 22.6667C19.5335 22.6667 18.6668 21.8001 18.6668 20.6667C18.6668 19.5334 19.5335 18.6667 20.6668 18.6667C20.8668 18.6667 21.0002 18.6667 21.2002 18.7334C20.3335 18.9334 19.7335 19.7334 19.7335 20.6667C19.7335 21.6001 20.4002 22.4001 21.2002 22.6001C21.0002 22.6667 20.8002 22.6667 20.6668 22.6667ZM22.6668 22.6667C21.5335 22.6667 20.6668 21.8001 20.6668 20.6667C20.6668 19.5334 21.5335 18.6667 22.6668 18.6667C23.8002 18.6667 24.6668 19.5334 24.6668 20.6667C24.6668 21.8001 23.7335 22.6667 22.6668 22.6667Z"
                    stroke="#061935"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3147">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.3"
                />
                <g clip-path="url(#clip0_57_3151)">
                  <path
                    d="M15.333 19.3333C15.333 17.4667 16.7997 16 18.6663 16H22.6663"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.667 14L22.667 16L20.667 18"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.6663 20.6665C24.6663 22.5332 23.1997 23.9998 21.333 23.9998H17.333"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.333 26L17.333 24L19.333 22"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3151">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.3"
                />
                <g clip-path="url(#clip0_57_3158)">
                  <path
                    d="M19.4671 13.8667C16.4671 14.2 14.1338 16.7334 14.1338 19.8C14.1338 20.2667 14.2005 20.7334 14.2671 21.1334C14.3338 21.3334 14.4005 21.6 14.4671 21.8C15.2005 23.9334 17.1338 25.5334 19.4671 25.7334C19.6671 25.8 19.8671 25.8 20.1338 25.8C22.7338 25.8 25.0005 24.1334 25.8005 21.8"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.2731 22.2848L18.4004 19.4756L20.2731 16.6665L22.1459 19.4756L20.2731 22.2848Z"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.8327 19.4758L20.2721 20.0689L18.7114 19.4758"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.333 17.0002L25.9997 14.3335"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 14.3335L26 14.3335L26 16.3335"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3158">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.3"
                />
                <g clip-path="url(#clip0_57_3158)">
                  <path
                    d="M19.4671 13.8667C16.4671 14.2 14.1338 16.7334 14.1338 19.8C14.1338 20.2667 14.2005 20.7334 14.2671 21.1334C14.3338 21.3334 14.4005 21.6 14.4671 21.8C15.2005 23.9334 17.1338 25.5334 19.4671 25.7334C19.6671 25.8 19.8671 25.8 20.1338 25.8C22.7338 25.8 25.0005 24.1334 25.8005 21.8"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.2731 22.2848L18.4004 19.4756L20.2731 16.6665L22.1459 19.4756L20.2731 22.2848Z"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.8327 19.4758L20.2721 20.0689L18.7114 19.4758"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.333 17.0002L25.9997 14.3335"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 14.3335L26 14.3335L26 16.3335"
                    stroke="#061935"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_3158">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
