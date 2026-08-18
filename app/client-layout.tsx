"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <main
          className="flex flex-col grow w-full min-h-0 overflow-hidden"
          aria-label="Main content"
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
