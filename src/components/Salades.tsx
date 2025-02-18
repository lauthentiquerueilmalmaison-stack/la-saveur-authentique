import salade from "../../public/plat4.jpg";
import { Salade } from "../../sanity.types";
import Image from "next/image";
import Ingredients from "./Ingredient";
import Ingredient from "./Ingredient";
interface SaladeProps {
  salades: Salade[];
}
const Salades = ({ salades }: SaladeProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-10">
      <div className="hidden lg:flex md:w-[30vw]   relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image
          src={salade}
          alt="salade"
          width={1600}
          height={1060}
          className="object-contain"
          loading="lazy"
        />{" "}
      </div>
      <div className="flex-1">
        {salades.map((salade) => {
          return (
            <div
              key={salade._id}
              className="flex flex-col py-2 border-b-[1px] border-white"
            >
              <div className="flex flex-nowrap items-center justify-between text-[18px] lg:text-[25px]">
                <span className="inline-block">{salade.nom}</span>
                <span className="inline-block">{salade.prix} &euro;</span>
              </div>
              <div className="flex">
                {salade.ingredients?.map((ingredient, index) => {
                  return (
                    <Ingredient
                      key={ingredient._id}
                      name={ingredient.nom ?? ""}
                      index={index}
                      length={salade.ingredients?.length ?? 0}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salades;
