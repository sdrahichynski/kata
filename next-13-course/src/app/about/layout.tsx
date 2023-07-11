import Link from "next/link";
import * as React from "react";

const AboutLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>About us</h1>

      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default AboutLayout;
