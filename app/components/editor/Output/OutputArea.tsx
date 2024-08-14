import React, { useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useEditorContext } from "../EditorContext";
import OutputBox from "./OutputBox";

export default function OutputArea() {
  const { outputData, llvmIRData, success } = useEditorContext();

  useEffect(() => {
    console.log(success);
  }, [outputData, llvmIRData, success]);

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Output">
        <Tab key="photos" title="Output">
          <Card>
            <CardBody title="OUTPUTBOX">
              <OutputBox textData={outputData} success={success} />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="IR" title="LLVM IR">
          <Card>
            <CardBody>
              {/* Should be changed as Compilation finishes */}
              <OutputBox textData={llvmIRData} success={success} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
