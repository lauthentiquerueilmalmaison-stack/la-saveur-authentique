import React from "react";
import Section from "./Section";

interface Avis {
  id: number;
  nom: string;
  commentaire: string;
  note: number; // Note sur 5
}

const Testimonials = () => {
  // Données des avis clients (à remplacer par des données dynamiques si nécessaire)
  const avis: Avis[] = [
    {
      id: 1,
      nom: "Jean Dupont",
      commentaire:
        "Un restaurant exceptionnel ! Les plats sont délicieux et le service est impeccable. Je recommande vivement !",
      note: 5,
    },
    {
      id: 2,
      nom: "Marie Curie",
      commentaire:
        "Ambiance chaleureuse et cuisine raffinée. Une adresse à ne pas manquer !",
      note: 4,
    },
    {
      id: 3,
      nom: "Pierre Durand",
      commentaire:
        "Très bon rapport qualité-prix. Les desserts sont à tomber par terre !",
      note: 5,
    },
  ];
  return (
    <Section id="avis" title="Les avis">
      {/* Contenu des avis */}
      <div className="backdrop-blur-sm rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avis.map((avis) => (
            <div key={avis.id} className="bg-white/20 p-6 rounded-lg">
              {/* Nom du client */}
              <h2 className="text-xl font-semibold text-[#E4C590] mb-2">
                {avis.nom}
              </h2>

              {/* Note sous forme d'étoiles */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < avis.note ? "text-[#E4C590]" : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Commentaire */}
              <p className="text-gray-200">{avis.commentaire}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
