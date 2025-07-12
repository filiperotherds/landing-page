"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/image-carousel";
import { ChevronLeft } from "lucide-react";
import { StarSolid, WhatsappSolid } from "iconoir-react";
import { Unidade } from "@/lib/data";

interface UnidadeClientPageProps {
  unidade: Unidade;
  images: string[];
  whatsAppUrl: string;
}

export default function UnidadeClientPage({
  unidade,
  images,
  whatsAppUrl,
}: UnidadeClientPageProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start justify-start sm:hidden font-outfit w-screen h-full scroll-smooth">
      <Header />

      <div className="w-full flex items-start justify-start px-8 pb-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex flex-row items-center justify-center gap-1"
        >
          <ChevronLeft size={20} />
          <span>Voltar</span>
        </button>
      </div>

      {/* Carrossel de Imagens Dinâmico */}
      <div className="w-full flex flex-row items-center justify-start px-8 pb-8">
        {images.length > 0 ? (
          <ImageCarousel images={images} />
        ) : (
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
            <Image
              src={"/placeholder.svg"}
              alt="Placeholder Image"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-start justify-start px-8 pb-8 gap-4">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">{unidade.city}</h1>
          <div className="h-7 px-2 flex items-center justify-center border border-teal-600 rounded-lg">
            <span className="text-sm text-teal-600">Últimas vagas</span>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <span>Avaliações</span>
            <div className="flex flex-row items-center justify-center gap-1">
              <StarSolid className="text-yellow-500" width={18} height={18} />
              <span className="text-lg font-semibold">{unidade.rate}</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <span>Internações</span>
            <span className="text-lg font-semibold">{unidade.hospitalizations}</span>
          </div>
        </div>

        <Link
          href={whatsAppUrl}
          target="_blank"
          className="w-full h-14 flex flex-row items-center justify-center gap-2 bg-orange-500 text-white rounded-2xl"
        >
          <WhatsappSolid width={20} height={20} />
          <span className="font-semibold">Saiba mais</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}