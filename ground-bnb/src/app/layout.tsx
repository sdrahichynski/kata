import "./globals.css";
import { Nunito } from "next/font/google";
import * as C from "@/components";
import * as P from "@/providers";

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
        <P.ToasterProvider />
        <C.Navbar />

        {children}

        <C.RegisterModal />
      </body>
    </html>
  );
}
