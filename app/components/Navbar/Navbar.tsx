"use client";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spacer,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Image } from "@nextui-org/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function PageNavBar() {
  const isEditorPath = usePathname() === "/editor";

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <Navbar>
      <NavbarBrand>
        <Image
          isBlurred
          height={30}
          width={30}
          src="/images/InterfuseLogo.png"
          alt="fuselogo"
        />
        <Spacer x={0.5} />
        <Link href="/" size="lg" className="font-bold text-foreground">
          Interfuse
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="text-foreground hidden lg:flex">
          <Link className="text-foreground font-bold" href="/editor" size="lg">
            Editor
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>{isEditorPath && <ThemeSwitcher />}</NavbarItem>
    </Navbar>
  );
}
