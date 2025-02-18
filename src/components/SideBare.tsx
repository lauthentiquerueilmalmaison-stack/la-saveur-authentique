"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useAppStore } from "@/store/appStore";

const links = [
  { id: "#accueil", title: "accueil" },
  { id: "#menu", title: "menu" },
  { id: "#avis", title: "avis" },
  { id: "#nous-suivre", title: "nous suivre" },
  { id: "#contact", title: "contact" },
  { id: "#privatisation", title: "privatisation" },
];

const SideBare = () => {
  const toggleMenu = useAppStore((state) => state.toggleMenu);
  const isOpen = useAppStore((state) => state.isOpen);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { activeTab } = useAppStore(); // Récupérer l'onglet actif du store

  // Animation d'ouverture et de fermeture
  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      if (isOpen) {
        gsap.fromTo(
          sidebar,
          { x: "100%" },
          {
            x: "0%",
            duration: 0.5,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(sidebar, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className="fixed inset-y-0 right-0 w-full max-w-sm bg-black  text-white p-6 overflow-y-auto z-50"
      style={{ transform: "translateX(100%)" }}
    >
      {/* Bouton de fermeture */}
      <div className="flex justify-end">
        <XMarkIcon
          className="text-white size-7 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Liens de navigation */}
      <nav className="mt-8">
        <ul className="space-y-4">
          {links.map(({ id, title }) => {
            const isActive = activeTab === id;
            return (
              <li
                key={id}
                onClick={toggleMenu}
                className={isActive ? "text-[#E4C590] underline" : ""}
              >
                <Link
                  href={id}
                  className="font-forum text-2xl uppercase hover:text-[#E4C590] transition-colors"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Informations du restaurant */}
      <div className="mt-12 ">
        <h3 className="font-arizona text-xl mb-4">Informations</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 font-forum text-gray-300">
            <MapPinIcon className="w-5 h-5" />
            <span>41 Bd National, 92500 Rueil-Malmaison</span>
          </li>
          <li className="flex items-center space-x-2 font-forum text-gray-300">
            <PhoneIcon className="w-5 h-5" />
            <span>0956739572</span>
          </li>
          <li className="flex items-center space-x-2 font-forum text-gray-300">
            <EnvelopeIcon className="w-5 h-5" />
            <span>lauthentiquegestion@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2 font-forum text-gray-300">
            <ClockIcon className="w-5 h-5" />
            <span>Lun - Dim : 12h - 22h</span>
          </li>
        </ul>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-8">
        <h3 className="font-arizona text-xl mb-4">Suivez-nous</h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E4C590] transition-colors"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E4C590] transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E4C590] transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E4C590] transition-colors"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBare;
