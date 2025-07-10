import { url } from "@/lib/data";
import { WhatsappSolid } from "iconoir-react";
import Link from "next/link";
import { Treatments as TreatmentsData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Treatments() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-8 gap-8">
      <div className="w-full flex flex-col items-start justify-start">
        <h1 className="text-3xl font-bold">Tratamentos</h1>
        <p className="text-sm text-orange-500">
          Conheça os métodos dos nossos tratamentos.
        </p>
      </div>

      <div className="relative w-full flex flex-col items-start gap-4">
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <div className="w-full h-28 flex flex-col justify-between bg-[#e3e8ec] rounded-2xl p-4">
            <h1 className="text-xl font-semibold">Nossos Tratamentos</h1>

            <p className="text-xs">
              Encontre os tratamentos que já ajudaram milhares de famílias.
            </p>
          </div>

          <Link
            href={url}
            target="_blank"
            className="min-w-28 h-28 flex flex-col items-start justify-between rounded-2xl p-4 bg-orange-500"
          >
            <WhatsappSolid
              color="#ffffff"
              width={22}
              height={22}
              strokeWidth={2}
            />

            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white font-semibold text-sm">Whatsapp</h1>

              <p className="text-white text-xs">Entre em contato</p>
            </div>
          </Link>
        </div>

        {TreatmentsData.map((treatment) => (
          <Link
            href={`/tratamentos/${treatment.slug}`}
            key={treatment.id}
            className="w-full flex flex-col items-start justify-between bg-[#e3e8ec] rounded-3xl p-4 gap-8"
          >
            <div className="w-full flex flex-row items-start justify-between">
              <h1 className="text-3xl font-bold max-w-3/4">{treatment.h1}</h1>

              <div className="p-1.5 rounded-xl bg-[#f5faff]">
                <ArrowUpRight size={32} strokeWidth={2.5} />
              </div>
            </div>

            <p className="text-sm">{treatment.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
