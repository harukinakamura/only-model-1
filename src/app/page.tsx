"use client";

import { HomeRoot } from "./home-root";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="home" initialSection={initialSection} />;
}
