import React from "react";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="15 0 120 100" fill="none" width="26">
      <g clip-path="url(#clip0)">        
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M92.7 79.5455C67.1 50.2455 58.3 23.1455 56 14.7455C73.1 12.6455 94.7 14.4455 117.6 27.1455C117.6 27.1455 111.7 53.1455 92.7 79.5455ZM74 27.2455C75 31.2455 79.2 44.0455 91.3 57.9455C99.0882 47.1285 102.234 36.3865 103.004 33.7547C103.124 33.3452 103.187 33.132 103.2 33.1455C92.3 27.0455 82.1 26.2455 74 27.2455ZM57.2 55.1455L67.2 49.2455C72.6 58.8455 80.3 70.3455 90.7 82.2455C88.7 84.9455 86.6 87.5455 84.3 90.1455C76 82.5455 66.2 70.4455 62.3 65.1455L54 71.3455C54.056 71.419 54.1234 71.5077 54.2019 71.6109C56.363 74.4551 66.8746 88.2886 77.2 97.7455C74.6 100.345 71.8 102.845 68.8 105.345C68.8 105.345 34.4 81.6455 19 26.8455C19 26.8455 32.2 18.4455 52.8 15.2455C53.8 19.1455 56.2 27.1455 61.2 37.7455C61.4546 38.2547 61.7131 38.7755 61.9769 39.307C63.0599 41.4892 64.233 43.8527 65.6 46.3455L55.5 52.3455L57.2 55.1455ZM34.5 33.1455C35 34.3455 39.3 44.6455 41.7 48.4455L50.5 42.8455C49.1 40.6455 45.8 33.2455 44.1 29.1455L34.5 33.1455Z"
          fill="url(#paint0_linear)"
        />
        
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="19" y1="48.4302" x2="117.6" y2="48.4834" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1BD4F7" />
          <stop offset="1" stop-color="#83E335" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="143.2"
          y1="29.7855"
          x2="351.596"
          y2="30.829"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#83E335" />
          <stop offset="1" stop-color="#1BD4F7" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="369.5" height="120.4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
