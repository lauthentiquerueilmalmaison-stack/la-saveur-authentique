"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo-2.svg";
import spoon from "../../public/spoon.svg";
import fork from "../../public/fork.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Conteneur principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Section 1 : Logo et description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#accueil">
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
            <p className="font-forum text-sm text-gray-300 mt-4 text-center md:text-left">
              Découvrez la saveur authentique de nos plats faits maison avec des
              produits frais.
            </p>
          </div>

          {/* Section 2 : Liens rapides */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-arizona text-xl mb-4">Liens rapides</h3>
            <ul className="space-x-2 flex items-center md:space-x-0 md:space-y-2 md:flex-col md:items-start">
              <li>
                <Link
                  href="#accueil"
                  className="font-forum text-gray-300 hover:text-[#E4C590] transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="font-forum text-gray-300 hover:text-[#E4C590] transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-forum text-gray-300 hover:text-[#E4C590] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#privatisation"
                  className="font-forum text-gray-300 hover:text-[#E4C590] transition-colors"
                >
                  Privatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 : Informations de contact */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h3 className="font-arizona text-xl mb-4">Nous contacter</h3>
            <ul className="space-y-2">
              <li className="font-forum text-gray-300">
                41 Bd National, 92500 Rueil-Malmaison
              </li>
              <li className="font-forum text-gray-300">+33 1 23 45 67 89</li>
              <li className="font-forum text-gray-300">
                contact@restaurant.com
              </li>
              <li className="font-forum text-gray-300">
                Lun - Dim : 12h - 22h
              </li>
            </ul>
          </div>

          {/* Section 4 : Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-arizona text-xl mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E4C590] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E4C590] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E4C590] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E4C590] transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-forum text-sm text-gray-300">
            &copy; {new Date().getFullYear()} La Saveur Authentique. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
