import { PropsWithChildren } from "react";

export const Divider = ({ children }: PropsWithChildren) => (
  <div children={children} className="bg-grey-100/[0.2]" />
);

export default Divider;
