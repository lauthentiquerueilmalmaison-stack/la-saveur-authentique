import { ALL_OPTIONS_QUERYResult, Formule } from "../../sanity.types";

interface OptionProps {
  option: {
    _id: string;
    _type: "formule";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    nom?: string;
    prix?: number;
  };
  index: number;
}

const Option = ({ option, index }: OptionProps) => {
  return (
    <div
      className={`flex flex-nowrap items-center justify-between text-[18px] lg:text-[23px] py-3 ${
        index === 0 ? "border-b border-white/30" : ""
      }`}
    >
      <span className="inline-block">{option.nom}</span>
      <span className="inline-block">{option.prix}&euro;</span>
    </div>
  );
};

export default Option;
