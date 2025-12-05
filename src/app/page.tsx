"use client";

import { HomeRoot } from "./home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageClientContent() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="home" initialSection={initialSection} />;
}

export default function Home() {
  return (
    <Suspense>
      <PageClientContent />
    </Suspense>
  );
}
