import React from "react";
import RunBtn from "./RunBtn";
import SettingBtn from "./SettingsBtn";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/react";
import { useEditorContext } from "./EditorContext";

export default function ButtonsBox() {
  const { textData, setOutputData, loading, setLoading, llvmIRData } =
    useEditorContext();

  //temporal for now
  function handleSetLLVMIR() {
    if (llvmIRData) {
      setOutputData(llvmIRData);
    }
  }

  return (
    <div className="flex justify-center px-10 my-10 ">
      <RunBtn />
      <Spacer x={2} />
      <SettingBtn />
      <Button color="primary" onClick={handleSetLLVMIR}>
        LLVM
      </Button>
    </div>
  );
}
