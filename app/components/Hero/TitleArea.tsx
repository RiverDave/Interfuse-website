import React from "react";
import { Button, Link, Spacer } from "@nextui-org/react";

const SpacerSize = 10;

export default function TitleArea() {
  return (
    <div className=" p-16 flex flex-col w-1/2">
      <h1 className="text-8xl font-sans">Interfuse Language</h1>

      <Spacer y={SpacerSize} />

      <div className="flex text-wrap">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <Spacer y={SpacerSize} />

      <div className="flex justify-center">
        <Button
          as={Link}
          className="bg-gradient-to-l from-red-600 to-black text-white shadow-red-600 w-auto"
          size="lg"
          variant="shadow"
          href="/editor"
        >
          Try out now
        </Button>
      </div>
    </div>
  );
}
