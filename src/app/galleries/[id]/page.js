'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import data from '../../data/data.json'

export default function Galleries() {
  
    const params = useParams()
  
if ({params} )
 return (
 <>
 <section className="mx-auto mt-8 min-w-96 flex flex-col justify-center  drop-shadow-xl">
 <h2 className=" font-extrabold text-center text-2xl mt-5 mb-5 sm:text-3xl sm:mb-9">Gallerie <i>"{data[params.id -1].titleGallery}"</i></h2>

<div className="flex flex-col justify-center mx-auto md:flex-row md:flex-wrap">

{data[params.id -1].pictures.map((pic) => (
    <Image 
    className="mt-5 min-w-350 sm:min-w-500 sm:m-5 md:mr-5"
    src={pic.photo}
    alt="photo de la gallerie" 
    width={500}
    height={500}
    style={{objectFit:"contain"}}
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
 