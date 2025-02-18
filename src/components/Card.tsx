import Image from "next/image";
import React from "react";

interface CardProps {
  src: string;
  index: number;
}

const Card = ({ src, index }: CardProps) => {
  return (
    <div className="relative  flex-shrink-0 w-full md:w-[50vw] h-fit mx-1 overflow-hidden">
      <Image
        src={src}
        alt={`carousel-image-${index}`}
        width={1600}
        height={1060}
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default Card;
