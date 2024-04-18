import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb Clone",
  description: "Researched at dom Yogyakarta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
