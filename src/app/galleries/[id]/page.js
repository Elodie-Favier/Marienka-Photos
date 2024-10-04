'use client'
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import data from '../../data/data.json'





export default function Galleries() {
    const router = useRouter()
    const params = useParams()
  
if ({params} )
 return (
 <>
 <h1>Gallerie {data[params.id -1].titleGallery}</h1>
 <button className="" onClick={() => router.push('/')}>Retour acceuil</button>

{data[params.id -1].pictures.map((pic) => (
    <Image 
    className="m-5 rounded-xl w-[350px] h-[350px]"
src={pic}
alt="photo de la gallerie" 
width={500}
height={500}
style={{objectFit:"cover"}}
sizes="100vw"
 />
))
}

 

  </>
)
  
    
  
  

//     )
  
  
  

     
 
 
  
 
}
 