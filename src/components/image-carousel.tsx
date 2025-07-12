// src/components/image-carousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) {
    return null; // Não renderiza nada se não houver imagens
  }

  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden group">
      {/* Container das Imagens */}
      <div className="w-full h-full">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Foto ${index + 1} da unidade`}
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0} // Otimiza o carregamento da primeira imagem
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ))}
      </div>

      {/* Controles de Navegação (só aparecem se houver mais de uma imagem) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de Posição (bolinhas) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}