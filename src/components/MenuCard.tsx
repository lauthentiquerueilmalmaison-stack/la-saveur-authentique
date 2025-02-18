"use client";

import { useEffect, useRef } from "react";
import Salades from "./Salades";
import Desserts from "./Desserts";
import Dish from "./Dish";
import Starter from "./Starter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Options from "./Options";
import { Dessert, Entree, Formule, Plat, Salade } from "../../sanity.types";

interface MenuCardProps {
  starters: Entree[];
  dishs: Plat[];
  desserts: Dessert[];
  salades: Salade[];
  options: Formule[];
}

function MenuCard({
  dishs,
  starters,
  desserts,
  salades,
  options,
}: MenuCardProps) {
  return (
    <div className="mt-8 min-h-[500px]">
      <Tabs defaultValue="entrees">
        <TabsList className="w-full border-t-[1px] border-b-[1px] border-[#E4C590] text-white pl-40 md:pl-0  whitespace-nowrap">
          <TabsTrigger
            value="entrees"
            className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
          >
            Entrées
          </TabsTrigger>
          <TabsTrigger
            value="plats"
            className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
          >
            Plats
          </TabsTrigger>
          <TabsTrigger
            value="desserts"
            className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
          >
            Desserts
          </TabsTrigger>
          <TabsTrigger
            value="salades"
            className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
          >
            Salades
          </TabsTrigger>
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
    </div>
  );
}

export default MenuCard;
