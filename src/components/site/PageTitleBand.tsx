type PageTitleBandProps = {
  title: string;
  topic: string;
  description?: string;
};

export function PageTitleBand({ title, topic, description }: PageTitleBandProps) {
  return (
    <section className="page-title-band">
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <span>{topic}</span>
    </section>
  );
}
