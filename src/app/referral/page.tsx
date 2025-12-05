"use client";

import { HomeRoot } from "../home-root";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReferralPageClientContent() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="referral" initialSection={initialSection} />;
}

export default function ReferralPage() {
  return (
    <Suspense>
      <ReferralPageClientContent />
    </Suspense>
  );
}
