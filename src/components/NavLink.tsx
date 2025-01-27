"use client";
import { useToggleMenuStore } from "@/store";
import { useLenis } from "lenis/react";
import Link from "next/link";

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
      <Link href={id}>{title}</Link>
    </li>
  );
};

export default NavLink;
