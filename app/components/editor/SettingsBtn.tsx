import { Button } from "@nextui-org/react";
import { IoSettingsOutline } from "react-icons/io5";
import { useEditorContext } from "./EditorContext";

export default function SettingBtn() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="secondary" startContent={<IoSettingsOutline />}>
        Settings
      </Button>
    </div>
  );
}
