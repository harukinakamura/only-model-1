import Link from "next/link";

export function ReferButton({ className }: { className?: string }) {
  return (
    <Link href="/" className={`refer-button ${className || ""}`}>
      Apply Now
      <div className="refer-button-effect">
        <div />
      </div>
    </Link>
  );
}
