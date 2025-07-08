import Image from "next/image";
import Link from "next/link";
import { WhatsappSolid } from "iconoir-react";
import { fakeNumber, url } from "@/lib/data";

export default function Hero() {
  return (
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
          *Últimas 0{fakeNumber()} vagas
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

          <WhatsappSolid
            color="#ffffff"
            width={22}
            height={22}
            strokeWidth={2}
          />
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
  );
}
