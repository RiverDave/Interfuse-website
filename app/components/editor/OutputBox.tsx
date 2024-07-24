import { BtnProps } from "./RunBtn"

export default function OutputBox({ content }: BtnProps) {


  return (

    <pre>
      {content}
    </pre>

  )
}
