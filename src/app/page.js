'use client'

import Gallerie from "./components/Gallerie";
import  {useRouter} from "next/navigation"
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const router = useRouter()
  console.log(router)
  return (
    <section id="top" className="mx-auto min-w-96 flex flex-col justify-center">
<Gallerie/>

</section>
  );
}
