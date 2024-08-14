"use client";

import {
  EDITOR_VALUE_PLACEHOLDER,
  OUTPUT_VALUE_PLACEHOLDER,
} from "@/app/constants/constants";
import { createContext, useContext, useState, ReactNode } from "react";
import {
  OUTPUT_LLVM_IR_ERROR_PLACEHOLDER,
  OUTPUT_LLVM_IR_INITIAL_PLACEHOLDER,
} from "@/app/constants/constants";

interface IEditorContext {
  textData: string;
  outputData: string;
  loading: boolean;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; //setState
  setOutputData: React.Dispatch<React.SetStateAction<string>>;
  llvmIRData: string;
  setLLVMIRData: React.Dispatch<React.SetStateAction<string>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
}

export const EditorContext = createContext<IEditorContext | null>(null);

export function useEditorContext(): IEditorContext {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(
      "useEditorContext must be used within a EditorContextProvider",
    );
  }
  return context;
}

export const EditorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [textData, setTextData] = useState<string>(EDITOR_VALUE_PLACEHOLDER);
  const [loading, setLoading] = useState<boolean>(false);
  const [outputData, setOutputData] = useState<string>(
    OUTPUT_VALUE_PLACEHOLDER,
  );
  const [llvmIRData, setLLVMIRData] = useState<string>(
    OUTPUT_LLVM_IR_INITIAL_PLACEHOLDER,
  );
  const [success, setSuccess] = useState<boolean>(true);

  return (
    <EditorContext.Provider
      value={{
        textData,
        outputData,
        loading,
        setTextData,
        setLoading,
        setOutputData,
        llvmIRData,
        setLLVMIRData,
        setSuccess,
        success,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
