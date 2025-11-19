import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "AgentMind AI",
  description: "Future-safe AI product company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        
        <ThemeProvider>
          <Navbar />

          <div className="pt-28">
            <main className="container py-16">
              {children}
            </main>

            <footer className="mt-20">
              <div className="container py-10">
                <Footer />
              </div>
            </footer>
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
