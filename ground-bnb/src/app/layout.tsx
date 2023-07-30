import "./globals.css";
import { Nunito } from "next/font/google";
import * as C from "@/components";

const mainFont = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "GBNB",
  description: "Ground Bnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <C.Navbar />

        {children}
      </body>
    </html>
  );
}
