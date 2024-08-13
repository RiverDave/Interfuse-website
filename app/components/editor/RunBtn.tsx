import { Button } from "@nextui-org/react";
import { useEditorContext } from "./EditorContext";
import { FaPlay } from "react-icons/fa";

export default function RunBtn() {
  const {
    textData,
    setOutputData,
    loading,
    setLoading,
    setLLVMIRData: setLlvmIRData,
  } = useEditorContext();

  const handleRun = async () => {
    try {
      if (!textData || !setOutputData) {
        return;
      }

      //Text is being sent as formdata since sending plain text
      //strips \n characters from stream
      const formData = new FormData();
      formData.append("file", textData);

      setLoading(true);
      const response = await fetch("/api/runsrc/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to run source code ");
      }

      const data = await response.json();
      console.log(data);
      setOutputData(data.message);

      if (data.asm) {
        setLlvmIRData(data.asm);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      isLoading={loading}
      onClick={handleRun}
      color="primary"
      startContent={<FaPlay />}
    >
      Run
    </Button>
  );
}
