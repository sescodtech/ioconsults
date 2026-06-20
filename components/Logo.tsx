import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * IOCONSULTS wordmark (icon + "IOCONSULTS" — tagline dropped at this size
 * since it becomes illegible below ~100px wide). Served from /public, so it
 * has zero dependency on WordPress or any third-party host.
 *
 * "light" variant (footer, dark sections) inverts the mark to solid white —
 * the source file has a genuinely transparent background, so this renders
 * as a clean white silhouette rather than a boxed-in logo.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="IOCONSULTS"
        height={40}
        width={102}
        priority
        className={`h-8 w-auto object-contain md:h-9 ${isLight ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
