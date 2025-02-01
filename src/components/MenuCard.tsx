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
  const tabsListRef = useRef<HTMLDivElement>(null);
  const formulesRef = useRef<HTMLButtonElement>(null);
  const entreesRef = useRef<HTMLButtonElement>(null);
  const platsRef = useRef<HTMLButtonElement>(null);
  const dessertsRef = useRef<HTMLButtonElement>(null);
  const saladesRef = useRef<HTMLButtonElement>(null);

  const scrollToActiveTab = (value: string) => {
    let activeTab: HTMLButtonElement | null = null;

    switch (value) {
      case "formules":
        activeTab = formulesRef.current;
        break;
      case "entrees":
        activeTab = entreesRef.current;
        break;
      case "plats":
        activeTab = platsRef.current;
        break;
      case "desserts":
        activeTab = dessertsRef.current;
        break;
      case "salades":
        activeTab = saladesRef.current;
        break;
      default:
        break;
    }

    if (activeTab && tabsListRef.current) {
      const container = tabsListRef.current;
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollLeft =
        tabRect.left - containerRect.left + container.scrollLeft;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Déclencher le défilement automatique lorsque le composant est monté
  useEffect(() => {
    scrollToActiveTab("formules");
  }, []);

  return (
    <Tabs
      defaultValue="formules"
      onValueChange={(value) => scrollToActiveTab(value)}
    >
      <TabsList
        ref={tabsListRef}
        className="w-full border-t-[1px] border-b-[1px] border-[#E4C590] text-white pl-40 md:pl-0  whitespace-nowrap"
      >
        <TabsTrigger
          value="formules"
          ref={formulesRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
        >
          Nos formules
        </TabsTrigger>
        <TabsTrigger
          value="entrees"
          ref={entreesRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
        >
          Entrées
        </TabsTrigger>
        <TabsTrigger
          value="plats"
          ref={platsRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
        >
          Plats
        </TabsTrigger>
        <TabsTrigger
          value="desserts"
          ref={dessertsRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A] hover:bg-[#E4C590]/20 transition-colors"
        >
          Desserts
        </TabsTrigger>
        <TabsTrigger
          value="salades"
          ref={saladesRef}
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
      <TabsContent value="formules">
        <Options options={options} />
      </TabsContent>
    </Tabs>
  );
}

export default MenuCard;
