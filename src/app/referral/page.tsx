"use client";

import { HomeRoot } from "../home-root";
import { useSearchParams } from "next/navigation";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const initialSection = searchParams.get("section") || undefined;

  return <HomeRoot pageType="referral" initialSection={initialSection} />;
}
