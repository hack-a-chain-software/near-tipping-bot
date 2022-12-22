import { PropsWithChildren } from "react";

export const HighlightText = ({ children }: PropsWithChildren) => (
  <span children={children} className="text-purple-0" />
);

export default HighlightText;
