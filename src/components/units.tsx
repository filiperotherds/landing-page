import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HeartSolid, StarSolid } from "iconoir-react";
import { Units as UnitsData } from "@/lib/data";

export default function Units() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 gap-8">
      {/* Carousel 1 */}
      <div className="w-full flex flex-col items-start justify-start px-8 gap-4">
        {/* Carousel Header */}
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-bold text-zinc-700">Populares em São Paulo</h1>

          <Link
            href={"/unidades/sao-paulo"}
            className="font-sans text-sm text-blue-600"
          >
            <div className="flex flex-row items-center justify-center gap-0.5">
              <span className="pb-0.5">Ver mais</span>

              <ChevronRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Carousel Units */}
        <div className="w-full flex flex-row items-center justify-start px-0.5 gap-3 overflow-x-auto flex-nowrap scrollbar-hide">
          {UnitsData.SaoPaulo.map((unidade) => (
            <div
              key={unidade.id}
              className="flex flex-col items-start justify-start gap-2 flex-shrink-0"
            >
              {/* Image Container */}
              <div className="relative w-38 h-38 rounded-2xl overflow-hidden shadow-md">
                <div className="z-10 absolute top-3 right-3">
                  <HeartSolid
                    color={`rgb(0, 0, 0, 0.25)`}
                    stroke="#fff"
                    strokeWidth={2.2}
                  />
                </div>

                <Image
                  src={unidade.displayPhoto}
                  alt="Foto Unidade"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full flex flex-col items-start justify-start px-1">
                <h1 className="text-xs font-semibold text-zinc-800">
                  Unidade em {unidade.city}
                </h1>

                <div className="w-full flex flex-row items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {unidade.hospitalizations} Internações
                  </span>

                  <div className="flex flex-row items-center justify-center gap-1">
                    <StarSolid
                      className="text-yellow-500"
                      width={10}
                      height={10}
                    />

                    <span className="text-xs text-zinc-500">
                      {unidade.rate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel 2 */}
      <div className="w-full flex flex-col items-start justify-start px-8 gap-4">
        {/* Carousel Header */}
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="font-bold text-zinc-700">Novos Conveniados</h1>

          <Link
            href={"/unidades/sao-paulo"}
            className="font-sans text-sm text-blue-600"
          >
            <div className="flex flex-row items-center justify-center gap-0.5">
              <span className="pb-0.5">Ver mais</span>

              <ChevronRight size={14} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Carousel Units */}
        <div className="w-full flex flex-row items-center justify-start px-0.5 gap-3 overflow-x-auto flex-nowrap scrollbar-hide">
          {UnitsData.SaoPaulo.map((unidade) => (
            <div
              key={unidade.id}
              className="flex flex-col items-start justify-start gap-2 flex-shrink-0"
            >
              {/* Image Container */}
              <div className="relative w-38 h-38 rounded-2xl overflow-hidden shadow-md">
                <div className="z-10 absolute top-3 right-3">
                  <HeartSolid
                    color={`rgb(0, 0, 0, 0.25)`}
                    stroke="#fff"
                    strokeWidth={2.2}
                  />
                </div>

                <Image
                  src={unidade.displayPhoto}
                  alt="Foto Unidade"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full flex flex-col items-start justify-start px-1">
                <h1 className="text-xs font-semibold text-zinc-800">
                  Unidade em {unidade.city}
                </h1>

                <div className="w-full flex flex-row items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {unidade.hospitalizations} Internações
                  </span>

                  <div className="flex flex-row items-center justify-center gap-1">
                    <StarSolid
                      className="text-yellow-500"
                      width={10}
                      height={10}
                    />

                    <span className="text-xs text-zinc-500">
                      {unidade.rate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
