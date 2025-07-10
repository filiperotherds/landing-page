"use client";

import { Treatments } from "@/lib/data";
import { use } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import { ChevronLeft } from "lucide-react";

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

  return (
    <div className="flex flex-col items-start justify-start sm:hidden font-outfit w-screen h-full scroll-smooth">
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
    </div>
  );
}
