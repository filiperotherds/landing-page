import { DeliveryTruck, Donate, FaceId } from "iconoir-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Feature() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#e3e8ec] p-8 gap-8">
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <FaceId
          className="text-zinc-500"
          width={38}
          height={38}
          strokeWidth={1.5}
        />

        <h1 className="font-sans text-zinc-800 font-semibold">
          Tratamento Individualizado
        </h1>

        <p className="text-[13px] text-zinc-700 text-center">
          Entendemos que cada pessoa é única. Por isso, o tratamento é 100%
          focado nas necessidades específicas do paciente, avaliando seu
          histórico de vida e saúde para criar um plano de recuperação mais
          eficaz e humano.
        </p>

        <Link
          href={"/tratamento-individualizado"}
          className="font-sans text-xs text-blue-600"
        >
          <div className="flex flex-row items-center justify-center gap-0.5">
            <span className="pb-[1px]">Saiba mais</span>

            <ChevronRight size={12} strokeWidth={2.5} />
          </div>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-3">
        <Donate
          className="text-zinc-500"
          width={38}
          height={38}
          strokeWidth={1.5}
        />

        <h1 className="font-sans text-zinc-800 font-semibold">
          Apoio Familiar
        </h1>

        <p className="text-[13px] text-zinc-700 text-center">
          A dependência química afeta toda a família. Oferecemos sessões de
          terapia e grupos de apoio para os familiares, fornecendo as
          ferramentas necessárias para entender o processo, curar as relações e
          ajudar na prevenção de recaídas.
        </p>

        <Link
          href={"/apoio-familiar"}
          className="font-sans text-xs text-blue-600"
        >
          <div className="flex flex-row items-center justify-center gap-0.5">
            <span className="pb-[1px]">Saiba mais</span>

            <ChevronRight size={12} strokeWidth={2.5} />
          </div>
        </Link>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-3">
        <DeliveryTruck
          className="text-zinc-500"
          width={38}
          height={38}
          strokeWidth={1.5}
        />

        <h1 className="font-sans text-zinc-800 font-semibold">
          Suporte para Remoção 24h
        </h1>

        <p className="text-[13px] text-zinc-700 text-center">
          Em momentos de crise, quando o diálogo não é mais possível, contamos
          com equipes parceiras treinadas para uma abordagem segura, rápida e
          humanizada, garantindo a integridade e o respeito ao paciente durante
          o transporte até a clínica.
        </p>

        <Link
          href={"/tratamento-individualizado"}
          className="font-sans text-xs text-blue-600"
        >
          <div className="flex flex-row items-center justify-center gap-0.5">
            <span className="pb-[1px]">Saiba mais</span>

            <ChevronRight size={12} strokeWidth={2.5} />
          </div>
        </Link>
      </div>
    </section>
  );
}
