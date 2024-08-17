import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Textarea,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";

export default function IntroCard() {
  const [md, setMd] = useState<string | null>(
    ` # Introduction
    This is a markdown previewer, where you can write markdown and see the output in real time.
                                                
                                              `,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    // handleData();
    //fetch local markdown data
  }, []);

  return (
    <div className="p-2 w-32 text-foreground h-full flex-auto flex-shrink max-h-screen overflow-y-auto">
      <Card isBlurred className="p-3 h-full">
        <div className="border rounded-md border-foreground h-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h1 className="size-50">Introduction</h1>
          </CardHeader>
          <CardBody>
            {!loading && md ? (
              <Markdown>{md}</Markdown>
            ) : (
              <CardBody>
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                  <Skeleton className="w-4/5 rounded-lg mt-4">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </div>
              </CardBody>
            )}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
