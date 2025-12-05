"use client";

import { HomeRoot } from "../home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FaqPageClientContent() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="faq" initialSection={initialSection} />;
}

export default function FaqPage() {
  return (
    <Suspense>
      <FaqPageClientContent />
    </Suspense>
  );
}
