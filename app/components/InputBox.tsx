import { useState } from "react"
export interface TextProps {
  content: string,
  setUserInput: React.Dispatch<React.SetStateAction<string>>; //setState
}

export default function InputArea({ content, setUserInput }: TextProps, ) {

  
  const handleChange = (value : string) => {
    setUserInput(value)
  }


  return (
    <textarea className="justify-center border border-black h-64 resize-none" value={content}
    onChange={(e) => {
      handleChange(e.target.value)
    }
    }/>
  )


}

