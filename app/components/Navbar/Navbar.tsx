import React from "react";
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

export default function PageNavBar() {
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
          <Link className="text-foreground font-bold" href="/docs" size="lg">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem className="text-foreground hidden lg:flex">
          <Link className="text-foreground font-bold" href="/editor" size="lg">
            Editor
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </Navbar>
  );
}
