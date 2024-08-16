import React from "react";
import { Feature } from "./FeatureData";
import { Spacer } from "@nextui-org/react";
import HeaderText from "../Text";

interface Props {
  data: Feature;
}

export default function FeatureCard({ data }: Props) {
  return (
    <div className="flex flex-col justify-center items-center mt-4 text-center flex-1 p-4">
      <div className="flex justify-center">
        <HeaderText text={data.title} size="sm" />
      </div>

      <Spacer y={8} />

      <p className="px-4 text-wrap text-start">{data.description}</p>
    </div>
  );
}
