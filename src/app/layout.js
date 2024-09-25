import "./globals.css";
import { Anuphan } from "next/font/google";
import Header from "./components/Header";
import { fromJSON } from "postcss";

const anuphan = Anuphan({
  subsets: ["latin"],
});

export const metadata = {
  title: "Marienka",
  description: "Photographies inutiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={anuphan.className}>
      <body>
        <header className="flex flex-row justify-between">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
