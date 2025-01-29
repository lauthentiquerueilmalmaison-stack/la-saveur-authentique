"use client";

import Image from "next/image";
import logo from "../../public/logo-2.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "./Button";
import spoon from "../../public/spoon.svg";
import fork from "../../public/fork.svg";
import NavLink from "./NavLink";
import { useStore, useToggleMenuStore } from "@/store";
import SideBare from "./SideBare";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const links = [
  { id: "#accueil", title: "accueil" },
  { id: "#menu", title: "menu" },
  { id: "#avis", title: "avis" },
  { id: "#nous-suivre", title: "nous suivre" },
  { id: "#contact", title: "contact" },
  { id: "#privatisation", title: "privatisation" },
];

const Header = () => {
  const phoneNumber = "+33956739572";
  const toggleMenu = useToggleMenuStore((state) => state.toggleMenu);
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  const headerRef = useRef<HTMLElement>(null); // Typage de la référence
  const { isScrolled, setIsScrolled, activeTab, setActiveTab } = useStore();

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Si l'utilisateur a défilé de plus de 50 pixels
      if (scrollY > 50 && !isScrolled) {
        setIsScrolled(true); // Mettre à jour l'état à true
        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          duration: 0.5,
        });
      }
      // Si l'utilisateur est revenu en haut de la page
      else if (scrollY <= 50 && isScrolled) {
        setIsScrolled(false); // Mettre à jour l'état à false
        gsap.to(header, { backgroundColor: "transparent", duration: 0.5 });
      }

      // Détecter la section visible
      const sections = links.map((link) => link.id);
      let currentActiveTab = "#accueil"; // Onglet actif par défaut

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActiveTab = section;
          }
        }
      });

      setActiveTab(currentActiveTab); // Mettre à jour l'onglet actif
    };

    // Ajouter un écouteur d'événement pour le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, setIsScrolled, setActiveTab]);

  return (
    <header className="h-[10vh] w-full fixed top-0 z-40 py-3" ref={headerRef}>
      <div className=" flex items-center  h-full px-5  justify-between lg:grid lg:grid-cols-12">
        <div className="lg:col-span-3 ">
          <Link href="/">
            <div className="flex space-x-2 items-center cursor-pointer w-fit">
              <div className="w-40 md:w-48">
                <Image src={logo} priority alt="la saveur authentique" />
              </div>
              <div className="flex items-center space-x-1">
                <Image src={spoon} alt="spoon" width={8} height={10} />
                <Image src={fork} alt="fork" width={8} height={10} />
              </div>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:col-span-6 lg:block 2xl:col-span-5 2xl:col-start-5">
          <ul className="flex items-center justify-around font-forum text-white uppercase font-semibold tracking-wider">
            {links.map(({ id, title }) => {
              return (
                <NavLink
                  key={id}
                  id={id}
                  title={title}
                  isActive={activeTab === id}
                />
              );
            })}
          </ul>
        </nav>
        <div className="hidden lg:flex lg:justify-end lg:col-span-3 ">
          <a href={`tel:${phoneNumber}`}>
            <Button>appellez pour réserver</Button>
          </a>
        </div>
        <div className="lg:hidden">
          <Bars3Icon
            className="text-white  size-7 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isOpen && <SideBare />}
    </header>
  );
};

export default Header;
