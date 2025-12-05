"use client";

import { HomeRoot } from "../home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function HowWeWorkPage() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return (
    <Suspense>
      <HomeRoot pageType="how-we-work" initialSection={initialSection} />
    </Suspense>
  );
}