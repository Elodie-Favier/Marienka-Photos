import {Sofadi_One} from 'next/font/google'

const sofadiOne = Sofadi_One ({
    weight:'400',
    subsets:['latin',
    ]
})


export default function Logo() {
    return (
   <div className="Logo-Title m-4 text-4xl">
<h1 className={sofadiOne.className}>Mari<span  className="text-red-600">e</span>nka</h1>
   </div>
      
    );
  }
  