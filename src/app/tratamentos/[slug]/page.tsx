"use client";

import { Treatments } from "@/lib/data";
import { use } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import { BrainCircuit, ChevronLeft } from "lucide-react";
import FixedButton from "@/components/fixed-button";
import { WhatsappSolid } from "iconoir-react";
import Footer from "@/components/footer";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const tratamento = Treatments.find((u) => u.slug === slug);

  if (!tratamento) {
    notFound();
  }

  const url = `https://wa.me/5518996698064?text=${encodeURI(
    `Olá, estou buscando ajuda com o Grupo AF e gostaria de saber mais sobre o tratamento de ${tratamento.h1}!`
  )}`;

  return (
    <div className="w-screen h-full flex flex-col items-start justify-start sm:hidden font-outfit scroll-smooth">
      <FixedButton />

      {/* Header Section */}
      <Header />

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

      <div className="w-full flex flex-col items-start justify-start gap-8 px-8 pb-8">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-3xl font-bold max-w-3/4">{tratamento.h1}</h1>

          <p>{tratamento.description}</p>
        </div>

        <Link
          href={url}
          className="w-full h-14 flex flex-row items-center justify-center gap-2 bg-orange-500 text-white rounded-2xl"
        >
          <WhatsappSolid width={20} height={20} />

          <span className="font-semibold">Saiba mais</span>
        </Link>

        <div className="w-full flex flex-col items-start justify-between bg-[#e3e8ec] rounded-3xl p-4 gap-8">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-xl font-bold max-w-3/4">
              {tratamento.educational.title}
            </h1>

            <div className="p-1.5 rounded-xl bg-[#f5faff]">
              <BrainCircuit size={32} strokeWidth={2.5} />
            </div>
          </div>

          <p className="text-sm">{tratamento.educational.about}</p>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-8">
          <h1 className="text-xl font-bold">Conheça os Sintomas</h1>

          {tratamento.symptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-start gap-2"
            >
              <span className="font-mono font-semibold">0{index + 1}</span>
              <span className=" text-gray-500">{symptom}</span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-3xl font-bold max-w-3/4">O Tratamento</h1>

          <p>
            Conhecendo todos os processos de tratamento para {tratamento.h1}.
          </p>
        </div>

        {tratamento.treatment.map((step) => (
          <div key={step.id} className="w-full flex flex-col items-start justify-between bg-[#e3e8ec] rounded-3xl p-4 gap-8">
            <div className="w-full flex flex-row items-start justify-between">
              <h1 className="text-xl font-bold max-w-3/4">
                {step.title}
              </h1>

              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#f5faff]">
                <span className="font-mono text-2xl font-medium">0{step.id + 1}</span>
              </div>
            </div>

            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
