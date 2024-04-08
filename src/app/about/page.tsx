import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Here's About Page.",
};

export default function AboutPage() {
  return (
    <div className="flex items-center min-h-screen justify-center flex-col space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
          About Page
        </h1>
      </div>
    </div>
  );
}
