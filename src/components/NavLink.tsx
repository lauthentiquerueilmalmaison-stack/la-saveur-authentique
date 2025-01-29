"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface NavLinkProps {
  title: string;
  id: string;
  isActive: boolean;
}
const NavLink = ({ title, id, isActive }: NavLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (isActive && linkRef.current) {
      gsap.to(linkRef.current, { color: "#E4C590", duration: 0.5 }); // Couleur rouge pour l'onglet actif
    } else if (linkRef.current) {
      gsap.to(linkRef.current, { color: "#ffffff", duration: 0.5 }); // Couleur blanche pour les autres onglets
    }
  }, [isActive]);
  return (
    <li className="hover:text-[#E4C590] transition-all duration-75 cursor-pointer">
      <Link href={id} ref={linkRef}>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
