import showdown from "showdown";
import useEffect, { useState } from "react";

export default function Index() {
  const { sendsMessage, setSendsMessage } = useState<boolean>(false);
  const converter = new showdown.Converter();
  const text = "# hello, markdown!";
  const html = converter.makeHtml(text);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
