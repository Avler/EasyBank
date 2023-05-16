import online from "../assets/images/icon-online.svg"
import budgeting from "../assets/images/icon-budgeting.svg"
import onboarding from "../assets/images/icon-onboarding.svg"
import api from "../assets/images/icon-api.svg"

function Section() {
    return(
        <div className="w-screen flex flex-col bg-lightGrayishBlue text-center pt-10   " >
            <span>
                <h1 className="text-darkBlue text-4xl pt-5" >Why choose <br/> Easybank?</h1>
                <p className="p-section w-[24rem] m-auto">We leverage Open Banking to turn your bank account into your financial hub. Control  your finances like never before.</p>
                
            </span>
            <div className="w-screen flex flex-col md:grid md:grid-cols-2 pt-10 lg:flex lg:flex-row lg:justify-center lg:h-[30rem]">
                <span>
                    <img src={online} alt="err" className="w-24 m-auto py-5"/>
                    <h3 className="text-darkBlue text-2xl">Online Banking</h3>
                    <p className="p-section lg:w-[18rem]" > Our modern web and mobile applications allow you to keep track of your finances  wherever you are in the world.</p>
                    
                </span>  
                <span>
                    <img src={budgeting} alt="err" className="w-24 m-auto py-5" />   
                    <h3 className="text-darkBlue text-2xl">Simple Budgeting</h3>
                    <p className="p-section lg:w-[18rem]">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    
                </span>
                <span>
                    <img src={onboarding} alt="err" className="w-24 m-auto py-5" />
                    <h3 className="text-darkBlue text-2xl">Fast Onboarding</h3>
                    <p className="p-section lg:w-[18rem]">We don’t do branches. Open your account in minutes online and start taking control  of your finances right away.</p>
                    
                </span>
                <span>
                    <img src={api} alt="err" className="w-24 m-auto py-5" />
                    <h3 className="text-darkBlue text-2xl">Open API</h3>
                    <p className="p-section lg:w-[18rem]">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    
                </span>
            </div>
            
            
        </div>
    )
}

export default Section