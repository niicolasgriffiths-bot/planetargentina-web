import {
  HomeClosing,
  HomeExperiences,
  HomeHero,
  HomeSupport,
  HomeStatement,
  HomeTerritories,
  HomeWork
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <main className="bg-[#f4efe8] text-ink">
      <HomeHero />
      <HomeStatement />
      <HomeTerritories />
      <HomeWork />
      <HomeExperiences />
      <HomeSupport />
      <HomeClosing />
    </main>
  );
}
