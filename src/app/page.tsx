import Link from "next/link";
import { Whatsapp } from "iconoir-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-outfit w-screen h-screen bg-[#f5faff] text-blue-950">
      {/* Fixed Whatsapp Button */}
      <Link
        href="https://wa.me/5518996698064?text=Ol%C3%A1%2C%20vim%20pela%20Central%20Rein%C3%ADcio%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%21"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-teal-600 rounded-full flex items-center justify-center shadow-md"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <Whatsapp color="#ffffff" width={28} height={28} strokeWidth={2} />
      </Link>

      <header className="h-20 w-full flex items-center px-8">Logo</header>
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

        <div className="relative group w-fit">
          <div className="absolute inset-0 bg-transparent border-2 border-teal-600 rounded-2xl translate-y-2 translate-x-2"></div>

          <Link
            href="https://wa.me/5518996698064?text=Ol%C3%A1%2C%20vim%20pela%20Central%20Rein%C3%ADcio%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%21"
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
            src={"/hero-image.jpg"}
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </section>
      {/* Feature Section */}
      <section>recursos section</section>
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
