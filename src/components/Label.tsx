import type { ReactNode } from "react";

// Scoresheet-style label: a small ✕ mark and mono uppercase text.
export default function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mono flex items-center gap-2 ${className}`}>
      <span aria-hidden="true">✕</span>
      {children}
    </p>
  );
}
