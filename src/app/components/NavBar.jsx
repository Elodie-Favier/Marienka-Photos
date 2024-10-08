'use client'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function NavBar() {

  const router = useRouter()
    return (
   <ul className="flex flex-row m-4 text-xl items-center">
    <Link href="/" className="ml-4 ">Accueil</Link>
    <Link href="/about" className="ml-4">A propos</Link>
    <Link href="https://mastodon.social/@Annouck" className="ml-4"><Image 
        src="/img/logo-mastodon.svg" 
        alt="logo du reseau social mastodon"
        width={32}
        height={32}
        style={{objectFit:"cover"}}
          sizes="100vw"
          />
</Link>
   </ul>
    )
    
  }
  