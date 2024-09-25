
import { useRouter } from "next/navigation"
import Image from "next/image";
import data from '../../app/data/data.json'


export default function Galleries ({id}){
    const router = useRouter()
    const {id} = router.query

    const gallery = data.pictures.find(pic => pic.id === parseInt(id))
    if (!gallery) {
        return <p>Pas de galleries pour le moment !</p>
    }
    return (
        <>
        <div>
        <h1>Gallerie {gallery.titleGallery}</h1>
        </div>
        <div>
        {
            gallery.pictures.map((pic,index)=> (
                <Image
                key={index}
                src={pic}
                alt="photos"
                width={500}
                height={500}
                style={{objectFit:"cover"}}
                sizes="100vw" 
                />
            ))
        }
        </div>
        </>
    )
}