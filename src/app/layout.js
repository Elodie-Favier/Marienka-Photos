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
    <html lang="fr" className={anuphan.className}>
      <body className=" bg-slate-50">
        <header className="bg-yellow-400 mx-auto flex flex-col justify-center">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
