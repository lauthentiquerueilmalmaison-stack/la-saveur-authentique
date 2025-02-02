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
