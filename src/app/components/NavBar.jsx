
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
      <nav>
        <ul className="flex flex-row m-4 justify-center text-xl  items-center">
          <Link href="/" className="hover:font-bold ml-8">Accueil</Link>
          <Link href="/about" className="hover:font-bold ml-8">A propos</Link>
          <Link href="https://mastodon.social/@Annouck" className="ml-8"><Image 
              src="/img/logo-mastodon.svg" 
              alt="logo du reseau social mastodon"
              width={32}
              height={32}
              style={{objectFit:"cover"}}
                sizes="100vw"
                />
          </Link>
        </ul>
   </nav>
    )
    
  }
  