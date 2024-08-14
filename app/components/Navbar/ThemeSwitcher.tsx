"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiAdjust } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-1">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <BiMoon color="#000" size={20} />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <BiAdjust size={20} />
        </button>
      )}
    </div>
  );
}
