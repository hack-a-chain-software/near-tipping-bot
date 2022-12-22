import { twMerge } from "tailwind-merge";
import { propsWithChildren } from "react";

export const Button = ({
  children,
  onClick,
  className = "",
}: propsWithChildren & { onClick: () => any; className?: string }) => (
  <button
    children={children}
    onClick={() => onClick()}
    className={twMerge(
      "bg-bn-gradient py-4 px-6 rounded-full text-xl text-white font-medium space-x-2.5 flex items-center hover:opacity-[0.8]",
      className
    )}
  />
);

export default Button;
