import { useState, useEffect, useContext, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useEditorContext } from "./EditorContext";
import { EDITOR_VALUE_PLACEHOLDER } from "@/app/constants/constants";
import { Card, CardBody } from "@nextui-org/react";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { useTheme } from "next-themes";
import { githubDark } from "@uiw/codemirror-theme-github";

export default function InputArea() {
  const { setTextData, textData } = useEditorContext();
  const { theme } = useTheme();

  const handleChange = (value: string) => {
    setTextData(value);
  };

  return (
    <Card isBlurred className="p-3 flex-grow flex">
      <CodeMirror
        value={textData}
        height="100%"
        className="border rounded-lg border-foreground flex-grow text-medium"
        theme={theme === "dark" ? githubDark : eclipse}
        lang="rust"
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
          history: true,
          autocompletion: false,
          lintKeymap: true,
          tabSize: 2,
        }}
        extensions={[langs.javascript().extension]}
        onChange={(value) => handleChange(value)}
      />
    </Card>
  );
}
