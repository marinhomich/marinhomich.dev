export default function Footer() {
  const contactLink = {
    label: "@marinhomich",
    href: "https://x.com/marinhomich",
    ariaLabel: "twitter profile",
  };

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4  md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose  md:text-left">
          Built by{" "}
          <a
            href={contactLink.href}
            aria-label={contactLink.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:decoration-primary font-medium underline decoration-secondary decoration-1  underline-offset-2"
          >
            {contactLink.label}
          </a>
        </p>
      </div>
    </footer>
  );
}
