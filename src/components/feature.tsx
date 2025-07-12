import { DeliveryTruck } from "iconoir-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Feature() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#e3e8ec] p-8 gap-8">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">Resgates</h1>
          <p className="text-sm text-orange-500">
            Conheça nosso suporte para resgates.
          </p>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-4">
          <div className="w-full h-32 flex flex-col items-start justify-between bg-[#f5faff] rounded-2xl p-4">
            <div className="w-full h-full flex flex-col items-start justify-between">
              <div className="p-1.5 rounded-lg bg-[#e3e8ec]">
                <DeliveryTruck
                  className="text-zinc-500"
                  width={28}
                  height={28}
                  strokeWidth={1.5}
                />
              </div>

              <h1 className="text-lg font-semibold">Suporte para Remoção</h1>
            </div>
          </div>

          <div className="min-w-28 h-32 flex flex-col items-start justify-end bg-teal-600 rounded-2xl p-4">
            <h1 className="text-4xl font-bold text-white">24h</h1>
          </div>
        </div>

        <div className="w-full h-32 flex flex-row items-end justify-between bg-[#f5faff] rounded-2xl p-4 gap-4">
          <div className="relative h-24 min-w-24 rounded-lg shadow-md overflow-hidden">
            <Image
              src={"/map.png"}
              alt="Mapa"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <p className="text-xs text-zinc-800 text-start">
            Equipes treinadas para uma abordagem segura, rápida e humanizada,
            garantindo a integridade e o respeito ao paciente durante o
            transporte até a clínica.
          </p>
        </div>
      </div>
    </section>
  );
}
