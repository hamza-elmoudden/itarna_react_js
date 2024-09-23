import itarna from "../assets/ITARNA_VARIABLE_02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram ,faSquareYoutube,faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Data = {
    year: () => new Date().getFullYear(),
  };

export const Footer = () => {

    const year = Data.year()

  return (
 
    <>
    <footer className="py-10">
        <div className="container mx-auto">
            <div className="flex items-center justify-between md:flex-row flex-col md:gap-0 gap-5 py-6">
                <div className=''>
                    <div className="w-[13rem] h-[7rem] overflow-hidden cursor-pointer">
                        <img className="w-full h-full" src={itarna} alt="itarna" />
                    </div>
                </div>
                <div className="flex gap-10 text-4xl">
                    <div className="text-pink-600 cursor-pointer hover:shadow-lg hover:shadow-pink-600 overflow-hidden w-fit rounded-full">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="text-red-600 cursor-pointer  hover:shadow-lg hover:shadow-red-600">
                        <FontAwesomeIcon icon={faSquareYoutube} />
                    </div>
                    <div className="text-blue-600 cursor-pointer  hover:shadow-lg hover:shadow-blue-600">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </div>
                    <div className="text-orange-600 cursor-pointer  hover:shadow-lg hover:shadow-orange-600">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 items-center">
                        <input type="text"  className="outline-none w-[18rem] px-3 py-2 bg-white text-black rounded-lg"/>
                        <div className="px-4 py-2 rounded-lg bg-white text-black font-bold cursor-pointer hover:bg-orange-600">
                            Sercher
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white">
                
            </div>
            <div className="text-center text-2xl pt-6">
                <h2>© {year} </h2>
            </div>
        </div>
    </footer>
    </>
  )
}
