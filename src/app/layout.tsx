import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Web Operations Development ",
  description: "Software Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full h-full">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
