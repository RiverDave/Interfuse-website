'use client'

import RunBtn from "../components/editor/RunBtn";
import OutputBox from "../components/editor/OutputBox";
import InputArea from "../components/editor/InputBox";
import { EditorContextProvider } from "../components/editor/EditorContext";

export default function Editor() {

  return (
    <EditorContextProvider>
      <main className="flex justify-end">

        {/* Introduction box */}
        <div className="w-32 flex-auto flex-shrink border-black border ">
          <h1> INSERT INTRODUCTION TO THE LANGUAGE</h1>
        </div>

        {/* EDITOR BOX */}
        <div className="w-32 flex-auto flex-shrink border-black border   ">
          <InputArea />

          <div className="flex justify-center ">
            <RunBtn />
          </div>

          <OutputBox />
        </div>




      </main>
    </EditorContextProvider>
  );
}

