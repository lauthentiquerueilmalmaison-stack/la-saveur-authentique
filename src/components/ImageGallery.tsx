"use client";

import Section from "./Section";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Card from "./Card";

const images = [
  "/plat1.jpg",
  "/plat2.jpg",
  "/plat3.jpg",
  "/plat4.jpg",
  "/plat5.jpg",
  "/plat6.jpg",
  "/plat7.jpg",
  "/plat8.jpg",
  "/plat9.jpg",
  "/plat10.jpg",
  "/plat11.jpg",
  "/plat12.jpg",
];

const ImageGallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <Section id="galerie" title="Galerie">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex ">
          {images.map((src, index) => (
            <Card key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ImageGallery;
