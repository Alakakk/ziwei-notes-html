import type { ReactNode } from "react";

type ContentBlockProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  scene?: string;
};

export function ContentBlock({
  eyebrow,
  title,
  children,
  className = "",
  scene,
}: ContentBlockProps) {
  return (
    <section className={`content-block ${className}`} data-scene={scene}>
      <div className="block-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
