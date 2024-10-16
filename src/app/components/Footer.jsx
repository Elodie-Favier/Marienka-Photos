import Link from "next/link"
import Image from "next/image"

export default function Footer () {
    return (
        <div className="flex flex-col text-center">
        <Link href="#top" className="mt-8 text-center text-xl sm:text-2xl">Revenir au début</Link>
       
<Link href="https://mastodon.social/@Annouck" className="hover:text-red-600 font-extrabold flex justify-center mt-8 mb-8 mr-3 text-center text-xl sm:text-3xl"><p className="mr-3">Suivez-moi sur Mastodon  !</p><Image 
              src="/img/logo-mastodon.svg" 
              alt="logo du reseau social mastodon"
              width={32}
              height={32}
              style={{objectFit:"cover"}}
                sizes="100vw"
                />
          </Link>
          
          </div>
    )
}