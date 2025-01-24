"use client";
import Image from "next/image";
import logo from "../../public/logo-2.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { useLenis } from "lenis/react";
import spoon from "../../public/spoon.svg";
import fork from "../../public/fork.svg";
import NavLink from "./NavLink";

const links = [
  { id: "#accueil", title: "accueil" },
  { id: "#menu", title: "menu" },
  { id: "#avis", title: "avis" },
  { id: "#nous-suivre", title: "nous suivre" },
  { id: "#contact", title: "contact" },
  { id: "privatisation", title: "privatisation" },
];

const Header = () => {
  const phoneNumber = "+330764235804";
  const lenis = useLenis();

  return (
    <header className="h-[8vh]  flex items-center px-5 py-2 justify-between w-full fixed top-0 z-50 lg:grid lg:grid-cols-12 ">
      <div className="lg:col-span-3 ">
        <div
          className="flex space-x-2 items-center cursor-pointer w-fit"
          onClick={() => {
            lenis?.scrollTo("#accueil");
          }}
        >
          <div className="w-40 md:w-48">
            <Image src={logo} priority alt="la saveur authentique" />
          </div>
          <div className="flex items-center space-x-1">
            <Image src={spoon} alt="spoon" width={10} height={10} />
            <Image src={fork} alt="fork" width={10} height={10} />
          </div>
        </div>
      </div>
      <nav className="hidden lg:col-span-6 lg:block 2xl:col-span-5 2xl:col-start-5">
        <ul className="flex items-center justify-around font-forum text-white uppercase font-semibold tracking-wider">
          {links.map(({ id, title }) => {
            return <NavLink key={id} id={id} title={title} />;
          })}
        </ul>
      </nav>
      <div className="hidden lg:flex lg:justify-end lg:col-span-3 ">
        <a href={`tel:${phoneNumber}`}>
          <Button>appellez pour réserver</Button>
        </a>
      </div>
      <div className="lg:hidden">
        <Bars3Icon className="text-white  size-7 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
