import React from "react";

interface ImageSlideProps {
  src: string;
  alt: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-4xl bg-primary-400 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
        <img src={src} alt={alt} className="object-contain w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default ImageSlide;
