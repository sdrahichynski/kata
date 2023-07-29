import "./globals.css";
import { Nunito } from "next/font/google";

const mainFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ground Bnb",
  description: "Ground Bnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
