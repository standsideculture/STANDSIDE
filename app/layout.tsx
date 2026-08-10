import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STANDSIDE — Built From Loyalty. Life For The Game.",
  description: "STANDSIDE official store — more than clothing, a statement of loyalty, identity and lifestyle.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
