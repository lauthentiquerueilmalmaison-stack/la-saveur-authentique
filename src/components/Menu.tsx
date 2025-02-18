import { getAllDishs } from "@/sanity/lib/dishs/getAllDishs";
import MenuCard from "./MenuCard";
import Section from "./Section";
import { getAllStarters } from "@/sanity/lib/starters/getAllStarters";
import { getAllDesserts } from "@/sanity/lib/desserts/getAllDesserts";
import { getAllSalades } from "@/sanity/lib/salades/getAllSalades";
import { getAllOptions } from "@/sanity/lib/options/getAllOptions";

async function Menu() {
  const dishs = await getAllDishs();
  const starters = await getAllStarters();
  const desserts = await getAllDesserts();
  const salades = await getAllSalades();
  const options = await getAllOptions();
  return (
    <Section id="menu" title="Menu">
      <div className="flex flex-col space-y-5 w-full lg:w-1/2 lg:mx-auto bg-black/70 p-5 rounded-lg font-forum">
        <div className="flex flex-col items-center">
          <h3 className="text-[18px] lg:text-[30px] font-semibold">
            Nos formules midi
          </h3>
          <p className="text-sm lg:text-[16px] italic">
            Offre valable uniquement le midi, du lundi au vendredi,
          </p>
          <p className="text-sm lg:text-[16px] italic">
            hors week-ends et jours fériés
          </p>
        </div>
        <div>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={`flex flex-nowrap items-center justify-between text-[18px] lg:text-[20px] py-3 ${
                  index === 0 ? "border-b border-white" : ""
                }`}
              >
                <span className="inline-block">{option.nom}</span>
                <span className="inline-block">{option.prix}&euro;</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* <p className="font-forum text-center text-[18px] md:text-[30px] tracking-wide lg:w-[70%] mx-auto mt-10">
          Vous pouvez privatiser l'établissement pour tous vos événements,
          mariages, repas d'affaires, anniversaires, ou toutes autres occasions
        </p> */}

      <MenuCard
        dishs={dishs}
        starters={starters}
        desserts={desserts}
        salades={salades}
        options={options}
      />
    </Section>
  );
}

export default Menu;
