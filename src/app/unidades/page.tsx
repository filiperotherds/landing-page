"use client";

import FixedButton from "@/components/fixed-button";
import UnderConstruction from "@/components/under-construction";
import { Squircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Unidades as dataUnidades } from "@/lib/data";
import CardUnit from "@/components/card-unit";

export default function Unidades() {
  const router = useRouter();

  return (
    <>
      {/* Desktop Screen */}
      <div className="hidden sm:flex w-screen h-screen items-center justify-center font-outfit">
        <UnderConstruction />
      </div>

      {/* Mobile Screen */}
      <div className="flex flex-col items-start justify-start sm:hidden font-outfit w-screen h-full">
        {/* Fixed Whatsapp Button */}
        <FixedButton />

        {/* Header Section */}
        <div className="flex flex-row items-center justify-center gap-4 p-8">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Squircle size={64} className="z-0 absolute" />
            <span className="relative font-dm-serif text-3xl font-bold tracking-tighter">
              AF
            </span>
          </div>

          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold">Unidades</h1>
            <p className="text-sm text-orange-500">
              Conheça nossas unidades conveniadas.
            </p>
          </div>
        </div>

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

        <h1 className="font-semibold px-8 pb-4">Unidades em São Paulo</h1>

        {/* Units Section */}
        <div className="w-full flex items-center justify-center px-8 pb-8">
          <div className="grid grid-cols-2 gap-8">
            {dataUnidades.map((unidade) => (
              <CardUnit key={unidade.id} unidade={unidade} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
