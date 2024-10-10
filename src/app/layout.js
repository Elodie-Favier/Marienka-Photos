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
      <body className="">
        <header className="w-[90%] mx-auto flex flex-col justify-center xl:mt-5">
          <Header />
        </header>
        <main className="w-[90%] mx-auto">
        {children}
        </main>
        <footer className="flex flex-col items-center">
        <Footer />
        </footer>
      </body>
    </html>
  );
}
