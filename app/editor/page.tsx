'use client'

import { useState } from "react";
import RunBtn from "../components/RunBtn";
import OutputBox from "../components/OutputBox";
import InputArea from "../components/InputBox";

export default function Editor() {



  const dummyCode = 'print("Hello, World!")'
  const dummyOutput = 'Hello, World!'

  const [inputValue, setInputValue] = useState<string>(dummyCode)
  const [outputValue, setOutputValue] = useState<string>(dummyOutput)

  return (
    <div className="flex justify-center">

      <div className="flex-col justify-center align-middle">
        <InputArea key={0} content={inputValue} setUserInput={setInputValue}/> {/* Bad Practice, dont pass setter! */}

        <div className="flex justify-center">
          <RunBtn key={1} content={inputValue} setOutputBox={setOutputValue} />
        </div>

        <div className="border border-black h-48">
          <OutputBox key={2} content={outputValue} setOutputBox={undefined}/>

        </div>
      </div>




    </div>

  );
}

