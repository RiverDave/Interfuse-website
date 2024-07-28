import { createContext, useContext, useState, ReactNode } from 'react';


interface IEditorContext {
  textData: string,
  outputData: string
  loading: boolean,
  setTextData: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>> //setState
  setOutputData: React.Dispatch<React.SetStateAction<string>>
}

export const EditorContext = createContext<IEditorContext | null>(null);

export function useEditorContext(): IEditorContext {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditorContext must be used within a EditorContextProvider')
  }
  return context
}


export const EditorContextProvider = ({ children }: { children: ReactNode }) => {
  const [textData, setTextData] = useState<string>('null')
  const [loading, setLoading] = useState<boolean>(false)
  const [outputData, setOutputData] = useState<string>('')

  return (
    <EditorContext.Provider value={{ textData, outputData, loading, setTextData, setLoading, setOutputData }}>
      {children}
    </EditorContext.Provider>


  )

}






