import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function IntroCard() {
  const [md, setMd] = useState<string | null>(null);

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch("/api/runsrc/gathermd", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to run source code ");
        }

        const text = await response.json();
        console.log(text);
        setMd(text.data);
      } catch (error: any) {
        console.error(error);
      }
    };

    handleData();
    //fetch local markdown data
  }, []);

  return (
    <div className="p-2 w-32 text-foreground h-full flex-auto flex-shrink max-h-screen text-wrap overflow-y-auto">
      <Card isBlurred className="p-3 h-full ">
        <div className="border rounded-md border-foreground h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="size-50">Introduction</p>
          </CardHeader>
          <CardBody>
            {md && (
              <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
                {md}
              </Markdown>
            )}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
