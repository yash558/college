import ExclusiveDealsBanner from "@/components/ExclusiveDealBanner";
import { FavoriteCards } from "@/components/FavoriteCard";

import HeroSection from "@/components/Hero";
import { TopUniversity } from "@/components/TopUniversities";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TopUniversity />
      <FavoriteCards />

      <ExclusiveDealsBanner />
    </main>
  );
}
