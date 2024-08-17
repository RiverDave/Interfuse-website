import { Divider, Spacer } from "@nextui-org/react";
import Hero from "./components/Hero/Hero";
import FeatureSection from "./components/features/FeatureSection";
import PageFooter from "./components/Footer";

// This component should contain the landing page
export default function Home() {
  return (
    <main className="flex-col">
      <Hero />

      <FeatureSection />
      <Spacer y={20} />
      <Divider className="my-10" />
    </main>
  );
}
