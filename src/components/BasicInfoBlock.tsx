import type { BasicTag } from "../data/stars";
import { ContentBlock } from "./ContentBlock";

type BasicInfoBlockProps = {
  tags: BasicTag[];
};

export function BasicInfoBlock({ tags }: BasicInfoBlockProps) {
  return (
    <ContentBlock eyebrow="Basic" title="基础标签" scene="basic-tags">
      <dl className="basic-tags">
        {tags.map((tag) => (
          <div className="basic-tag" key={tag.label}>
            <dt>{tag.label}</dt>
            <dd>{tag.value}</dd>
          </div>
        ))}
      </dl>
    </ContentBlock>
  );
}
