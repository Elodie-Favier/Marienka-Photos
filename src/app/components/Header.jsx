
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div className="drop-shadow-2xl flex flex-col items-center pt-3 md:mb-12 lg:border-b-2 lg:border-black lg:mb-6 lg:flex lg:flex-row lg:justify-between">
   <Logo /> 
   <NavBar />
   
   </div>
    );
  }