import type { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 flex flex-col justify-center text-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
