import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Planeta Argentina",
  description:
    "Plataforma editorial y documental sobre Argentina, construida a través de expediciones reales."
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
