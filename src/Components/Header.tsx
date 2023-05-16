import { useState , useEffect} from "react"


function Header () {
      
    return (
        <div className="w-screen  flex flex-col  md:flex-row-reverse  md:pb-16 lg:pb-48  lg:  " >
            <div className="relative bg-hero-pattern-mb bg-no-repeat bg-cover bg-right  md:bg-none basis-4/6 md:min-w-[50%]"  >
                <img src="src\assets\images\image-mockups.png" alt="hero-logo" className="z-10 h-[23rem] overflow-visible m-auto  md:h-[30rem] px-5 md:absolute md:right-0  md:p-0 md:overflow-hidden lg:right-20 lg:h-[40rem]" />
                <img src="src\assets\images\bg-intro-desktop.svg" alt="hero-logo" className="hidden	 md:block md:absolute  md:right-[-5rem] md:top-0 md:h-[30rem] lg:h-[56rem] lg:right-[-8rem] lg:-z-10" />
            </div>
            <div className= "flex flex-col items-center md:pt-16 md:pr-10 lg:w-[40rem] lg:pl-40">
                <h1 className="text-darkBlue text-4xl text-center px-2 mt-5 lg:text-5xl">Next generation digital banking</h1>
                <p className="px-3 text-center text-grayishBlue text-base py-8 md:text-xls md:w-70% lg:text-left lg:text-xl ">Take your financial life onlie.Your Easybank account will be a one-stop-shop for spending ,saving ,budegeting ,investing, and much more.</p>
                <button  className="mb-5 bg-gradient-to-r from-limeGreen to-brighCyan w-44 h-12 text-white rounded-full object-center  lg:block ">Request Invite </button>
            </div>
        
    </div>
)
    
}

export default Header