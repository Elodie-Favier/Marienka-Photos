import {Sofadi_One} from 'next/font/google'

const sofadiOne = Sofadi_One ({
    weight:'400',
    subsets:['latin',
    ]
})


export default function Logo() {
    return (
   <div className=" text-center border-b-2 border-black mb-6 md:mb-12 text-6xl md:text-8xl lg:mb-10 lg:border-none lg:ml-16">
<h1 className={sofadiOne.className}>Mari<span  className="text-pink-600">e</span>nka</h1>
   </div>
      
    );
  }
  