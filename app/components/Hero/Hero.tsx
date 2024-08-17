"use client";

import React from "react";
import TitleArea from "./TitleArea";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Hero() {
  return (
    <div className="flex bg-cover bg-center bg-hero-pattern bg-no-repeat inset-0 w-full h-screen sm:justify-center sm:align-middle">
      <div className="flex z-10 justify-start mt-16 p-8 sm:justify-center md:justify-start lg:justify-start md:p-16 lg:p-24">
        <TitleArea />
      </div>
    </div>
  );
}
