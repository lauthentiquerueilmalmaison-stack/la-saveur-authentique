import React from "react";

interface ButtonProps {
  children: string;
  bg?: Boolean;
}
const Button = ({ children, bg = false }: ButtonProps) => {
  return (
    <button
      className={`uppercase font-forum font-semibold ${
        bg ? "bg-[#E4C590] text-black" : ""
      } text-[#E4C590] border-[1px] px-[10px] py-[5px] border-[#E4C590] hover:bg-[#E4C590] hover:text-black transition-all duration-100 `}
    >
      {children}
    </button>
  );
};

export default Button;
