import React from "react";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section id={id} className="w-[90%] mx-auto h-screen text-white py-12">
      {/* Titre de la section */}
      <div className="relative w-full h-[20vh] lg:h-[30vh] flex justify-center items-center font-arizonia uppercase text-[50px] text-center rounded-lg overflow-hidden">
        {/* Fond animé pour le titre */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#E4C590] opacity-50"></div>
        {/* Texte du titre */}
        <h1 className="tracking-widest relative z-10 text-white drop-shadow-lg">
          {title}
        </h1>
      </div>

      {/* Contenu de la section */}
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg">
        {children}
      </div>
    </section>
  );
};

export default Section;
