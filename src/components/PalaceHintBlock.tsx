import type { PalaceHint } from "../data/stars";
import { ContentBlock } from "./ContentBlock";

type PalaceHintBlockProps = {
  hints: PalaceHint[];
};

export function PalaceHintBlock({ hints }: PalaceHintBlockProps) {
  return (
    <ContentBlock eyebrow="Palace" title="落宫提示" scene="palace-hints">
      <ul className="palace-list">
        {hints.map((item) => (
          <li key={item.palace}>
            <span>{item.palace}</span>
            <p>{item.hint}</p>
          </li>
        ))}
      </ul>
    </ContentBlock>
  );
}
