import { ALL_INFORMATIONS_QUERYResult } from "../../sanity.types";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { organiserHoraires } from "../utils/horairesUtils";

interface ContactDetailsProps {
  informations: ALL_INFORMATIONS_QUERYResult;
}

const ContactDetails = ({ informations }: ContactDetailsProps) => {
  const { adresse, telephone, email, horaires } = informations[0];

  const horairesTexte = organiserHoraires(horaires);

  return (
    <div className="flex flex-col justify-center space-y-6">
      {/* Adresse */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590] text-[20px] md:text-[25px] tracking-wider">
            Adresse
          </h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{adresse}</p>
      </div>

      {/* Téléphone */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaPhone className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590] text-[20px] md:text-[25px] tracking-wider">
            Téléphone
          </h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{telephone}</p>
      </div>

      {/* Email */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590] text-[20px] md:text-[25px] tracking-wider">
            Email
          </h3>
        </div>
        <p className="font-forum text-lg text-white pl-10">{email}</p>
      </div>

      {/* Horaires */}
      <div className="space-y-1 text-[18px] md:text-[25px]">
        <div className="flex items-center space-x-4">
          <FaClock className="text-[#E4C590]" />
          <h3 className="font-arizonia text-[#E4C590] text-[20px] md:text-[25px] tracking-wider">
            Horaires
          </h3>
        </div>
        <ul className="font-forum text-lg text-white pl-10 space-y-1">
          {horairesTexte.map((horaire, index) => (
            <li key={index}>{horaire}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
