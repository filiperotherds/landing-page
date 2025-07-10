import Image from "next/image";
import { Unidade } from "@/lib/data";
import Link from "next/link";
import { HeartSolid, StarSolid } from "iconoir-react";

export default function CardUnit({ unidade }: { unidade: Unidade }) {
  return (
    <Link
      href={`/unidades/${unidade.slug}`}
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
            <StarSolid className="text-yellow-500" width={10} height={10} />

            <span className="text-xs text-zinc-500">{unidade.rate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
