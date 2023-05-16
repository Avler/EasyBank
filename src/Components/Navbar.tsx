import React , {useState} from "react"
import logo from "../assets/images/logo.svg"
function Navbar() {

    const [navham , setNavham] = useState<boolean>(false)

    function hamMenu () {
        setNavham(x => !x)
    }

   
    return(
        <div className="fixed  z-20 md:static md:flex md:flex-row md:my-5  lg:px-10">
            <nav className="w-screen  flex justify-between p-6 fixed  bg-white md:static md:p-2 lg:basis-2/3">
                <img src={logo} alt="logo" />
                <img src={navham ? "src/assets/images/icon-close.svg" : "src/assets/images/icon-hamburger.svg" } alt="hamburger" onClick={hamMenu} className="md:hidden"/>
            </nav>
            <div className={navham ? "w-screen  fixed top-20 px-5 md:static" : "w-screen   fixed top-20 px-5 hidden md:static md:block   " } >
                <ul className="  flex  flex-col w-25 text-center text-2xl text-darkBlue bg-white gap-1 md:flex-row ">
                    <li className=" py-2 px-2 lg:cursor-pointer md:hover:underline md:underline-offset-8">About</li>
                    <li className=" py-2 px-2 lg:cursor-pointer md:hover:underline md:underline-offset-8">Home</li>
                    <li className=" py-2 px-2 lg:cursor-pointer md:hover:underline md:underline-offset-8">Contact</li>
                    <li className=" py-2 px-2 lg:cursor-pointer md:hover:underline md:underline-offset-8">Blog</li>
                    <li className=" py-2 px-2 lg:cursor-pointer md:hover:underline md:underline-offset-8">Careers</li>
                </ul>
            </div>
            <button className=" mb-5 bg-gradient-to-r from-limeGreen to-brighCyan w-80 h-12 cursor-pointer text-white rounded-full object-center md:hidden lg:block lg:justify-end">Request Invite </button>
        </div>
       
    )
}

export default Navbar