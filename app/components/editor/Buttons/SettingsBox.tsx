import React from "react";
import RunBtn from "./RunBtn";
import SettingBtn from "./SettingsBtn";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/react";
import { useEditorContext } from "../EditorContext";
import { Tabs, Tab } from "@nextui-org/react";

export default function ButtonsBox() {
  const { textData, setOutputData, loading, setLoading, llvmIRData } =
    useEditorContext();

  return (
    <div className="flex justify-center px-10 my-10  ">
      <RunBtn />
    </div>
  );
}
