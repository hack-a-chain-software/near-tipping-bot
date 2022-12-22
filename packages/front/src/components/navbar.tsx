import { HighlightText, LinkButton } from "@/components";

const navbarItems = [
  {
    label: "How to use",
    href: "#how-to-use",
  },
  {
    label: "Token List",
    href: "#available-tokens",
  },
  {
    label: "Token Request",
    href: "#register-token",
  },
];

export const NavBar = () => {
  return (
    <nav className="bg-blue-0">
      <div
        className="
          mx-auto
          px-8 py-4
          w-screen
          max-w-[1344px]
          flex justify-between
        "
      >
        <div className="flex items-center">
          <img src="/assets/logo.svg" alt="Peter Tipping bot logo" />
        </div>

        <div className="flex items-center space-x-10">
          {navbarItems.map(({ href, label }) => (
            <LinkButton to={href} key={`navbar-item-${label}`}>
              <span
                children={label}
                className="text-white font-extrabold text-base"
              />
            </LinkButton>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
