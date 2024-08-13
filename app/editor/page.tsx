"use client";

import RunBtn from "../components/editor/RunBtn";
import OutputBox from "../components/editor/OutputBox";
import InputArea from "../components/editor/InputBox";
import { EditorContextProvider } from "../components/editor/EditorContext";
import SettingsBox from "../components/editor/SettingsBox";

export default function Editor() {
  return (
    <EditorContextProvider>
      <main className=" p-3 flex justify-end">
        {/* Introduction box */}
        <div className="p-2 w-32 text-foreground flex-auto flex-shrink border-zinc-800 border ">
          <h1> INSERT MARKDOWN HERE </h1>
        </div>

        {/* EDITOR BOX */}
        <div className="w-32 ml-10 flex-auto flex-shrink  ">
          <InputArea />
          <SettingsBox />
          <OutputBox />
        </div>
      </main>
    </EditorContextProvider>
  );
}
