import Link from "next/link";

interface CustomLinkProps {
  href?: any;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function CustomLink({
  href,
  children,
  ariaLabel,
  className,
}: CustomLinkProps) {
  const isInternalLink = href.startsWith("/");

  if (isInternalLink) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
