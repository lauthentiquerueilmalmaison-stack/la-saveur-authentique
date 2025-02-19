"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { ALL_INFORMATIONS_QUERYResult } from "../../sanity.types";
import Logo from "./Logo";
import { organiserHoraires } from "../utils/horairesUtils";

interface FooterProps {
  informations: ALL_INFORMATIONS_QUERYResult;
}

const navItems: { label: string; href: string }[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
  { label: "Privatisation", href: "#privatisation" },
];

const Footer = ({ informations }: FooterProps) => {
  const { adresse, telephone, email, horaires, facebook, instagram } =
    informations[0];

  const horairesTexte = organiserHoraires(horaires);

  return (
    <footer className="text-white py-8 ">
      <div className="w-full px-[5vw] 3xl:px-[10vw] mx-auto">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12  border-t border-[#E4C590] ">
          {/* Section 1 : Logo et description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#accueil">
              <Logo />
            </Link>
            <p className="font-forum text-sm text-white mt-4 text-center w-[70%] lg:w-52">
              Découvrez la saveur authentique de nos plats faits maison avec des
              produits frais.
            </p>
          </div>

          {/* Section 2 : Liens rapides */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-arizona text-xl mb-4">Liens rapides</h3>
            <ul className="flex items-center space-x-2 md:space-x-0 md:space-y-2 md:flex-col md:items-start">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-forum text-white hover:text-[#E4C590] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 : Informations de contact */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h3 className="font-arizona text-xl mb-4">Nous contacter</h3>
            <ul className="space-y-2">
              <li className="font-forum text-white">{adresse}</li>
              <li className="font-forum text-white">{telephone}</li>
              <li className="font-forum text-white">{email}</li>
              {horairesTexte.map((horaire, index) => (
                <li className="font-forum text-white" key={index}>
                  {horaire}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 : Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-arizona text-xl mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4C590] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4C590] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E4C590] mt-8 pt-8 text-center">
          <p className="font-forum text-sm text-white">
            &copy; {new Date().getFullYear()} L' Authentique. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
