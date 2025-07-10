import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { HeartSolid, StarSolid } from "iconoir-react";
import { Unidades } from "@/lib/data";

export default function Units() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 gap-8">
      <div className="w-full flex flex-row items-center justify-between px-8">
        <div className="w-full flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">Unidades</h1>
          <p className="text-sm text-orange-500">
            Conheça nossas unidades conveniadas.
          </p>
        </div>

        <Link href={`/unidades`}>
          <ArrowUpRight size={32} strokeWidth={2.5} />
        </Link>
      </div>
      {/* Carousel 1 */}
      <div className="w-full flex flex-col items-start justify-start px-8 gap-4">
        {/* Carousel Header */}
        <h1 className="font-bold text-blue-950">Populares em São Paulo</h1>

        {/* Carousel Units */}
        <div className="w-full flex flex-row items-center justify-start px-0.5 gap-3 rounded-2xl overflow-x-auto flex-nowrap scrollbar-hide">
          {Unidades.map((unidade) => (
            <Link
              href={`/unidades/${unidade.slug}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
