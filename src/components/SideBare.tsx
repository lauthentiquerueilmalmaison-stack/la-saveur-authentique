import { useToggleMenuStore } from "@/store";
import { motion } from "motion/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useLenis } from "lenis/react";
import Link from "next/link";

const links = [
  { id: "#accueil", title: "accueil" },
  { id: "#menu", title: "menu" },
  { id: "#avis", title: "avis" },
  { id: "#nous-suivre", title: "nous suivre" },
  { id: "#contact", title: "contact" },
  { id: "privatisation", title: "privatisation" },
];

const variants = {
  initial: {
    x: "100%",
  },
  show: {
    x: "0",
  },
  exit: {
    x: "100%",
  },
};

const SideBare = () => {
  const toggleMenu = useToggleMenuStore((state) => state.toggleMenu);
  const lenis = useLenis();

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="show"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden h-screen w-screen absolute top-0 p-5 bg-black  z-50"
    >
      <div className="flex justify-end">
        <XMarkIcon
          className="text-white  size-7 cursor-pointer "
          onClick={toggleMenu}
        />
      </div>
      <nav className="w-full ">
        <ul className="flex flex-col items-start text-[30px] font-forum text-white uppercase font-semibold tracking-wider">
          {links.map(({ id, title }) => {
            return (
              <Link href={id} key={id}>
                {title}
              </Link>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

export default SideBare;
