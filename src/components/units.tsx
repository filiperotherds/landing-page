import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Unidades } from "@/lib/data";
import CardUnit from "./card-unit";

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
            <CardUnit key={unidade.id} unidade={unidade} />
          ))}
        </div>
      </div>
    </section>
  );
}
