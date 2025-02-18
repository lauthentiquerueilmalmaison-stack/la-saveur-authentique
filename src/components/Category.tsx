import Image, { StaticImageData } from "next/image";
import {
  Dessert,
  Entree,
  Formule,
  Glace,
  Plat,
  Salade,
} from "../../sanity.types";
import { ReactNode } from "react";

interface CategoryProps {
  children?: ReactNode;
  image: StaticImageData;
  category: Plat[] | Entree[] | Dessert[] | Salade[] | Formule[] | Glace[];
}

const Category = ({ image, category, children }: CategoryProps) => {
  return (
    <section className="w-full h-full flex py-5 lg:space-x-10">
      <div className="hidden lg:flex md:w-[35vw] h-full relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="image de la categorie"
          width={1600}
          height={1060}
          className="object-contain"
          loading="lazy"
        />{" "}
      </div>
      <div className="flex-1">
        {children}
        {category.map((cat, index) => {
          return (
            <div
              key={cat._id}
              className={`flex flex-nowrap items-center justify-between text-[18px] lg:text-[23px] py-3 ${index < category.length - 1 ? "border-b-[1px] border-white/30" : ""} `}
            >
              <span className="inline-block">{cat.nom}</span>
              <span className="inline-block">{cat.prix}&euro;</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
