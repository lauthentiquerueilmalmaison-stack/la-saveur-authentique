"use client";

import { useRef } from "react";
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

async function MenuCard({
  starters,
  dishs,
  desserts,
  salades,
  options,
}: MenuCardProps) {
  // Références pour les onglets et le conteneur
  const tabsListRef = useRef<HTMLDivElement>(null);
  const formulesRef = useRef<HTMLButtonElement>(null);
  const entreesRef = useRef<HTMLButtonElement>(null);
  const platsRef = useRef<HTMLButtonElement>(null);
  const dessertsRef = useRef<HTMLButtonElement>(null);
  const saladesRef = useRef<HTMLButtonElement>(null);

  // Fonction pour ajuster la position du conteneur
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
      activeTab.scrollIntoView({
        behavior: "smooth", // Défilement fluide
        block: "nearest", // Alignement horizontal
        inline: "start", // Positionner à gauche
      });
    }
  };

  return (
    <Tabs
      defaultValue="formules"
      onValueChange={(value) => scrollToActiveTab(value)}
    >
      {/* Liste des onglets */}
      <TabsList
        ref={tabsListRef}
        className="w-full bg-transparent border-t-[1px] border-b-[1px] border-[#E4C590] text-white overflow-x-auto whitespace-nowrap"
      >
        <TabsTrigger
          value="formules"
          ref={formulesRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A]"
        >
          Nos formules
        </TabsTrigger>
        <TabsTrigger
          value="entrees"
          ref={entreesRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A]"
        >
          Entrées
        </TabsTrigger>
        <TabsTrigger
          value="plats"
          ref={platsRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A]"
        >
          Plats
        </TabsTrigger>
        <TabsTrigger
          value="desserts"
          ref={dessertsRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A]"
        >
          Desserts
        </TabsTrigger>
        <TabsTrigger
          value="salades"
          ref={saladesRef}
          className="px-4 py-2 data-[state=active]:bg-[#E4C590] data-[state=active]:text-[#1E3A8A]"
        >
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
