import { Spacer } from "@nextui-org/react";
import { FeatureData } from "./FeatureData";
import FeatureCard from "./FeatureCard";
import HeaderText from "../Text";

const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto mt-16">
      {/* Gradient stuff */}
      <HeaderText
        text="Cutting-Edge Syntax, Classic C Roots"
        size="lg"
        wrap
      ></HeaderText>

      <Spacer y={20} />

      <div className="flex justify-center items-center flex-wrap w-full">
        {FeatureData.map((item) => (
          <FeatureCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
