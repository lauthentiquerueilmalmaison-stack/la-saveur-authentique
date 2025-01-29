"use client";
import { useToggleMenuStore, useStore } from "@/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const links = [
  { id: "#accueil", title: "accueil" },
  { id: "#menu", title: "menu" },
  { id: "#avis", title: "avis" },
  { id: "#nous-suivre", title: "nous suivre" },
  { id: "#contact", title: "contact" },
  { id: "#privatisation", title: "privatisation" },
];

const SideBare = () => {
  const toggleMenu = useToggleMenuStore((state) => state.toggleMenu);
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  const { activeTab } = useStore(); // Récupérer l'onglet actif du store
  const sidebarRef = useRef<HTMLDivElement>(null); // Référence pour le conteneur du menu
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]); // Références pour les liens

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      if (isOpen) {
        // Animation d'ouverture
        gsap.fromTo(
          sidebar,
          { x: "100%" }, // Départ : hors de l'écran à droite
          {
            x: "0%", // Arrivée : position normale
            duration: 0.5,
            ease: "power3.out",
          }
        );
      } else {
        // Animation de fermeture
        gsap.to(sidebar, {
          x: "100%", // Déplacement hors de l'écran à droite
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }
  }, [isOpen]);

  // Animation de la couleur des liens en fonction de l'onglet actif
  useEffect(() => {
    links.forEach((link, index) => {
      const element = linkRefs.current[index];
      if (element) {
        if (link.id === activeTab) {
          gsap.to(element, { color: "#E4C590", duration: 0.5 }); // Couleur pour l'onglet actif
        } else {
          gsap.to(element, { color: "#ffffff", duration: 0.5 }); // Couleur pour les autres onglets
        }
      }
    });
  }, [activeTab]);

  return (
    <div
      ref={sidebarRef}
      className="overflow-hidden h-screen w-screen absolute top-0 p-5 bg-black z-50"
      style={{ transform: "translateX(100%)" }} // Position initiale hors de l'écran
    >
      <div className="flex justify-end">
        <XMarkIcon
          className="text-white size-7 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <nav className="w-full">
        <ul className="flex flex-col items-start text-[30px] font-forum text-white uppercase font-semibold tracking-wider">
          {links.map(({ id, title }, index) => (
            <li key={id} onClick={toggleMenu}>
              <Link
                href={id}
                ref={(el) => {
                  // Assign the ref without returning a value
                  linkRefs.current[index] = el;
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBare;
