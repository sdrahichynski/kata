import * as React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="lg:container mx-auto p-4">FOOTER</div>
    </footer>
  );
};

export default Footer;
