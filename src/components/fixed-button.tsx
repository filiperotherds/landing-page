import { url } from "@/lib/data";
import { WhatsappSolid } from "iconoir-react";
import Link from "next/link";

export default function FixedButton() {
  return (
    <Link
      href={url}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-md"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <WhatsappSolid color="#ffffff" width={28} height={28} strokeWidth={2} />
    </Link>
  );
}
