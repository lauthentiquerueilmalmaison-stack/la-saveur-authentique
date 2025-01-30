import Salades from "./Salades";
import Desserts from "./Desserts";
import Dish from "./Dish";
import Starter from "./Starter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { getAllDishs } from "@/sanity/lib/dishs/getAllDishs";
import { getAllStarters } from "@/sanity/lib/starters/getAllStarters";
import { getAllDesserts } from "@/sanity/lib/desserts/getAllDesserts";
import { getAllSalades } from "@/sanity/lib/salades/getAllSalades";
import Options from "./Options";
import { getAllOptions } from "@/sanity/lib/options/getAllOptions";

async function MenuCard() {
  const dishs = await getAllDishs();
  const starters = await getAllStarters();
  const desserts = await getAllDesserts();
  const salades = await getAllSalades();
  const options = await getAllOptions();

  return (
    <Tabs defaultValue="formules">
      {/* Liste des onglets */}
      <TabsList className="w-full bg-transparent border-t-[1px] border-b-[1px] border-[#E4C590] text-white overflow-x-auto whitespace-nowrap">
        <TabsTrigger value="formules" className="px-4 py-2">
          Nos formules
        </TabsTrigger>
        <TabsTrigger value="entrees" className="px-4 py-2">
          Entrées
        </TabsTrigger>
        <TabsTrigger value="plats" className="px-4 py-2">
          Plats
        </TabsTrigger>
        <TabsTrigger value="desserts" className="px-4 py-2">
          Desserts
        </TabsTrigger>
        <TabsTrigger value="salades" className="px-4 py-2">
          Salades
        </TabsTrigger>
      </TabsList>

      {/* Contenu des onglets */}
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
      <TabsContent value="formules">
        <Options options={options} />
      </TabsContent>
    </Tabs>
  );
}

export default MenuCard;
