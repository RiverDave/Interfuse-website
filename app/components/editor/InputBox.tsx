import { useState, useEffect, useContext, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useEditorContext } from "./EditorContext";
import { EDITOR_VALUE_PLACEHOLDER } from "@/app/constants/constants";
import { Card, CardBody } from "@nextui-org/react";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { useTheme } from "next-themes";

export default function InputArea() {
  const { setTextData, textData } = useEditorContext();
  const { theme } = useTheme();

  // useEffect(() => {
  //   //Placeholder for the editor
  // }, []);

  const handleChange = (value: string) => {
    setTextData(value);
  };

  return (
    <div className="mt-3">
      <Card isBlurred className="p-3 h-full ">
        <CodeMirror
          value={textData}
          height="350px"
          className="border rounded-lg border-foreground"
          theme={theme === "dark" ? dracula : eclipse}
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
    </div>
  );
}
