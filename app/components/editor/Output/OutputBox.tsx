import classNames from "classnames";
import { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";

export default function OutputBox({
  textData,
  success,
}: {
  textData: string;
  success: boolean;
}) {
  return (
    <div className="p-2 border rounded-md bg-background border-foreground text-foreground  h-96 overflow-auto overflow-wrap break-words">
      <Textarea
        isDisabled
        isReadOnly
        isMultiline
        variant="flat"
        color={success ? "default" : "danger"}
        className={classNames("text-wrap text-sm", {
          "text-foreground-50 opacity-100 font-mono rounded-sm": success,
          "text-red-200 opacity-100 font-mono  rounded-sm": !success,
        })}
        radius="sm"
        value={textData}
      />
    </div>
  );
}
