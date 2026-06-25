"use client";

import Image from "next/image";
import photo1 from "../../public/photo1.jpg";
import photo2 from "../../public/photo2.jpg";
import photo3 from "../../public/photo3.jpg";
import photo4 from "../../public/photo4.jpg";
import photo5 from "../../public/photo5.jpg";
import photo6 from "../../public/photo6.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";
import { useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HeroProps {
  telephone: string | undefined;
}

// Composant réutilisable pour les images du carrousel
const CarouselImage = ({ src, alt }: { src: StaticImport; alt: string }) => (
  <div className="relative flex-none w-full h-full  opacity-40">
    <Image
      src={src}
      fill
      style={{ objectFit: "cover" }}
      alt={alt}
      priority // Chargement prioritaire
    />
  </div>
);

function Hero({ telephone }: HeroProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const heroTextRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: photo1, alt: "Photo 1" },
    { src: photo2, alt: "Photo 2" },
    { src: photo3, alt: "Photo 3" },
    { src: photo4, alt: "Photo 4" },
    { src: photo5, alt: "Photo 5" },
    { src: photo6, alt: "Photo 6" },
  ];

  return (
    <section
      className="h-screen  w-full relative overflow-x-hidden bg-black"
      ref={emblaRef}
      id="accueil"
    >
      {/* Carrousel d'images */}
      <div className="flex w-full h-full">
        {images.map((image, index) => (
          <CarouselImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>

      {/* Contenu texte et boutons */}
      <div
        ref={heroTextRef}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white font-forum"
      >
        <h1 className="text-[50px] md:text-[60px] lg:text-[82px] uppercase font-semibold leading-none">
          L'authentique
        </h1>
        <h3 className="uppercase font-semibold text-[18px] md:text-[23px] lg:text-[30px] mb-4">
          <span className="lowercase font-medium font-arizonia">des</span>{" "}
          produits frais{" "}
          <span className="lowercase font-medium font-arizonia">& des</span>{" "}
          plats faits maison
        </h3>
        <div className="flex space-y-4 md:space-x-4 flex-col md:flex-row md:items-end">
          <Button bg={true} href="#menu">
            Voir le menu
          </Button>
          <a href={`tel:${telephone}`} aria-label="Appeler pour réserver">
            <Button>Appelez pour réserver</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
