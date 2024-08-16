import classNames from "classnames";
import React from "react";

//TODO: Fing a way to pass styles through here
type Size = "sm" | "md" | "lg";
interface Props {
  text: string;
  size: Size;
  wrap?: boolean;
}

export default function headertext(props: Props) {
  return (
    <h1
      className={classNames(
        "p-4 text-center justify-center font-bold from-zinc-700 via-white to-zinc-700 bg-gradient-to-r bg-clip-text text-transparent",
        {
          "text-nowrap": !props.wrap,
          "text-wrap": props.wrap,

          "text-base sm:text-lg md:text-xl lg:text-2xl": props.size === "sm",
          "text-lg sm:text-xl md:text-2xl lg:text-3xl": props.size === "md",
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl": props.size === "lg",
        },
      )}
    >
      {props.text}
    </h1>
  );
}
