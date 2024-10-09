'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import data from '../../data/data.json'

export default function Galleries() {
  
    const params = useParams()
  
if ({params} )
 return (
 <>
 <section className="mx-auto mt-8 min-w-96 flex flex-col justify-center">
 <h2 className="text-2xl ml-5 mb-5">Gallerie {data[params.id -1].titleGallery}</h2>

<div className="flex flex-col justify-center md:flex-row md:flex-wrap bg-pink-500 flex-wrap md:justify-around">

{data[params.id -1].pictures.map((pic) => (
    <Image 
    className={pic.styles}
    src={pic.photo}
    alt="photo de la gallerie" 
    width={500}
    height={500}
    style={{objectFit:"cover"}}
    sizes="100vw"
 />
))
}
</div>
</section>
  </>
)
  
    
  
  

//     )
  
  
  

     
 
 
  
 
}
 