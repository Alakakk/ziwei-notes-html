type TopBarProps = {
  brand: string;
  category: string;
  pageLabel: string;
};

export function TopBar({ brand, category, pageLabel }: TopBarProps) {
  return (
    <header className="top-bar" data-scene="intro">
      <div className="top-bar-left">
        <span className="brand-pill">{brand}</span>
        <span className="category-label">{category}</span>
      </div>
      <div className="page-label">{pageLabel}</div>
    </header>
  );
}
