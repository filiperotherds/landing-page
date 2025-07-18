import { Squircle } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <Squircle size={64} className="z-0 absolute" />
          <span className="relative font-dm-serif text-3xl font-bold tracking-tighter">
            AF
          </span>
        </div>

        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold">Grupo AF</span>
          <span className="text-orange-500 font-medium">
            Clínicas de Reabilitação
          </span>
        </div>
      </div>

      <h1 className="text-4xl font-bold">Página em Construção</h1>

      <p>Você ainda pode visualizar nosso site pelo seu dispositivo celular.</p>
    </div>
  );
}
