import { Button } from "@nextui-org/react";
import { useEditorContext } from "../EditorContext";
import { FaPlay } from "react-icons/fa";
import { OUTPUT_LLVM_IR_ERROR_PLACEHOLDER } from "@/app/constants/constants";

export default function RunBtn() {
  const {
    textData,
    setOutputData,
    loading,
    setLoading,
    setLLVMIRData,
    setSuccess,
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

      console.log(data);

      if (data.asm && data.isErrorCritical === false) {
        setLLVMIRData(data.asm);
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      variant="shadow"
      isLoading={loading}
      onClick={handleRun}
      startContent={<FaPlay />}
      className="w-full"
    >
      Run
    </Button>
  );
}
