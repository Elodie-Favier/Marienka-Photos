
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
      <nav>
        <ul className="flex flex-row text-xl justify-around sm:text-3xl bg-slate-100 sm:mt-8">
          <Link href="/" className="hover:font-bold hover:text-red-500">Accueil</Link>
          <Link href="/about" className="hover:font-bold hover:text-red-500">A propos</Link>
        </ul>
   </nav>
    )
    
  }
  