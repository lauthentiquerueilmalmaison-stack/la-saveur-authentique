"use client";
import dynamic from "next/dynamic";
import Section from "./Section";

// Importation dynamique du composant de carte avec désactivation du SSR
const Map = dynamic(() => import("./Map"), {
  ssr: false, // Désactive le rendu côté serveur pour ce composant
});

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte Leaflet */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Map />
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-arizona text-2xl text-[#E4C590]">Adresse</h3>
              <p className="font-forum text-lg text-white">
                41 Boulevard National, 92500 Rueil-Malmaison
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizona text-2xl text-[#E4C590]">
                Téléphone
              </h3>
              <p className="font-forum text-lg text-white">+33 1 23 45 67 89</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizona text-2xl text-[#E4C590]">Email</h3>
              <p className="font-forum text-lg text-white">
                contact@restaurant.com
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-arizona text-2xl text-[#E4C590]">Horaires</h3>
              <p className="font-forum text-lg text-white">
                Lun - Dim : 12h - 22h
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
