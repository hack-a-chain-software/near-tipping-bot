import { twMerge } from "tailwind-merge";
import { propsWithChildren } from "react";

export const Text = ({
  className,
  children,
}: propsWithChildren & { className?: string }) => (
  <p
    children={children}
    className={twMerge("font-medium text-xl text-white", className)}
  />
);

export default Text;
