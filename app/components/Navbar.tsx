import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
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
