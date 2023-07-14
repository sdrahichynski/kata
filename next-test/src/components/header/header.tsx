import * as React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="lg:container mx-auto p-4">HEADER</div>
    </header>
  );
};

export default Header;
