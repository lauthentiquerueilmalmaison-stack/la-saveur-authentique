import React from "react";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${id === "galerie" ? "" : "px-[5vw] 3xl:px-[10vw]"} w-full  mx-auto  text-white py-12`}
    >
      {/* Titre de la section */}
      <div className="relative w-full h-[15vh] lg:h-[20vh] flex justify-center items-center font-arizonia uppercase text-[35px] lg:text-[50px] text-center rounded-lg ">
        {/* Fond animé pour le titre
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#E4C590] opacity-50"></div> */}
        {/* Texte du titre */}
        <h1 className="tracking-widest relative text-white drop-shadow-lg">
          {title}
        </h1>
      </div>

      {/* Contenu de la section */}
      <div
        className={`mt-8   min-h-full ${id !== "galerie" ? "bg-white/30  p-5 rounded-lg" : ""} overflow-hidden`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
