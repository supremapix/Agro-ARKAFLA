"use client";

import type { CSSProperties } from "react";
import { Heart } from "lucide-react";

export interface SupremaCreditProps {
  /** Inherits the footer color unless overridden. Ensure readable contrast. */
  color?: CSSProperties["color"];
  className?: string;
}

export function SupremaCredit({ color, className = "" }: SupremaCreditProps) {
  return (
    <div
      className={`mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-2 rounded-full border border-current bg-white/5 px-4 py-1 text-center text-xs leading-relaxed ${className}`}
      style={{ color, borderColor: "color-mix(in srgb, currentColor 20%, transparent)" }}
    >
      <span>Desenvolvido com</span>
      <Heart
        className="h-3.5 w-3.5 shrink-0 fill-current motion-safe:animate-pulse motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span className="sr-only">carinho</span>
      <span>por</span>
      <a
        href="https://supremasite.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 max-w-full flex-wrap items-center justify-center gap-2 rounded px-1 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <img
          src="https://img.supremamidia.com/suprema-img.png"
          alt=""
          height={18}
          loading="lazy"
          decoding="async"
          className="h-[18px] w-auto max-w-full shrink-0 object-contain"
        />
        <span>Suprema Sites Express</span>
        <span className="sr-only"> (abre em uma nova aba)</span>
      </a>
    </div>
  );
}
