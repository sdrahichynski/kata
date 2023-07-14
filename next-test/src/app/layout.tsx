import "./globals.css";
import { Inter } from "next/font/google";
import * as C from "@/components";
import { cx } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobyrix | NEXT.js test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, "flex min-h-screen flex-col")}>
        <C.Header />

        <main className="grow">{children}</main>

        <C.Footer />
      </body>
    </html>
  );
}
