import type { Metadata } from "next";
import "./globals.css";
import HeaderBase from "@/components/HeaderBase";
import { onest } from "./fonts";

export const metadata: Metadata = {
  title: "Zerbinott - Your brandstore herenmode in Maastricht",
  description:
    "Brandstore aan de Muntstraat 7 in Maastricht. Merken als PME Legend, Cast Iron, Matinique, Drykorn, Pig &amp; Hen, Alan Red en Lee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <HeaderBase />
        {children}
      </body>
    </html>
  );
}
