import Salades from "./Salades";
import Desserts from "./Desserts";
import Dish from "./Dish";
import Starter from "./Starter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { getAllDishs } from "@/sanity/lib/dishs/getAllDishs";
import { getAllStarters } from "@/sanity/lib/starters/getAllStarters";
import { getAllDesserts } from "@/sanity/lib/desserts/getAllDesserts";
import { getAllSalades } from "@/sanity/lib/salades/getAllSalades";

async function MenuCard() {
  const dishs = await getAllDishs();
  const starters = await getAllStarters();
  const desserts = await getAllDesserts();
  const salades = await getAllSalades();
  return (
    <Tabs defaultValue="entrees" className="w-[90%] mx-auto ">
      <TabsList className="w-full bg-transparent border-t-[1px] border-b-[1px] border-[#E4C590] ">
        <TabsTrigger
          value="entrees"
          className=" text-white text-lg active:bg-[#E4C590] active:text-black"
        >
          Entrées
        </TabsTrigger>
        <TabsTrigger value="plats">Plats</TabsTrigger>
        <TabsTrigger value="desserts">Desserts</TabsTrigger>
        <TabsTrigger value="salades">Salades</TabsTrigger>
      </TabsList>
      <TabsContent value="entrees">
        <Starter starters={starters} />
      </TabsContent>
      <TabsContent value="plats">
        <Dish dishs={dishs} />
      </TabsContent>
      <TabsContent value="desserts">
        <Desserts desserts={desserts} />
      </TabsContent>
      <TabsContent value="salades">
        <Salades salades={salades} />
      </TabsContent>
    </Tabs>
  );
}

export default MenuCard;
