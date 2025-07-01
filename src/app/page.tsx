import Link from "next/link";
import { Whatsapp } from "iconoir-react";
import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { Trees } from "lucide-react";

export default function Home() {
  const fakeNumber = function CreateFakeNumber() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();

    const numeroBase = (dia - 1) % 6;

    const numeroFinal = numeroBase + 4;

    return numeroFinal;
  };

  const url = `https://wa.me/5518996698064?text=${encodeURI('Olá, vim pela Central Reinício e gostaria de saber mais sobre os serviços!')}`

  return (
    <div className="font-outfit w-screen h-full scroll-smooth bg-[#f5faff] text-blue-950">
      {/* Fixed Whatsapp Button */}
      <Link
        href={url}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-md"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <Whatsapp color="#ffffff" width={28} height={28} strokeWidth={2} />
      </Link>

      <header className="w-full flex flex-row items-center gap-2 p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
            color="#ea580c"
          />
          <path d="M12 7.5V9" />
          <path d="M7.5 12H9" />
          <path d="M16.5 12H15" />
          <path d="M12 16.5V15" />
          <path d="m8 8 1.88 1.88" />
          <path d="M14.12 9.88 16 8" />
          <path d="m8 16 1.88-1.88" />
          <path d="M14.12 14.12 16 16" />
        </svg>

        <h1 className="flex flex-col items-start justify-start leading-2">
          <span className="font-semibold tracking-tight">Central</span>
          <span className="text-3xl font-extralight tracking-tighter">
            Reinício
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
            *Últimas 0{fakeNumber()} vagas
          </span>
        </div>

        <div className="relative group w-fit">
          <div className="absolute inset-0 bg-transparent border-2 border-teal-600 rounded-2xl translate-y-2 translate-x-2"></div>

          <Link
            href={url}
            target="_blank"
            className="relative z-10 h-14 pl-6 pr-2 gap-6 flex flex-row items-center justify-between rounded-2xl bg-orange-500"
          >
            <span className="text-white font-medium">Entre em Contato!</span>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-lg">
              <Whatsapp
                color="#ffffff"
                width={22}
                height={22}
                strokeWidth={2}
              />
            </div>
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
      <section className="h-22 w-full flex items-center justify-center bg-zinc-300">
        <Carousel />
      </section>
      {/* Feature Section */}
      <section className="w-full flex flex-col items-start justify-start p-8 gap-4">
        <h1 className="text-2xl">
          Porque escolher a <br />
          <span className="font-bold pl-8">Central Reinício</span>?
        </h1>
        <div className="w-full h-48 flex flex-col items-start justify-between border-b border-zinc-300">
          <div className="w-9 h-9 flex items-center justify-center rounded-tl-full rounded-r-full bg-zinc-200">
            <Trees className="text-orange-600" size={22}/>
          </div>
          <h1>
            Ambiente Natural
          </h1>
        </div>
      </section>
      {/* Units Section */}
      <section>unidades section</section>
      {/* Benefits Section */}
      <section>benefícios section</section>
      {/* FAQ Section */}
      <section>FAQ section</section>
      {/* Footer Section */}
      <footer>footer</footer>
    </div>
  );
}
