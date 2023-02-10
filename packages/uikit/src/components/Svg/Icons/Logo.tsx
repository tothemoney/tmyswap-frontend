import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.8755 13.7952L26.1585 6.69422H29.1511V29.016H26.1585V10.1942L14.8755 17.2951L3.678 10.1942V29.016H0.599998V6.69422H3.60633L14.8755 13.7952Z" fill="url(#paint0_linear_101_16)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0238 20.7552L24.4593 14.7604L24.4791 18.3135L16.4337 23.4226V29.016H13.628V23.4325L5.53156 18.2902L5.55425 14.7404L15.0238 20.7552Z" fill="url(#paint1_linear_101_16)"/>
        <path d="M13.144 4.4447L0.599998 4.40218V0.984001H29.1511V4.40218H16.6498V10.384L14.927 11.3662L13.144 10.4265V4.4447Z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_101_16" x1="14.8755" y1="13.0405" x2="14.8755" y2="29.016" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="0.9999" stopColor="#D0C8DB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_101_16" x1="15.0053" y1="14.9909" x2="15.0053" y2="29.016" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#BAB4FF"/>
          </linearGradient>
        </defs>
    </Svg>
  );
};

export default Icon;
