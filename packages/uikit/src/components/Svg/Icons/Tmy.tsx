import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="24" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M23.8755 22.7952L35.1585 15.6942H38.1511V38.016H35.1585V19.1942L23.8755 26.2951L12.678 19.1942V38.016H9.6V15.6942H12.6063L23.8755 22.7952Z"
            fill="url(#paint0_linear_103_2)" />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M24.0238 29.7552L33.4593 23.7604L33.4791 27.3135L25.4337 32.4226V38.016H22.628V32.4325L14.5316 27.2902L14.5542 23.7404L24.0238 29.7552Z"
            fill="url(#paint1_linear_103_2)" />
      <path d="M22.144 13.4447L9.6 13.4022V9.984H38.1511V13.4022H25.6498V19.384L23.927 20.3662L22.144 19.4265V13.4447Z"
            fill="white" />
      <defs>
        <linearGradient id="paint0_linear_103_2" x1="23.8755" y1="22.0405" x2="23.8755" y2="38.016"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="0.9999" stopColor="#D0C8DB" />
        </linearGradient>
        <linearGradient id="paint1_linear_103_2" x1="24.0053" y1="23.9909" x2="24.0053" y2="38.016"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#BAB4FF" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
