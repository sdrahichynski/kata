import Image from "next/image";
import * as React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Image
      alt="logo"
      width="100"
      height="30"
      className="hidden md:block cursor-pointer h-auto"
      src="/images/logo.png "
    />
  );
};

export default Logo;
