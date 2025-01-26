import Image from "next/image";
import dessert from "../../public/dessert.jpg";
import { Dessert } from "../../sanity.types";

interface DessertProps {
  desserts: Dessert[];
}
const Desserts = ({ desserts }: DessertProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-5">
      <div className="hidden lg:flex lg:w-[40vw] lg:h-[70vh] relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image
          src={dessert}
          alt="plat"
          fill
          priority
          style={{ objectFit: "cover"}}
        />
      </div>
      <div className="flex-1">
        {desserts.map((dessert) => {
          return (
            <div
              key={dessert._id}
              className="flex flex-nowrap items-center justify-between text-[20px] lg:text-[30px] py-3 border-b-[1px] "
            >
              <span className="inline-block">{dessert.nom}</span>
              <span className="inline-block">{dessert.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desserts;
