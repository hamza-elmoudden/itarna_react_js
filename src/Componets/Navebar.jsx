import itarna from "../assets/ITARNA_VARIABLE_02.jpg"



export const Navebar = () => {
  return (
    <nav className="container mx-auto md:py-1 py-3">
        <div className="md:flex justify-around items-center text-xl uppercase hidden font-bold">
            <div>
                <div className="w-[13rem] h-[7rem] overflow-hidden cursor-pointer">
                    <img className="w-full h-full" src={itarna} alt="itarna" />
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <div className="cursor-pointer hover:text-[#D65031]">Home</div>
                <div className="cursor-pointer hover:text-[#D65031]">Service</div>
                <div className="cursor-pointer hover:text-[#D65031]">Contacte</div>
            </div>
        </div>
        <div className="md:hidden block">
            <div className="w-[13rem] h-[7rem] overflow-hidden cursor-pointer">
                <img className="w-full h-full" src={itarna} alt="itarna" />
           </div>
        </div>
    </nav>
  )
}
