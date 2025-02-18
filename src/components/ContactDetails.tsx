import React from "react";
import { ALL_INFORMATIONS_QUERYResult } from "../../sanity.types";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

interface ContactDetailsProps {
  informations: ALL_INFORMATIONS_QUERYResult;
}

const ContactDetails = ({ informations }: ContactDetailsProps) => {
  const { adresse, telephone, email, horaires } = informations[0];
  if (!horaires) return null;

  const horairesMap = new Map(); // ✅ Pas de conflit avec MapComponent
  const joursFermes: string[] = [];

  horaires.forEach(({ jour, plagesHoraires }) => {
    if (!plagesHoraires || plagesHoraires.length === 0) {
      joursFermes.push(jour!);
    } else {
      const plagesString = plagesHoraires
        .map(({ ouverture, fermeture }) => `${ouverture} - ${fermeture}`)
        .join(" | ");

      if (horairesMap.has(plagesString)) {
        horairesMap.get(plagesString).push(jour);
      } else {
        horairesMap.set(plagesString, [jour]);
      }
    }
  });
  return (
    <div className="flex flex-col justify-center space-y-6">
      {/* Adresse */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590]">Adresse</h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{adresse}</p>
      </div>

      {/* Téléphone */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590]">Téléphone</h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{telephone}</p>
      </div>

      {/* Email */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590]">Email</h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{email}</p>
      </div>

      {/* Horaires */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaClock className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590]">Horaires</h3>
        </div>
        <ul className="font-forum text-lg text-white pl-10">
          {[...horairesMap.entries()].map(([plages, jours], index) => (
            <li key={index}>
              <strong>{jours.join(" - ")}</strong> : {plages}
            </li>
          ))}
          {joursFermes.length > 0 && (
            <li>
              <strong>{joursFermes.join(", ")}</strong> : Fermé
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
