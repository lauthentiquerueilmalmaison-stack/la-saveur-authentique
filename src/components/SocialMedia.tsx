import React from "react";
import Section from "./Section";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

interface SectionReseauxSociauxProps {
  title: string;
  id: string;
}

const SocialMedia = () => {
  // Liens vers les réseaux sociaux (à remplacer par vos liens réels)
  const reseauxSociaux = [
    {
      id: 1,
      nom: "Facebook",
      icone: <FaFacebook className="w-12 h-12" />,
      lien: "https://facebook.com",
      couleur: "#1877F2", // Couleur officielle de Facebook
    },
    {
      id: 2,
      nom: "Instagram",
      icone: <FaInstagram className="w-12 h-12" />,
      lien: "https://instagram.com",
      couleur: "#E4405F", // Couleur officielle d'Instagram
    },
    {
      id: 3,
      nom: "Twitter",
      icone: <FaTwitter className="w-12 h-12" />,
      lien: "https://twitter.com",
      couleur: "#1DA1F2", // Couleur officielle de Twitter
    },
    {
      id: 4,
      nom: "YouTube",
      icone: <FaYoutube className="w-12 h-12" />,
      lien: "https://youtube.com",
      couleur: "#FF0000", // Couleur officielle de YouTube
    },
  ];
  return (
    <Section id="nous-suivre" title="Nous suivre">
      {/* Contenu de la section */}
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-h-full">
        <div className="flex flex-wrap justify-center gap-8">
          {reseauxSociaux.map((reseau) => (
            <a
              key={reseau.id}
              href={reseau.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              style={{ backgroundColor: `${reseau.couleur}20` }} // Ajoute une opacité à la couleur
            >
              {/* Icône du réseau social */}
              <div className="text-4xl" style={{ color: reseau.couleur }}>
                {reseau.icone}
              </div>
              {/* Nom du réseau social */}
              <p className="mt-4 text-lg font-semibold text-white">
                {reseau.nom}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SocialMedia;
