import salade from "../../public/salade.jpg";
import { Salade } from "../../sanity.types";
import Image from "next/image";
import Ingredients from "./Ingredients";
interface SaladeProps {
  salades: Salade[];
}
const Salades = ({ salades }: SaladeProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-10">
      <div className="hidden lg:flex md:w-[30vw] lg:min-h-[70vh] h-fit  relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image src={salade} alt="plat" fill priority />
      </div>
      <div className="flex-1">
        {salades.map((salade) => {
          return (
            <div
              key={salade._id}
              className="flex flex-col py-2 border-b-[1px] border-[#333333]"
            >
              <div className="flex flex-nowrap items-center justify-between text-[20px] lg:text-[30px]">
                <span className="inline-block">{salade.nom}</span>
                <span className="inline-block">{salade.prix} &euro;</span>
              </div>
              <Ingredients ingredients={salade.ingredients ?? []} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salades;
