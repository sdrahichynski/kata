import "./globals.css";
import { Inter } from "next/font/google";
import * as C from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Blog APP",
  description: "Mick Nep free course app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <C.Header />

        <main className="container">{children}</main>

        <C.Footer />
      </body>
    </html>
  );
}
