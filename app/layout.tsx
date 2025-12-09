import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ab (Abdulelah) Almasri — Portfolio",
  description: "Computer Engineering (Robotics) student at Boston University."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-accent text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
