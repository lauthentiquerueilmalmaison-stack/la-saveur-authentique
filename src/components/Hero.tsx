"use client";

import Image from "next/image";
import photo from "../../public/photo-9.jpg";
import photo1 from "../../public/photo-7.jpg";
import photo2 from "../../public/photo-8.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";
import { motion } from "motion/react";

function Hero() {
  const phoneNumber = "+33956739572";
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <motion.section
      className="h-screen w-screen relative overflow-x-hidden"
      ref={emblaRef}
      id="accueil"
    >
      <div className="flex   w-full h-full">
        <div className="relative flex-none w-full h-full  bg-black opacity-25">
          <Image
            src={photo}
            fill
            style={{ objectFit: "cover" }}
            alt="photo"
            priority
          />
        </div>
        <div className="relative flex-none w-full h-full bg-black opacity-25">
          <Image
            src={photo1}
            fill
            style={{ objectFit: "cover" }}
            alt="photo"
            priority
          />
        </div>
        <div className="relative flex-none w-full h-full bg-black opacity-25">
          <Image
            src={photo2}
            fill
            style={{ objectFit: "cover" }}
            alt="photo"
            priority
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white font-forum">
        <h1 className="text-[50px] md:text-[60px] lg:text-[82px] uppercase  font-semibold leading-none">
          l'authentique
        </h1>
        <h3 className="uppercase font-semibold text-[18px] md:text-[23px] lg:text-[30px] mb-4">
          <span className="lowercase  font-medium font-arizonia">du</span> fait
          maison{" "}
          <span className="lowercase  font-medium font-arizonia">& des</span>{" "}
          produits frais
        </h3>
        <div className="flex space-y-4 md:space-x-4 flex-col md:flex-row  md:items-end">
          <Button bg={true} href="#menu">
            Voir le menu
          </Button>
          <a href={`tel:${phoneNumber}`}>
            <Button>appellez pour réserver</Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
