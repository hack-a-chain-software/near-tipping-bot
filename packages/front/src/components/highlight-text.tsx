import { propsWithChildren } from "react";

export const HighlightText = ({ children }: propsWithChildren) => (
  <span children={children} className="text-purple-0" />
);

export default HighlightText;
