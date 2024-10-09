'use client'

import Gallerie from "./components/Gallerie";
import  {useRouter} from "next/navigation"
import Link from "next/link";
export default function Home() {
  const router = useRouter()
  console.log(router)
  return (
    <section id="top" className="mx-auto min-w-96 flex flex-col justify-center">
<Gallerie/>
<Link href="#top" className="mt-8 text-center text-xl hover:font-semibold">Revenir au début</Link>
</section>
  );
}
