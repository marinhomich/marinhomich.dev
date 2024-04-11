import Balancer from "react-wrap-balancer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <div className="flex-1">
        <main className="container flex min-h-[100vh-56px] w-full flex-col items-start justify-center pt-48">
          <div className="max-w-4xl">
            <h1
              className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
              style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
            >
              <Balancer>Michel Marinho</Balancer>
            </h1>

            <p
              className="mt-6 animate-fade-up  text-muted-foreground/80 opacity-0 md:text-xl"
              style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
            >
              <Balancer>Frontend Developer.</Balancer>
            </p>
            <div
              className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
              style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
            ></div>
          </div>
        </main>
      </div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4  md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://x.com/marinhomich"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              marinhomich
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
