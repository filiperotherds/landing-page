import Link from "next/link";
import Image from "next/image";

import {
  DeliveryTruck,
  Donate,
  FaceId,
  HeartSolid,
  StarSolid,
  Whatsapp,
  WhatsappSolid,
} from "iconoir-react";
import { ChevronRight } from "lucide-react";

import { Carousel } from "@/components/carousel";
import { Units } from "@/lib/units";

export default function Home() {
  function CreateFakeNumber() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();

    const numeroBase = (dia - 1) % 6;

    const numeroFinal = numeroBase + 4;

    return numeroFinal;
  }

  const fakeNumber = CreateFakeNumber();

  const url = `https://wa.me/5518996698064?text=${encodeURI(
    "Olá, gostaria de saber mais sobre os serviços do Grupo AF!"
  )}`;

  const unidadesSaoPaulo = Units.SaoPaulo;

  return (
    <div className="font-outfit w-screen h-full scroll-smooth bg-[#f5faff] text-blue-950">
      {/* Fixed Whatsapp Button */}
      <Link
        href={url}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-md"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <WhatsappSolid color="#ffffff" width={28} height={28} strokeWidth={2} />
      </Link>

      <header className="w-full flex flex-row items-center gap-2 p-8">
        <h1 className="flex flex-col items-start justify-start leading-2">
          <span className="text-3xl font-extralight tracking-tighter">
            Grupo AF
          </span>
        </h1>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-start px-8 gap-8">
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-2xl leading-8">
            <span className="font-bold"> Clínicas Verificadas </span> com <br />
            acesso imediato, suporte 24h <br />e garantia de qualidade!
          </p>
          <p className="text-base text-zinc-500">
            A ajuda que sua família precisa, 24h por dia. <br />
            Encontre o recomeço em clínicas de reabilitação de confiança com o
            nosso apoio especializado.
          </p>
        </div>

        <div className="h-7 px-2 flex items-center justify-center border border-teal-600 rounded-lg">
          <span className="text-sm text-teal-600">
            *Últimas 0{fakeNumber} vagas
          </span>
        </div>

        <div className="relative group w-fit">
          <div className="absolute inset-0 bg-transparent border-2 border-teal-600 rounded-2xl translate-y-2 translate-x-2"></div>

          <Link
            href={url}
            target="_blank"
            className="relative z-10 h-14 px-6 gap-3 flex flex-row items-center justify-between rounded-2xl bg-orange-500"
          >
            <span className="text-white font-medium">Entre em Contato!</span>

            <WhatsappSolid color="#ffffff" width={22} height={22} strokeWidth={2} />
          </Link>
        </div>

        <div className="relative w-full aspect-video">
          <Image
            src={"/hero-image.png"}
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="h-22 w-full flex items-center justify-center bg-[#e3e8ec]">
        <Carousel />
      </section>

      {/* Units Section */}
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
            {unidadesSaoPaulo.map((unidade) => (
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
            {unidadesSaoPaulo.map((unidade) => (
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

      {/* Feature Section */}
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
            ferramentas necessárias para entender o processo, curar as relações
            e ajudar na prevenção de recaídas.
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
            humanizada, garantindo a integridade e o respeito ao paciente
            durante o transporte até a clínica.
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

      {/* Tratamentos Section */}
      <section className="w-full flex flex-col items-center justify-center p-8 gap-8">
        <h1 className="text-center text-2xl">
          Conheça os tratamentos <br /> oferecidos pelo{" "}
          <span className="font-bold">Grupo AF</span>
        </h1>

        <div className="relative group w-fit">
          <div className="absolute inset-0 bg-transparent border-2 border-teal-600 rounded-2xl translate-y-2 translate-x-2"></div>

          <Link
            href={url}
            target="_blank"
            className="relative z-10 h-14 px-6 gap-3 flex flex-row items-center justify-between rounded-2xl bg-orange-500"
          >
            <span className="text-white font-medium">Entre em Contato!</span>

            <WhatsappSolid color="#ffffff" width={22} height={22} strokeWidth={2} />
          </Link>
        </div>

        <div className="relative w-full flex flex-col items-start ">

        </div>
      </section>

      {/* FAQ Section */}
      <section>FAQ section</section>
      {/* Footer Section */}
      <footer>footer</footer>
    </div>
  );
}
