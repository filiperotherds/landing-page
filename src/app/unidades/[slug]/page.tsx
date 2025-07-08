"use client";

import { Unidades } from "@/lib/data";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const unidade = Unidades.find((u) => u.slug === slug);

  if (!unidade) {
    notFound();
  }

  return <div>Unidade: {unidade?.city}</div>;
}
