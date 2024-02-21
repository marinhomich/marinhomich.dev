import ThemeToggle from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="container flex min-h-[calc(100vh-96px-24px)] w-full flex-col items-center justify-center ">
      <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
        Under development...
      </h1>
      <h2 className="max-w-[600px] text-gray-500 md:text-xl/relaxed text-center dark:text-gray-400">
        We are working on something great. Please check back later.
      </h2>
    </main>
  );
}
