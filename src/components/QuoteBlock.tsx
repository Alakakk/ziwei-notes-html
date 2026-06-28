type QuoteBlockProps = {
  quote: string;
};

export function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <section className="memory-quote" data-scene="closing-quote">
      <span>速记一句</span>
      <blockquote>{quote}</blockquote>
    </section>
  );
}
