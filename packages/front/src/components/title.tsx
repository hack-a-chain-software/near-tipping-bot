import { propsWithChildren } from "react";

export const Title = ({ children }: propsWithChildren) => (
  <h1 children={children} className="text-white font-extrabold text-4xl" />
);

export default Title;
