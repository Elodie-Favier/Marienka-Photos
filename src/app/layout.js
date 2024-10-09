import "./globals.css";
import { Anuphan } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <header className="bg-yellow-400 mx-auto flex flex-col justify-center ">
          <Header />
        </header>
        <main>
        {children}
        </main>
        <footer className="flex flex-col items-center">
        <Footer />
        </footer>
      </body>
    </html>
  );
}
