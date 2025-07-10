import { Squircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
      <header className="w-full p-8">
        <Link href={'/'} className="flex flex-row items-center justify-start gap-2">
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
        </Link>
      </header>
    );
}