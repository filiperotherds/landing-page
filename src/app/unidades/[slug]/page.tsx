import { Unidades } from "@/lib/data";
import { notFound } from "next/navigation";
import UnidadeClientPage from "@/components/unidade-client-page";

import fs from "fs";
import path from "path";

interface PageProps {
  params: {
    slug: string;
  };
}

const getImagesForUnidade = (slug: string): string[] => {
  const imageDirectory = path.join(process.cwd(), "public", "unidades", slug);
  try {
    const imageFiles = fs.readdirSync(imageDirectory);
    return imageFiles
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/unidades/${slug}/${file}`);
  } catch (error) {
    console.error(`Diretório de imagens não encontrado para a unidade "${slug}": `, error);
    return [];
  }
};

export default function Page({ params }: PageProps) {
  const { slug } = params;
  const unidade = Unidades.find((u) => u.slug === slug);

  if (!unidade) {
    notFound();
  }

  const images = getImagesForUnidade(slug);
  const url = `https://wa.me/5518996698064?text=${encodeURI(
    `Olá, estou buscando ajuda com o Grupo AF e gostaria de saber mais sobre a unidade de ${unidade.city}!`
  )}`;

  return <UnidadeClientPage unidade={unidade} images={images} whatsAppUrl={url} />;
}