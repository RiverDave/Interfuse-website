"use client";

import InputArea from "../components/editor/InputBox";
import { EditorContextProvider } from "../components/editor/EditorContext";
import OutputArea from "../components/editor/Output/OutputArea";
import IntroCard from "../components/editor/Input/InputBox";
import SettingsBox from "../components/editor/Buttons/SettingsBox";

export default function Editor() {
  return (
    <EditorContextProvider>
      <main className=" p-3 flex justify-end max-h-screen">
        <IntroCard />

        <div className="w-32 ml-10 flex-auto flex-shrink  ">
          <InputArea />

          <div>
            <SettingsBox />
          </div>

          <OutputArea />
        </div>
      </main>
    </EditorContextProvider>
  );
}
