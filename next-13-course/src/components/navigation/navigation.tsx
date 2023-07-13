"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

interface NavigationProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const pathName = usePathname();

  return (
    <>
      {items.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathName === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
