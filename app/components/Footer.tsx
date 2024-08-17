import Link from "next/link";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";

export default function PageFooter() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col justify-center items-center">
        <Link href="https://github.com/RiverDave/InterfuseLang">
          <BiLogoGithub
            color="#251A2D"
            size={45}
            className="mb-4"
            cursor={"pointer"}
          />
        </Link>

        <p className="mt-2 text-footercol">© 2024 David Rivera</p>
      </div>
    </div>
  );
}
