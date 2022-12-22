import { TwitterIcon } from "@/components";

export const Footer = () => {
  return (
    <footer className="bg-blue-0 flex flex-col justify-center items-center text-white m-auto py-8 space-y-4">
      <a target="_blank" href="https://hackachain.io/">
        <img src="/images/hackachain-logo.png" className="h-[42px]" />
      </a>

      <a target="_blank" href="https://twitter.com/Peter_the_Bot">
        <TwitterIcon className="h-[18px]" />
      </a>
    </footer>
  );
};

export default Footer;
