'use client'

import { useState } from "react";
import RunBtn from "../components/editor/RunBtn";
import OutputBox from "../components/editor/OutputBox";
import InputArea from "../components/editor/InputBox";

export default function Editor() {



  const [inputValue, setInputValue] = useState<string>('')
  const [outputValue, setOutputValue] = useState<string>('')

  //Could assess the bad sharing state by enrolling these in a context provider 
  return (
    <div className="flex-col justify-center">

      <div className="justify-center align-middle">
        <InputArea key={0} content={inputValue} setUserInput={setInputValue} /> {/* Bad Practice, dont pass setter! */}
      </div>

      <div className="flex justify-center">
        <RunBtn key={1} content={inputValue} setOutputBox={setOutputValue} />
      </div>

      <div className="border border-black h-48">
        <OutputBox key={2} content={outputValue} setOutputBox={undefined} />
      </div>

    </div>
  );
}

