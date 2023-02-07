import { AtomBox, AtomBoxProps } from "@tmyswap/ui/components/AtomBox";
import { PropsWithChildren } from "react";
import { SeverityVariants, severityVariants } from "./SeverityErrorText.css";

export const SeverityErrorText = ({ severity, ...props }: PropsWithChildren<AtomBoxProps & SeverityVariants>) => (
  <AtomBox className={severityVariants({ severity })} {...props} />
);
