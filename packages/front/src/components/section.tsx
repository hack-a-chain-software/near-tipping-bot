import { twMerge } from "tailwind-merge";
import { propsWithChildren } from "react";

export const Section = ({
  id,
  children,
  className = "",
}: propsWithChildren & { id: string; className?: string }) => (
  <section
    id={id}
    children={children}
    className={twMerge("mx-auto  px-8 py-4 w-screen max-w-[1344px]", className)}
  />
);

export default Section;
