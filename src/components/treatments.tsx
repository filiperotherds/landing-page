import { url } from "@/lib/data";
import { WhatsappSolid } from "iconoir-react";
import Link from "next/link";
import { Treatments as TreatmentsData } from "@/lib/data";

export default function Treatments() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-8 gap-8">
      <div className="relative w-full flex flex-col items-start gap-4">
        <div className="w-full flex flex-row items-center justify-center gap-4">
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

          <div className="w-full h-28 flex flex-col justify-between bg-[#e3e8ec] rounded-2xl p-4">
            <h1 className="text-xl font-semibold">Nossos Tratamentos</h1>

            <p className="text-xs">
              Encontre os tratamentos que já ajudaram milhares de famílias.
            </p>
          </div>
        </div>

        {TreatmentsData.map((treatment) => (
          <div
            key={treatment.id}
            className="w-full flex flex-col items-start justify-between bg-[#e3e8ec] rounded-xl p-4 gap-8"
          >
            <h1 className="text-4xl font-sans font-extralight">
              {treatment.h1}
            </h1>

            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold">{treatment.h2}</h2>

              <p className="text-sm">{treatment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
