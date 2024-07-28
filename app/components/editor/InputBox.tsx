import { useState, useEffect, useContext } from "react"
import CodeMirror from '@uiw/react-codemirror'
import {  langs } from '@uiw/codemirror-extensions-langs';
import { useEditorContext } from "./EditorContext";
import { EDITOR_VALUE_PLACEHOLDER } from '@/app/constants/constants';

export default function InputArea() {

  const { setTextData, textData } = useEditorContext()
  
  useEffect(() => {
    //Placeholder for the editor
    setTextData(EDITOR_VALUE_PLACEHOLDER)
  }, [])
  
  const handleChange = (value: string) => {
    setTextData(value)
  }


  return (
    <CodeMirror
      value={textData}
      height="250px"
      basicSetup={{
        
        foldGutter: false,
        dropCursor: false,
        allowMultipleSelections: false,
        indentOnInput: false,
        history: true,
        autocompletion: false,
        lintKeymap: true,
      }}
      extensions={[langs.javascript().extension]}

      onChange={(value) => handleChange(value)}
    />
  )


}

