
import data from '../data/data.json'
const pictures = data.pictures
console.log(pictures);


export default function PicturesDisplay (){

    return(
        <section className="">
            {pictures?.map((pic)=> (
                
                <div className="">
    <Image
    src={pic.index}
    alt="sans titre"
    key={pic.index}
    width={500}
    height={500}
    style={{objectFit:"cover"}}
    sizes="100vw" />
</div>
            ))
                
            }

        </section>
    )
}