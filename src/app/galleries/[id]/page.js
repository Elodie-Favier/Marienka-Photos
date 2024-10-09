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
 <h2 className="bg-yellow-300 text-center text-2xl mt-5 mb-5 sm:text-3xl sm:mb-9">Gallerie <i>"{data[params.id -1].titleGallery}"</i></h2>

<div className="flex flex-col justify-center md:flex-row md:flex-wrap flex-wrap md:justify-around">

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
 