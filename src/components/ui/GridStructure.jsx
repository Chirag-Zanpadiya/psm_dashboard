import React, { useState } from "react";
import MiddleSections from "./MiddleSections";
import OceanMoneyCard from "./OceanMoneyCard";
import TotalReward from "./TotalReward";
import Below12Card from "./Below12Card";
import EmptyCard from "./EmptyCard";
import Chart from "./Chart";

const assets = [
  {
    id: 1,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_3247)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#F0B90B"
          />
          <path
            d="M10.617 19.6715L10.6314 24.9599L15.125 27.6042V30.7003L8.0016 26.5224V18.125L10.617 19.6715ZM10.617 14.383V17.4648L8 15.9167V12.8349L10.617 11.2869L13.2468 12.8349L10.617 14.383ZM17.0016 12.8349L19.6186 11.2869L22.2484 12.8349L19.6186 14.383L17.0016 12.8349Z"
            fill="white"
          />
          <path
            d="M12.508 23.8638V20.7676L15.125 22.3157V25.3974L12.508 23.8638ZM17.0016 28.7131L19.6186 30.2612L22.2484 28.7131V31.7949L19.6186 33.343L17.0016 31.7949V28.7131ZM26.0016 12.8349L28.6186 11.2869L31.2484 12.8349V15.9167L28.6186 17.4648V14.383L26.0016 12.8349ZM28.6186 24.9599L28.633 19.6715L31.25 18.1234V26.5208L24.1266 30.6987V27.6026L28.6186 24.9599Z"
            fill="white"
          />
          <path
            d="M26.742 23.8638L24.125 25.3974V22.3157L26.742 20.7676V23.8638Z"
            fill="white"
          />
          <path
            d="M26.742 15.4792L26.7564 18.5753L22.25 21.2196V26.5208L19.633 28.0545L17.016 26.5208V21.2196L12.5096 18.5753V15.4792L15.1378 13.9311L19.617 16.5881L24.1234 13.9311L26.7532 15.4792H26.742ZM12.508 10.1923L19.6186 6L26.742 10.1923L24.125 11.7404L19.6186 9.08333L15.125 11.7404L12.508 10.1923Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_3247">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 2,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_777)">
          <g clip-path="url(#clip1_57_777)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#23292F"
            />
            <path
              d="M32.4512 9.5752H28.8379L23.1206 15.231C22.2882 16.0513 21.1665 16.5112 19.9978 16.5112C18.8291 16.5112 17.7074 16.0513 16.875 15.231L11.1621 9.5752H7.54589L15.0684 17.0205C17.7934 19.7153 22.2085 19.7153 24.9316 17.0205L32.4512 9.5752Z"
              fill="#FCFCFD"
            />
            <path
              d="M7.5 30.2783H11.1157L16.8794 24.5767C17.7118 23.7563 18.8335 23.2964 20.0022 23.2964C21.1709 23.2964 22.2926 23.7563 23.125 24.5767L28.8867 30.2783H32.5L24.9316 22.7871C22.2065 20.0923 17.7915 20.0923 15.0684 22.7871L7.5 30.2783Z"
              fill="#FCFCFD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 3,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_3247)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#F0B90B"
          />
          <path
            d="M10.617 19.6715L10.6314 24.9599L15.125 27.6042V30.7003L8.0016 26.5224V18.125L10.617 19.6715ZM10.617 14.383V17.4648L8 15.9167V12.8349L10.617 11.2869L13.2468 12.8349L10.617 14.383ZM17.0016 12.8349L19.6186 11.2869L22.2484 12.8349L19.6186 14.383L17.0016 12.8349Z"
            fill="white"
          />
          <path
            d="M12.508 23.8638V20.7676L15.125 22.3157V25.3974L12.508 23.8638ZM17.0016 28.7131L19.6186 30.2612L22.2484 28.7131V31.7949L19.6186 33.343L17.0016 31.7949V28.7131ZM26.0016 12.8349L28.6186 11.2869L31.2484 12.8349V15.9167L28.6186 17.4648V14.383L26.0016 12.8349ZM28.6186 24.9599L28.633 19.6715L31.25 18.1234V26.5208L24.1266 30.6987V27.6026L28.6186 24.9599Z"
            fill="white"
          />
          <path
            d="M26.742 23.8638L24.125 25.3974V22.3157L26.742 20.7676V23.8638Z"
            fill="white"
          />
          <path
            d="M26.742 15.4792L26.7564 18.5753L22.25 21.2196V26.5208L19.633 28.0545L17.016 26.5208V21.2196L12.5096 18.5753V15.4792L15.1378 13.9311L19.617 16.5881L24.1234 13.9311L26.7532 15.4792H26.742ZM12.508 10.1923L19.6186 6L26.742 10.1923L24.125 11.7404L19.6186 9.08333L15.125 11.7404L12.508 10.1923Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_3247">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 4,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_1004)">
          <g clip-path="url(#clip1_57_1004)">
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
        </g>
        <defs>
          <clipPath id="clip0_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 5,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_777)">
          <g clip-path="url(#clip1_57_777)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#23292F"
            />
            <path
              d="M32.4512 9.5752H28.8379L23.1206 15.231C22.2882 16.0513 21.1665 16.5112 19.9978 16.5112C18.8291 16.5112 17.7074 16.0513 16.875 15.231L11.1621 9.5752H7.54589L15.0684 17.0205C17.7934 19.7153 22.2085 19.7153 24.9316 17.0205L32.4512 9.5752Z"
              fill="#FCFCFD"
            />
            <path
              d="M7.5 30.2783H11.1157L16.8794 24.5767C17.7118 23.7563 18.8335 23.2964 20.0022 23.2964C21.1709 23.2964 22.2926 23.7563 23.125 24.5767L28.8867 30.2783H32.5L24.9316 22.7871C22.2065 20.0923 17.7915 20.0923 15.0684 22.7871L7.5 30.2783Z"
              fill="#FCFCFD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 6,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_3305)">
          <g clip-path="url(#clip1_57_3305)">
            <path
              d="M20.001 0C31.0461 0 40.001 8.95473 40.001 20C40.001 31.0452 31.0457 40 20.001 40C8.95618 40 0.000976562 31.0475 0.000976562 20C0.000976562 8.95247 8.95458 0 20.001 0Z"
              fill="#21A27C"
            />
            <path
              d="M22.4699 17.3351V14.36H29.2735V9.82666H10.747V14.36H17.5512V17.3327C12.0214 17.5869 7.86328 18.6819 7.86328 19.9939C7.86328 21.3059 12.0233 22.401 17.5512 22.6566V32.1865H22.4712V22.656C27.9912 22.4012 32.1409 21.3069 32.1409 19.996C32.1409 18.685 27.9912 17.5909 22.4712 17.336L22.4699 17.3351ZM22.4715 21.8487V21.8464C22.3327 21.8551 21.6195 21.8979 20.0315 21.8979C18.7619 21.8979 17.8686 21.8619 17.5539 21.8455V21.8495C12.6682 21.6332 9.02136 20.7824 9.02136 19.7642C9.02136 18.7464 12.6686 17.8967 17.5539 17.68V21.0019C17.8739 21.024 18.789 21.0779 20.0522 21.0779C21.5695 21.0779 22.3322 21.0146 22.4722 21.0019V17.68C27.3482 17.897 30.9866 18.7487 30.9866 19.7631C30.9866 20.7775 27.3459 21.6292 22.4715 21.8464"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_3305">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_3305">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 7,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_1004)">
          <g clip-path="url(#clip1_57_1004)">
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
        </g>
        <defs>
          <clipPath id="clip0_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 8,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_777)">
          <g clip-path="url(#clip1_57_777)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#23292F"
            />
            <path
              d="M32.4512 9.5752H28.8379L23.1206 15.231C22.2882 16.0513 21.1665 16.5112 19.9978 16.5112C18.8291 16.5112 17.7074 16.0513 16.875 15.231L11.1621 9.5752H7.54589L15.0684 17.0205C17.7934 19.7153 22.2085 19.7153 24.9316 17.0205L32.4512 9.5752Z"
              fill="#FCFCFD"
            />
            <path
              d="M7.5 30.2783H11.1157L16.8794 24.5767C17.7118 23.7563 18.8335 23.2964 20.0022 23.2964C21.1709 23.2964 22.2926 23.7563 23.125 24.5767L28.8867 30.2783H32.5L24.9316 22.7871C22.2065 20.0923 17.7915 20.0923 15.0684 22.7871L7.5 30.2783Z"
              fill="#FCFCFD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 9,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_3247)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#F0B90B"
          />
          <path
            d="M10.617 19.6715L10.6314 24.9599L15.125 27.6042V30.7003L8.0016 26.5224V18.125L10.617 19.6715ZM10.617 14.383V17.4648L8 15.9167V12.8349L10.617 11.2869L13.2468 12.8349L10.617 14.383ZM17.0016 12.8349L19.6186 11.2869L22.2484 12.8349L19.6186 14.383L17.0016 12.8349Z"
            fill="white"
          />
          <path
            d="M12.508 23.8638V20.7676L15.125 22.3157V25.3974L12.508 23.8638ZM17.0016 28.7131L19.6186 30.2612L22.2484 28.7131V31.7949L19.6186 33.343L17.0016 31.7949V28.7131ZM26.0016 12.8349L28.6186 11.2869L31.2484 12.8349V15.9167L28.6186 17.4648V14.383L26.0016 12.8349ZM28.6186 24.9599L28.633 19.6715L31.25 18.1234V26.5208L24.1266 30.6987V27.6026L28.6186 24.9599Z"
            fill="white"
          />
          <path
            d="M26.742 23.8638L24.125 25.3974V22.3157L26.742 20.7676V23.8638Z"
            fill="white"
          />
          <path
            d="M26.742 15.4792L26.7564 18.5753L22.25 21.2196V26.5208L19.633 28.0545L17.016 26.5208V21.2196L12.5096 18.5753V15.4792L15.1378 13.9311L19.617 16.5881L24.1234 13.9311L26.7532 15.4792H26.742ZM12.508 10.1923L19.6186 6L26.742 10.1923L24.125 11.7404L19.6186 9.08333L15.125 11.7404L12.508 10.1923Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_3247">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 10,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_777)">
          <g clip-path="url(#clip1_57_777)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#23292F"
            />
            <path
              d="M32.4512 9.5752H28.8379L23.1206 15.231C22.2882 16.0513 21.1665 16.5112 19.9978 16.5112C18.8291 16.5112 17.7074 16.0513 16.875 15.231L11.1621 9.5752H7.54589L15.0684 17.0205C17.7934 19.7153 22.2085 19.7153 24.9316 17.0205L32.4512 9.5752Z"
              fill="#FCFCFD"
            />
            <path
              d="M7.5 30.2783H11.1157L16.8794 24.5767C17.7118 23.7563 18.8335 23.2964 20.0022 23.2964C21.1709 23.2964 22.2926 23.7563 23.125 24.5767L28.8867 30.2783H32.5L24.9316 22.7871C22.2065 20.0923 17.7915 20.0923 15.0684 22.7871L7.5 30.2783Z"
              fill="#FCFCFD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 11,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_1004)">
          <g clip-path="url(#clip1_57_1004)">
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
        </g>
        <defs>
          <clipPath id="clip0_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_1004">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },

  {
    id: 12,
    symbol: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_57_777)">
          <g clip-path="url(#clip1_57_777)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#23292F"
            />
            <path
              d="M32.4512 9.5752H28.8379L23.1206 15.231C22.2882 16.0513 21.1665 16.5112 19.9978 16.5112C18.8291 16.5112 17.7074 16.0513 16.875 15.231L11.1621 9.5752H7.54589L15.0684 17.0205C17.7934 19.7153 22.2085 19.7153 24.9316 17.0205L32.4512 9.5752Z"
              fill="#FCFCFD"
            />
            <path
              d="M7.5 30.2783H11.1157L16.8794 24.5767C17.7118 23.7563 18.8335 23.2964 20.0022 23.2964C21.1709 23.2964 22.2926 23.7563 23.125 24.5767L28.8867 30.2783H32.5L24.9316 22.7871C22.2065 20.0923 17.7915 20.0923 15.0684 22.7871L7.5 30.2783Z"
              fill="#FCFCFD"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
          <clipPath id="clip1_57_777">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "ETH",
    subtitle: "Ethereum",
    apy: "3.41",
    staked: "0.0000 BNB",
    reward: "0.00 BNB",
  },
];
const GridStructure = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="grid  w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-12  p-4  gap-4 lg:gap-6 mt-8  ">
      {/* chart div */}
      <div className="col-span-1 md:col-span-2 lg:col-span-9 bg-white p-4 xl:p-6 rounded-3xl   ">
        <Chart />
      </div>

      {/* right side two cards */}
      {/* <div className="col-span-1   lg:col-span-3 lg:col-start-10    flex flex-col gap-6">
        <div className="flex gap-2 lg:flex lg:flex-col overflow-scroll lg:overflow-hidden">
          <div className="bg-white p-6 rounded-3xl min-w-[250px] max-h-[220px] lg:min-h-[316px]   xl:h-full ">
            <TotalReward />
          </div>
          <div className="  rounded-3xl min-w-[250px] max-h-[220px] lg:min-h-[316px] xl:h-full bg-white text-white">
            <OceanMoneyCard />
          </div>
        </div>
      </div> */}

      <div className=" col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-10 flex flex-col">
        <div className="flex gap-4 overflow-x-auto lg:overflow-visible lg:flex-col scrollbar-hide">
          <div
            className="bg-white rounded-3xl p-6 
      w-[280px] h-[220px]
      sm:w-[300px] sm:h-[240px]
      md:w-1/2
      lg:w-full lg:h-[316px]
      xl:h-[360px]
      flex-shrink-0
    "
          >
            <TotalReward />
          </div>

          <div
            className="bg-white rounded-3xl 
      w-[280px] h-[220px]
      sm:w-[300px] sm:h-[240px]
      md:w-1/2
      lg:w-full lg:h-[316px]
      xl:h-[360px]
      flex-shrink-0
    "
          >
            <OceanMoneyCard />
          </div>
        </div>
      </div>

      {/* middle : searchbar */}
      <div className=" col-span-1 md:col-span-2 lg:col-span-12 ">
        <MiddleSections />
      </div>

      {/* <!-- BOTTOM SECTION (Assets) --> */}
      <div className="grid   grid-cols-1 lg:col-span-12 md:grid-cols-2 lg:grid-cols-4  mx-auto w-full max-w-[1320px] flex-wrap items-start content-start gap-2">
        {/* <!-- Map through your 12 asset cards here --> */}
        {/* <div className="bg-white p-4 rounded-2xl shadow-sm"></div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Asset Card</div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Asset Card</div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Asset Card</div> */}

        {/* <!-- ... --> */}
        {assets.length > 0 &&
          !isEmpty &&
          assets.map((asset) => <Below12Card key={asset.id} {...asset} />)}
      </div>

      <div className="grid col-span-1 md:col-span-2 lg:col-span-12">{isEmpty && <EmptyCard />}</div>
    </div>
  );
};

export default GridStructure;
