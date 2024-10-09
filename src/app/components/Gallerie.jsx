'use client'

import Image from "next/image"
import data from '../data/data.json'
import {useRouter} from 'next/navigation'

export default function MyGalleries () {
const router = useRouter()

return (
    
    <div className="mx-auto mt-8 justify-center flex flex-col md:flex-row md:flex-wrap ">
      <h2 className="bg-yellow-300 text-center text-2xl mt-5 mb-5 sm:text-3xl sm:mb-9">Visitez mes galleries</h2>
        {data.map((item)=>(
<div className="relative mb-4 sm:mb-6">
            <Image 
            className="rounded-xl max-w-[350px] h-[350px] sm:max-w-[500px] sm:h-[500px]"
        src={item.cover}
        alt={item.titleGallery}
        key={item.index}
        id={item.id}
        width={500}
        height={500}
        style={{objectFit:"cover"}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       
        />
        <button className="absolute rounded-xl top-5 left-5 sm:top-10 sm:left-10 min-w-28 p-2 bg-zinc-50 opacity-60 hover:opacity-100" id={item.id} onClick={() => router.push(`/galleries/${item.id}`)} >Gallerie <b><i>{item.titleGallery}</i></b></button>
          </div>
        ))}
    </div>   
)

}