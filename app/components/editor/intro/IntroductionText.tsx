import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = "This ~is not~ strikethrough, but ~~this is~~!";

createRoot(document.body).render(
  <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
    {markdown}
  </Markdown>,
);
