import * as React from "react";
import Navigation from "@/components/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Navigation
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: "/about", label: "About" },
        ]}
      />
    </header>
  );
};

export default Header;
