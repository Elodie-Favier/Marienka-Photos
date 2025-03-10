'use client'

import Gallerie from "./components/Gallerie";
import  {useRouter} from "next/navigation"

import Image from "next/image";
export default function Home() {
  const router = useRouter()
  
  return (
    <>
    <section id="top" className="relative h-[300px] mx-auto min-w-96 flex justify-center sm:h-[500px] lg:h-[700px]">
<Image
className=""
src="/img/jordan-whitfield-qODM8pfwRO4-unsplash.jpg"
alt="Photo de Jordan Whitfield sur Unsplash"
quality={100}
fill
priority={false}
sizes="100vw"
style={{ objectFit: "contain" }}
/>
    </section>
    <section id="galleries" className=" mx-auto min-w-96 flex flex-col justify-center">
<Gallerie/>

</section>
</>
  );
}
