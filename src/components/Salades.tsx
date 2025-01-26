import salade from "../../public/salade.jpg";
import { Salade } from "../../sanity.types";
import Image from "next/image";
interface SaladeProps {
  salades: Salade[];
}
const Salades = ({ salades }: SaladeProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-5">
      <div className="hidden lg:flex md:w-[40vw] lg:h-[70vh] relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image src={salade} alt="plat" fill priority />
      </div>
      <div className="flex-1">
        {salades.map((salade) => {
          return (
            <div
              key={salade._id}
              className="flex flex-nowrap items-center justify-between text-[20px] lg:text-[30px] py-2 lg:py-3 border-b-[1px] "
            >
              <span className="inline-block">{salade.nom}</span>
              <span className="inline-block">{salade.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salades;
