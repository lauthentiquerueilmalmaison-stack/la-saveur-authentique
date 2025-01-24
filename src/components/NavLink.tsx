"use client";
import { useLenis } from "lenis/react";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  title: string;
  id: string;
  className?: string;
  activeClassName?: string;
}
const NavLink = ({ title, id }: NavLinkProps) => {
  const lenis = useLenis();
  return (
    <li className="hover:text-[#E4C590] transition-all duration-75 cursor-pointer">
      {title === "privatisation" ? (
        <Link href={title} />
      ) : (
        <span
          onClick={() => {
            lenis?.scrollTo(id);
          }}
        >
          {title}
        </span>
      )}
    </li>
  );
};

export default NavLink;
