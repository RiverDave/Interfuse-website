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
    <div className="flex-grow ">
      <Tabs aria-label="Output" size="lg" className="flex-grow">
        <Tab key="photos" title="Output">
          <Card className="flex-grow">
            <CardBody title="OUTPUTBOX" className="flex-grow">
              <OutputBox textData={outputData} success={success} />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="IR" title="LLVM IR">
          <Card className="flex-grow">
            <CardBody className="flex-grow">
              <OutputBox textData={llvmIRData} success={success} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
