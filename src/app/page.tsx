"use client";

import { HomeRoot } from "./home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return (
    <Suspense>
      <HomeRoot pageType="home" initialSection={initialSection} />
    </Suspense>
  );
}
