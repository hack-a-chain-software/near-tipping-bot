import { PropsWithChildren } from "react";
import { HashLink } from "react-router-hash-link";

export const LinkButton = ({
  to,
  children,
}: PropsWithChildren & { to: string }) => (
  <HashLink
    to={to}
    children={children}
    className="hover:opacity-[0.8]"
    scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
  />
);

export default LinkButton;
