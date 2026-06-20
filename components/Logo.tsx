type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Text-based wordmark placeholder.
 * Swap this for an <Image> tag once the original logo file is recovered —
 * see /public/README.md for instructions.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <span
      className={`inline-flex items-baseline gap-[2px] font-display font-semibold tracking-tight ${className}`}
    >
      <span className={isLight ? "text-bone" : "text-forest"}>IO</span>
      <span className={isLight ? "text-brass-light" : "text-brass"}>·</span>
      <span
        className={`text-[0.58em] font-body font-semibold tracking-widest2 uppercase translate-y-[-0.05em] ${
          isLight ? "text-bone/80" : "text-forest/80"
        }`}
      >
        Consults
      </span>
    </span>
  );
}
