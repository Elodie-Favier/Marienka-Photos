'use client'

import Gallerie from "./components/Gallerie";
import  {useRouter} from "next/navigation"
export default function Home() {
  const router = useRouter()
  console.log(router)
  return (
    <section className="">
<Gallerie/>
</section>
  );
}
