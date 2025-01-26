import dish from "../../public/dish.jpg";
import { Plat } from "../../sanity.types";
import Image from "next/image";
interface DishProps {
  dishs: Plat[];
}

const Dish = ({ dishs }: DishProps) => {
  return (
    <div className="w-full h-full flex py-5 lg:space-x-5">
      <div className="hidden md:flex lg:w-[40vw] lg:h-[70vh] relative rounded-lg overflow-x-hidden bg-black opacity-65">
        <Image
          src={dish}
          alt="plat"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1">
        {dishs.map((dish) => {
          return (
            <div
              key={dish._id}
              className="flex flex-nowrap items-center justify-between text-[20px] lg:text-[30px] py-3 border-b-[1px] "
            >
              <span className="inline-block">{dish.nom}</span>
              <span className="inline-block">{dish.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dish;
