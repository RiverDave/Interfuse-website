import { useEditorContext } from "./EditorContext";

export default function OutputBox() {
  const { outputData } = useEditorContext();

  return (
    <div className="p-2 border bg-background border-foreground text-foreground  h-96 overflow-auto overflow-wrap break-words">
      <pre className=" text-wrap text-sm">{outputData}</pre>
    </div>
  );
}
