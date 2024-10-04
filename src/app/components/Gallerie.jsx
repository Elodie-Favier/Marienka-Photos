'use client'

import Image from "next/image"
import data from '../data/data.json'
import {useRouter} from 'next/navigation'

export default function MyGalleries () {
const router = useRouter()

return (
    
    <div className=" bg-pink-500 flex flex-row flex-wrap justify-between m-4">
        {data.map((item)=>(
<div className="relative bg-pink-200">
            <Image 
            className="m-5 rounded-xl w-[350px] h-[350px]"
        src={item.cover}
        alt={item.titleGallery}
        key={item.index}
        id={item.id}
        width={500}
        height={500}
        style={{objectFit:"cover"}}
          sizes="100vw"
        // onClick={}
        />
        <button className="absolute rounded-xl top-10 left-10 min-w-28 p-2 bg-zinc-50 opacity-50" id={item.id} onClick={() => router.push(`/galleries/${item.id}`)} >Voir la gallerie <b><i>{item.titleGallery} dont l'id est {item.id}</i></b></button>
          </div>
        ))}
    </div>   
)

}