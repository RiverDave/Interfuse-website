import { useEditorContext } from "./EditorContext"

export default function OutputBox() {


  const { outputData } = useEditorContext()

  return (

    <div className="border border-black h-96 overflow-hidden overflow-wrap break-words">
      <pre className="text-sm">
        {outputData}
      </pre>
    </div>

  )
}
