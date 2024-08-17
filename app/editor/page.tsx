"use client";

import InputArea from "../components/editor/InputBox";
import { EditorContextProvider } from "../components/editor/EditorContext";
import OutputArea from "../components/editor/Output/OutputArea";
import ButtonBox from "../components/editor/Buttons/ButtonBox";
import Disclaimer from "../components/editor/disclaimer/Disclaimer";
import { useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

export default function Editor() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <EditorContextProvider>
      <main className="p-3 flex flex-col lg:flex-row h-screen">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-2 flex flex-col">
            <InputArea />
          </div>

          <ButtonBox />

          <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-2 flex flex-col">
            <OutputArea />
          </div>
        </div>
      </main>
      <Disclaimer isOpen={isOpen} onOpenChange={onOpenChange} />
    </EditorContextProvider>
  );
}
