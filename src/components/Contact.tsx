"use client";

import dynamic from "next/dynamic";
import Section from "./Section";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"; // Importation des icônes

// Importation dynamique du composant de carte avec désactivation du SSR
const Map = dynamic(() => import("./Map"), {
  ssr: false, // Désactive le rendu côté serveur pour ce composant
});

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte Leaflet */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Map />
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Adresse */}
            <div className="space-y-2 text-[18px] md:text-[25px]">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className=" text-[#E4C590]" /> {/* Icône */}
                <h3 className="font-arizonia  text-[#E4C590]">Adresse</h3>
              </div>
              <p className="font-forum text-lg text-white pl-10">
                41 Boulevard National, 92500 Rueil-Malmaison
              </p>
            </div>

            {/* Téléphone */}
            <div className="space-y-2 text-[18px] md:text-[25px]">
              <div className="flex items-center space-x-4">
                <FaPhone className=" text-[#E4C590]" /> {/* Icône */}
                <h3 className="font-arizonia  text-[#E4C590]">Téléphone</h3>
              </div>
              <p className="font-forum text-lg text-white pl-10">0956739572</p>
            </div>

            {/* Email */}
            <div className="space-y-2 text-[18px] md:text-[25px]">
              <div className="flex items-center space-x-4">
                <FaEnvelope className=" text-[#E4C590]" /> {/* Icône */}
                <h3 className="font-arizonia  text-[#E4C590]">Email</h3>
              </div>
              <p className="font-forum text-lg text-white pl-10">
                lauthentiquegestion@gmail.com
              </p>
            </div>

            {/* Horaires */}
            <div className="space-y-2 text-[18px] md:text-[25px]">
              <div className="flex items-center space-x-4">
                <FaClock className=" text-[#E4C590]" /> {/* Icône */}
                <h3 className="font-arizonia  text-[#E4C590]">Horaires</h3>
              </div>
              <p className="font-forum text-lg text-white pl-10">
                Lun - Dim : 12h - 22h
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
