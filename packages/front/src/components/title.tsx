import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => (
  <h1 children={children} className="text-white font-extrabold text-4xl" />
);

export default Title;
