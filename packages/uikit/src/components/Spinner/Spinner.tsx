import React from "react";
import { Image, Box } from "@tmyswap/uikit";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        src="https://tmyswap.org/images/pancake-3d-spinner-v2.gif"
        alt="pancake-3d-spinner"
      />
    </Box>
  );
};

export default Spinner;
