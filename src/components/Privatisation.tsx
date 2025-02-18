"use client";

import { useState } from "react";
import Section from "./Section";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners"; // Import du spinner

// Schéma de validation avec Zod
const privatisationSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(1, "Le téléphone est requis"),
  date: z
    .string()
    .min(1, "La date est requise")
    .refine(
      (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      },
      {
        message: "La date ne peut pas être antérieure à aujourd'hui",
      }
    ),
  nombrePersonnes: z
    .number()
    .min(1, "Le nombre de personnes doit être au moins 1"),
  typeEvenement: z.string().min(1, "Le type d'événement est requis"),
  message: z.string().optional(),
});

type PrivatisationFormData = z.infer<typeof privatisationSchema>;

const Privatisation = () => {
  const [isLoading, setIsLoading] = useState(false); // État de chargement

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PrivatisationFormData>({
    resolver: zodResolver(privatisationSchema),
  });

  // Fonction pour envoyer les données du formulaire
  const onSubmit: SubmitHandler<PrivatisationFormData> = async (data) => {
    setIsLoading(true); // Activer le chargement
    try {
      const response = await axios.post("/api/privatisation", data);
      if (response.status === 200) {
        toast.success("Votre demande a été envoyée avec succès !", {
          style: {
            background: "#22C55E",
            color: "#FFFFFF",
          },
        });
        reset();
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.", {
        style: {
          background: "#EF4444",
          color: "#FFFFFF",
        },
      });
    } finally {
      setIsLoading(false); // Désactiver le chargement
    }
  };

  return (
    <Section id="privatisation" title="Privatisation">
      <p className="font-arizonia text-center text-[18px] md:text-[30px] tracking-wide lg:w-[70%] mx-auto mt-10">
        Vous pouvez privatiser l'établissement pour tous vos événements,
        mariages, repas d'affaires, anniversaires, ou toutes autres occasions
      </p>
      {/* Contenu de la section */}
      <div className="mt-8 p-6 min-h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Grille pour les champs (2 par ligne sur PC) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Champ Nom */}
            <div className="space-y-2">
              <label
                htmlFor="nom"
                className="block text-lg font-semibold text-white"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                {...register("nom")}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
                placeholder="Votre nom"
              />
              {errors.nom && (
                <p className="text-red-400 text-sm">{errors.nom.message}</p>
              )}
            </div>

            {/* Champ Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
                placeholder="Votre email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Champ Téléphone */}
            <div className="space-y-2">
              <label
                htmlFor="telephone"
                className="block text-lg font-semibold text-white"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                {...register("telephone")}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
                placeholder="Votre téléphone"
              />
              {errors.telephone && (
                <p className="text-red-400 text-sm">
                  {errors.telephone.message}
                </p>
              )}
            </div>

            {/* Champ Date */}
            <div className="space-y-2">
              <label
                htmlFor="date"
                className="block text-lg font-semibold text-white"
              >
                Date de l'événement
              </label>
              <input
                type="date"
                id="date"
                {...register("date")}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
              />
              {errors.date && (
                <p className="text-red-400 text-sm">{errors.date.message}</p>
              )}
            </div>

            {/* Champ Nombre de personnes */}
            <div className="space-y-2">
              <label
                htmlFor="nombrePersonnes"
                className="block text-lg font-semibold text-white"
              >
                Nombre de personnes
              </label>
              <input
                type="number"
                id="nombrePersonnes"
                {...register("nombrePersonnes", { valueAsNumber: true })}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
                placeholder="Nombre de personnes"
              />
              {errors.nombrePersonnes && (
                <p className="text-red-400 text-sm">
                  {errors.nombrePersonnes.message}
                </p>
              )}
            </div>

            {/* Champ Type d'événement */}
            <div className="space-y-2">
              <label
                htmlFor="typeEvenement"
                className="block text-lg font-semibold text-white"
              >
                Type d'événement
              </label>
              <select
                id="typeEvenement"
                {...register("typeEvenement")}
                className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300 appearance-none"
              >
                <option value="" disabled selected>
                  Sélectionnez un type d'événement
                </option>
                <option value="anniversaire">Anniversaire</option>
                <option value="mariage">Mariage</option>
                <option value="entreprise">Événement d'entreprise</option>
                <option value="autre">Autre</option>
              </select>
              {errors.typeEvenement && (
                <p className="text-red-400 text-sm">
                  {errors.typeEvenement.message}
                </p>
              )}
            </div>
          </div>

          {/* Champ Message (toujours en pleine largeur) */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-white"
            >
              Message (optionnel)
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="w-full p-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E4C590] text-white placeholder-gray-300"
              rows={4}
              placeholder="Votre message"
            />
          </div>

          {/* Bouton de soumission (toujours en pleine largeur) */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? "bg-[#E4C590]/70" : "bg-[#E4C590]"
            } text-black py-3 rounded-lg font-semibold hover:bg-[#E4C590]/90 transition-colors flex items-center justify-center`}
          >
            {isLoading ? (
              <ClipLoader size={20} color="#1E3A8A" /> // Spinner de react-spinners
            ) : (
              "Envoyer la demande"
            )}
          </button>
        </form>
      </div>

      {/* Toaster pour afficher les notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "#22C55E",
              color: "#FFFFFF",
            },
          },
          error: {
            style: {
              background: "#EF4444",
              color: "#FFFFFF",
            },
          },
        }}
      />
    </Section>
  );
};

export default Privatisation;
