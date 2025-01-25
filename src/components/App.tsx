"use client";
import { useToggleMenuStore } from "@/store";
import Hero from "./Hero";
import Menu from "./Menu";
import SideBare from "./SideBare";
import { AnimatePresence } from "motion/react";

const App = () => {
  const isOpen = useToggleMenuStore((state) => state.isOpen);
  return (
    <div className="overflow-hidden w-full">
      <Hero />
      <Menu />
    </div>
  );
};

export default App;
