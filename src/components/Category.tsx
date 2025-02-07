import Image, { StaticImageData } from "next/image";
import { Dessert, Entree, Formule, Plat, Salade } from "../../sanity.types";
import { ReactNode } from "react";

interface CategoryProps {
  children?: ReactNode;
  image: StaticImageData;
  category: Plat[] | Entree[] | Dessert[] | Salade[] | Formule[];
}

const Category = ({ image, category, children }: CategoryProps) => {
  return (
    <section className="w-full h-full flex py-5 lg:space-x-10">
      <div className="hidden lg:flex lg:w-[30vw] lg:h-[70vh] relative rounded-lg overflow-x-hidden ">
        <Image
          src={image}
          alt="food image "
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1">
        {children}
        {category.map((cat) => {
          return (
            <div
              key={cat._id}
              className="flex flex-nowrap items-center justify-between text-[18px] lg:text-[25px] py-3 border-b-[1px] border-[#333333]"
            >
              <span className="inline-block">{cat.nom}</span>
              <span className="inline-block">{cat.prix}&euro;</span>
              {}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
