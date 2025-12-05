"use client";

import { HomeRoot } from "../home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HowWeWorkPageClientContent() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="how-we-work" initialSection={initialSection} />;
}

export default function HowWeWorkPage() {
  return (
    <Suspense>
      <HowWeWorkPageClientContent />
    </Suspense>
  );
}