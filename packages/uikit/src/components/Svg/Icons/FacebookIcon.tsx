import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="1 1 18 18" {...props}>
        <path d="M9.5 1.14C4.883 1.14 1.14 4.883 1.14 9.5C1.14 13.6914 4.2275 17.1521 8.25056 17.7566V11.7158H6.18222V9.51824H8.25056V8.056C8.25056 5.63502 9.43008 4.57216 11.4422 4.57216C12.4059 4.57216 12.9154 4.6436 13.1567 4.67628V6.59452H11.7842C10.9299 6.59452 10.6316 7.4043 10.6316 8.31706V9.51824H13.1351L12.7954 11.7158H10.6316V17.7745C14.7121 17.2208 17.86 13.7321 17.86 9.5C17.86 4.883 14.117 1.14 9.5 1.14Z" />
    </Svg>
  );
};

export default Icon;
