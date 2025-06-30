import Link from "next/link";
import { Whatsapp } from 'iconoir-react';

export default function Home() {
  return (
    <div className="font-outfit w-screen h-screen bg-[#f5faff] text-blue-950">
      <header className="h-20 w-full flex items-center px-8">Logo</header>
      <section className="w-full flex flex-col items-start px-8 gap-8">
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-2xl">
            <span className="font-bold"> Clínicas Verificadas </span> com <br />
            acesso imediato, suporte 24h <br />e garantia de qualidade!
          </p>
          <p className="text-base text-zinc-500">
            A ajuda que sua família precisa, 24h por dia. <br />
            Encontre o recomeço em clínicas de reabilitação de confiança com o
            nosso apoio especializado.
          </p>
        </div>
        <Link
          href="https://wa.me/5518996698064?text=Ol%C3%A1%2C%20vim%20pela%20Central%20Rein%C3%ADcio%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%21"
          target="_blank"
          className="h-14 pl-6 pr-2 gap-6 flex flex-row items-center justify-between rounded-2xl bg-orange-500"
        >
          <span className="text-white font-medium">Entre em Contato!</span>
          <div className="w-10 h-10 flex items-center justify-center bg-blue-950 rounded-lg">
            <Whatsapp color="#ffffff" width={20} height={20} strokeWidth={2}/>
          </div>
        </Link>
      </section>
      <section>recursos section</section>
      <section>unidades section</section>
      <section>benefícios section</section>
      <section>FAQ section</section>
      <footer>footer</footer>
    </div>
  );
}
