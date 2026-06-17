type TitleBandProps = {
  title: string;
  topic: string;
};

export function TitleBand({ title, topic }: TitleBandProps) {
  return (
    <section className="title-band" data-scene="intro">
      <h1>{title}</h1>
      <p>{topic}</p>
    </section>
  );
}
