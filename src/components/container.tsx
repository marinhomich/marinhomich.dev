import type { ReactNode } from "react";
import Footer from "./footer";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <div className="flex-1 justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
}
