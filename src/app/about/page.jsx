'use client'
import Image from "next/image"
export default function About (){
     return (
        <section className="mx-auto min-w-96 flex flex-col justify-center">
<div className="m-4 mt-8 text-justify">
<h2 className="font-extrabold text-center text-2xl mt-5 mb-5 sm:text-3xl sm:mb-9 md:mb-14 md:text-4xl">À propos de moi</h2> 
<div className="flex flex-col items-center lg:flex-row">

<div className="m-5"><p className="mb-3 sm:text-xl lg:text-2xl">Je m'appelle Marienka, et la photographie est pour moi une manière de capturer des instants précieux du quotidien. Toujours équipée de mon appareil photo, je pars à la découverte des scènes qui, à mes yeux, sont chargées d'émotions. J'aime immortaliser ces moments furtifs qui racontent une histoire, sans artifices. Pour moi, la photographie est un moyen d’explorer et de partager la beauté simple du monde qui nous entoure.</p>

<p className="mb-3 sm:text-xl lg:text-2xl">
Ce site est simplement un espace pour partager mon travail et, je l'espère, pour vous transmettre un peu des émotions que je ressens en prenant ces photos.</p>

<blockquote className="mb-3 sm:text-xl lg:text-2xl">
        <p className="mt-4">
              "Le merveilleux est dans l'ordinaire."
– Robert Doisneau  
        </p>
</blockquote>
</div>
<Image
className="m-5 rounded-xl sm:w-[500px] h-[500px]"
src="/img/couv.webp"
alt="image en noir et blanc de marienka"
width={320}
height={320}
style={{objectFit:"contain"}}
sizes="100vw"
/>
</div>
</div>
        </section>
     )
}