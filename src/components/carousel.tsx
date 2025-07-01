"use client";
import Logo1 from "./logos/bradesco-logo";
import Logo2 from "./logos/porto-logo";
import Logo3 from "./logos/unimed-logo";

export function Carousel() {
  return (
    <div className="w-full max-w-5xl">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-300 to-transparent z-10"></div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-300 to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="logos-slide flex items-center gap-16 whitespace-nowrap">
              {/* Grupo Original de Logos */}
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo1 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo2 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo3 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo1 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo2 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo3 className="text-zinc-500 w-36 h-12" />
              </div>

              {/* Cópia dos Logos para o loop perfeito */}
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo1 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo2 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo3 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo1 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo2 className="text-zinc-500 w-36 h-12" />
              </div>
              <div className="w-36 h-12 relative flex-shrink-0">
                <Logo3 className="text-zinc-500 w-36 h-12" />
              </div>
            </div>
          </div>

          <style jsx>{`
            .logos-slide {
              animation: slide 15s linear infinite;
            }

            @keyframes slide {
              100% {
                transform: translateX(0);
              }
              0% {
                transform: translateX(calc(-100% * 1.5));
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}