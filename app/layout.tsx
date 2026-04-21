import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Planeta Argentina",
  description: "A contemplative digital gallery and restricted access platform."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          <LanguageProvider>
            <SiteHeader />
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
