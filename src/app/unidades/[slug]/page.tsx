import { Unidades } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return Unidades.map((unidade) => ({
    slug: unidade.slug,
  }));
}

function getUnidadeBySlug(slug: string) {
  return Unidades.find((unidade) => unidade.slug === slug);
}

export default function PaginaUnidade({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const unidade = getUnidadeBySlug(slug);

  if (!unidade) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8 font-outfit text-blue-950">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={unidade.displayPhoto}
          alt={`Foto da ${unidade.city}`}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-2">{unidade.city}</h1>
          <p className="text-xl text-gray-600 mb-4">{unidade.city}</p>
        </div>
      </div>
    </div>
  );
}
