'use client'

import Image from "next/image"
import data from '../data/data.json'
import {useRouter} from 'next/navigation'

export default function MyGalleries () {
const router = useRouter()

return (
    
    <div className="mx-auto mt-8 justify-center flex flex-col  ">
      <h2 className="font-extrabold rounded-xl text-center text-2xl mt-5 mb-10 sm:text-3xl sm:mb-9 md:mb-14 md:text-4xl lg:mb-20">Visitez mes galleries</h2>
      <div className="drop-shadow-xl  lg:flex lg:flex-row lg:flex-wrap lg:justify-around xl:flex-wrap xl:max-w-[1024px] xl:mx-auto 2xl:max-w-[1500px]">
        {data.map((item)=>(
<div key={item.id} className="relative mb-4 gap-5 sm:mb-6 ">
            <Image 
            className="rounded-xl max-w-[350px] h-[350px] sm:max-w-[500px] sm:h-[500px] lg:max-w-[450px] lg:h-[450px]"
        src={item.cover}
        alt={item.titleGallery}
        id={item.id}
        width={500}
        height={500}
        style={{objectFit:"cover"}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       
        />
        <button className="absolute rounded-xl top-5 left-5 sm:top-10 sm:left-10 min-w-28 p-2 bg-zinc-50 opacity-60 hover:opacity-100" onClick={() => router.push(`/galleries/${item.id}`)} >Gallerie <b><i>{item.titleGallery}</i></b></button>
          </div>
        ))}
        </div>
    </div>   
)

}