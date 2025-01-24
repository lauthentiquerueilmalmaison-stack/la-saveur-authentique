"use client";
import { useLenis } from "lenis/react";
import React from "react";

interface ButtonProps {
  children: string;
  href?: string;
  bg?: Boolean;
}
const Button = ({ children, bg = false, href }: ButtonProps) => {
  const lenis = useLenis();
  return (
    <button
      onClick={() => {
        lenis?.scrollTo(href!);
      }}
      className={`uppercase font-forum font-semibold ${
        bg ? "bg-[#E4C590] text-black" : ""
      } text-[#E4C590] border-[1px] px-[10px] py-[5px] min-w-48 border-[#E4C590] hover:bg-[#E4C590] hover:text-black transition-all duration-100 `}
    >
      {children}
    </button>
  );
};

export default Button;
