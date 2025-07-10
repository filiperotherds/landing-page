"use client";

import { Unidades } from "@/lib/data";
import { notFound } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { StarSolid, Whatsapp, WhatsappSolid } from "iconoir-react";
import Footer from "@/components/footer";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const unidade = Unidades.find((u) => u.slug === slug);

  if (!unidade) {
    notFound();
  }

  const placeholderAray = [1, 2, 3, 4, 5];

  const url = `https://wa.me/5518996698064?text=${encodeURI(
    `Olá, estou buscando ajuda com o Grupo AF e gostaria de saber mais sobre a unidade de ${unidade.city}!`
  )}`;

  return (
    <div className="flex flex-col items-start justify-start sm:hidden font-outfit w-screen h-full scroll-smooth bg-[#f5faff] text-blue-950">
      {/* Header Section */}
      <Header />

      <div className="w-full flex flex-row items-center justify-start px-8 pb-8 gap-4 rounded-2xl overflow-x-auto flex-nowrap scrollbar-hide">
        {placeholderAray.map((num) => (
          <div
            key={num}
            className="relative w-full aspect-square rounded-3xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={"/placeholder.svg"}
              alt={`Placeholder Image ${num}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
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

            <span className="text-lg font-semibold">
              {unidade.hospitalizations}
            </span>
          </div>
        </div>

        <Link
          href={url}
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
