import {
  HomeClosing,
  HomeEntryPoints,
  HomeHero,
  HomeStatement,
  HomeWork
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <main className="bg-[#f4efe8] text-ink">
      <HomeHero />
      <HomeStatement />
      <HomeEntryPoints />
      <HomeWork />
      <HomeClosing />
    </main>
  );
}
