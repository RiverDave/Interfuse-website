import React from "react";
import { Button, Link, Spacer } from "@nextui-org/react";

const SpacerSize = 10;

export default function TitleArea() {
  return (
    <div className="p-4 sm:p-8 md:p-16 flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold">
        Interfuse Language
      </h1>

      <Spacer y={SpacerSize} />

      <div className="flex text-wrap w-full">
        <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl">
          A modern programming language inspired by C. It blends familiar syntax
          with LLVM-powered performance for efficient, fun coding.
        </p>
      </div>

      <Spacer y={SpacerSize} />

      <div className="flex">
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
