import React from "react";
import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ src, alt }) => (
  <div
    className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
    data-wow-delay=".2s"
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="drop-shadow-three mx-auto max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
    />
  </div>
);

export default SectionImage;
