
import Link from 'next/link';
// "flex flex-row text-xl justify-around sm:text-3xl sm:mt-6 lg:justify-"


export default function NavBar() {
    return (
      <nav className="  w-1/2 2xl:w-1/3">
        <ul className="flex flex-row text-xl justify-around  sm:text-3xl sm:mt-6  lg:mb-10 ">
          <Link href="/" className="hover:font-bold hover:text-red-600 hover:drop-shadow-2xl">Accueil</Link>
          
          <Link href="/about" className="hover:font-bold hover:text-red-600 hover:drop-shadow-2xl">A propos</Link>
        </ul>
   </nav>
    )
    
  }
  