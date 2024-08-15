import { Spacer } from "@nextui-org/react";
import Hero from "./components/Hero/Hero";
import FeatureSection from "./components/features/FeatureSection";
import { Divider } from "@nextui-org/react";

// This component should contain the landing page
export default function Home() {
  return (
    <main className="flex-col">
      <Hero />
      <Spacer y={40} />
      <Divider />
      <FeatureSection />
    </main>
  );
}
