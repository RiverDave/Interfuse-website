import React from "react";
import { Image } from "@nextui-org/react";
import TitleArea from "./TitleArea";

export default function Hero() {
  return (
    <div className="flex border-red-50">
      <div className="absolute bg-cover bg-center bg-hero-pattern bg-no-repeat inset-0 w-full h-full"></div>

      <div className="relative z-10 justify-start mt-16 p-4 md:p-8 lg:p-16">
        <TitleArea />
        {/* Add other content here */}
      </div>
    </div>
  );
}
