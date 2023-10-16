import showdown from "showdown";
import { useState } from "react";
import { OpenAIRequestForm } from "@/components/organisms/OpenAIRequestForm";

const convertToHtml = (markdown: String) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);
  return html;
};

export default function Index() {
  const [markdown, setMarkdown] = useState<String>("");
  const handleAddMarkdown = (markdownAdding: String) => {
    setMarkdown(markdown + "\n" + markdownAdding);
  };

  return (
    <div>
      <OpenAIRequestForm onAddMarkdown={handleAddMarkdown}></OpenAIRequestForm>
      <div dangerouslySetInnerHTML={{ __html: convertToHtml(markdown) }}></div>
    </div>
  );
}
