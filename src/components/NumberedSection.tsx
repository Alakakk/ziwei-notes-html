import type { ReactNode } from "react";

type NumberedSectionProps = {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
  scene?: string;
};

export function NumberedSection({
  number,
  title,
  children,
  className = "",
  scene,
}: NumberedSectionProps) {
  return (
    <section
      className={`numbered-section ${className}`}
      data-scene={scene}
      id={scene}
    >
      <div className="section-heading">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
