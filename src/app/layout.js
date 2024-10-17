import "./globals.css";
import { Anuphan } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anuphan = Anuphan({
  subsets: ["latin"],
});

export const metadata = {
  title: "Marienka photographies",
  description: "Galleries de photographies - Venez faire un tour",
  openGraph: {
    title: "Marienka photographies",
    description: "Galleries de photographies - Venez faire un tour",
    url: "https://mastodon.social/@Annouck",
    siteName: "Marienka photographies",
    images: [
      {
        url: "/img/jordan-whitfield-qODM8pfwRO4-unsplash.jpg",
        width: 1260,
        height: 800,
      },
    ],
    locale: "French",
    // name: "mastodon",
    // image: "/img/marienka.jpg",
    // description:"Lien vers mon compte Mastodon",
    // url:"https://mastodon.social/@Annouck"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={anuphan.className}>
      <body className="max-w-[1536px] mx-auto">
        <header
          role="banner"
          className="w-[90%] mx-auto flex flex-col justify-center xl:mt-5"
        >
          <Header />
        </header>
        <main role="main" className="w-[90%] mx-auto">
          {children}
        </main>
        <footer className="flex flex-col items-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
