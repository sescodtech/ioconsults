import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dwe7lkty4/image/upload/v1781986878/4df55acf-088d-4ec8-b87f-641fb10aca08_wxzr0v.jpg";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/**
 * IOCONSULTS wordmark/logo.
 * On dark backgrounds ("light" variant — footer, gradient sections) the mark
 * sits inside a small white chip so it stays crisp regardless of the source
 * file's own background, rather than relying on a CSS invert filter that can
 * distort a logo with mixed colors.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  const img = (
    <Image
      src={LOGO_URL}
      alt="IOCONSULTS"
      height={40}
      width={150}
      priority
      className="h-8 w-auto object-contain md:h-10"
    />
  );

  if (isLight) {
    return (
      <span className={`inline-flex items-center rounded-lg bg-white px-3 py-1.5 ${className}`}>
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
