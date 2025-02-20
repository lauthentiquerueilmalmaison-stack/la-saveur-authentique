"use client";
import { useEffect, useState } from "react";
import Section from "./Section";
import axios from "axios";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/api/google-reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avis:", error);
      }
    };

    fetchReviews();
  }, []);
  return (
    <Section id="avis" title="Les avis">
      {/* Contenu des avis */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
        {reviews.length === 0 ? (
          <p className="text-white text-center col-span-3">
            Aucun avis disponible.
          </p>
        ) : (
          reviews.map((avis, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg">
              {/* Image de profil et nom du client */}
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={avis.profile_photo_url}
                  alt={avis.author_name}
                  className="w-10 h-10 rounded-full border border-[#E4C590]"
                />
                <h2 className="text-xl font-semibold text-[#E4C590]">
                  {avis.author_name}
                </h2>
              </div>

              {/* Note sous forme d'étoiles */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < avis.rating ? "text-[#E4C590]" : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Commentaire */}
              <p className="text-white">{avis.text || "Aucun commentaire"}</p>
            </div>
          ))
        )}
      </div>
    </Section>
  );
};

export default Reviews;
