import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Text = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => (
  <p
    children={children}
    className={twMerge("font-medium text-xl text-white", className)}
  />
);

export default Text;
