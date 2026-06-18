import { primaryNavigation } from "../../data/navigation";

type PrimaryNavProps = {
  activePath?: string;
};

export function PrimaryNav({ activePath = "/" }: PrimaryNavProps) {
  return (
    <nav className="primary-nav" aria-label="主导航">
      {primaryNavigation.map((item) => (
        <a
          className={item.href === activePath ? "is-active" : ""}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
