import { routeHref } from "../../utils/routes";

type SectionCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export function SectionCard({
  number,
  title,
  description,
  href,
}: SectionCardProps) {
  return (
    <a className="site-section-card" href={routeHref(href)}>
      <div className="site-section-heading">
        <span className="site-number-badge">{number}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </a>
  );
}
