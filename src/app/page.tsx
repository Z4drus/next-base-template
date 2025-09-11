import { HomeFeatures } from "@/components/HomeFeatures";
import { HomeHero } from "@/components/HomeHero";
import { HomeNotes } from "@/components/HomeNotes";
import { ShadcnblocksDemo } from "@/components/ShadcnblocksDemo";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <HomeHero />
      <HomeFeatures />
      <HomeNotes />
      <ShadcnblocksDemo />
    </div>
  );
}
