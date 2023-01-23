
function Articles() {
    return(
        <div className="bg-white mt-16 text-center md:mb-10">
            <h1 className="text-darkBlue text-4xl mb-5 lg:mb-10 lg:text-left lg:ml-10">Latest Articles</h1>
            <div className="text-center m-auto lg:flex lg:flex-row">
                <div>
                    <img src="src\assets\images\image-currency.jpg" alt="err" className="px-5 m-auto lg:h-72"/>
                    <h4 className="text-grayishBlue text-xs text-left py-5 px-8 m-auto">By Claire Robinson</h4>
                    <h2 className="text-darkBlue text-lg px-5 md:cursor-pointer md:hover:text-limeGreen">Receive money in any currency with no fees</h2>
                    <p className="p-section text-left px-8"> The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
                <div>
                    <img src="src\assets\images\image-restaurant.jpg" alt="err" className="px-5  m-auto lg:h-72" />
                    <h4 className="text-grayishBlue text-xs text-left py-5 px-8">By Wilson Hutton</h4>
                    <h2 className="text-darkBlue text-lg px-5 md:cursor-pointer md:hover:text-limeGreen">Treat yourself without worrying about money</h2>
                    <p className="p-section text-left px-8"> Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>
                <div>
                    <img src="src\assets\images\image-plane.jpg" alt="err"  className="px-5 m-auto lg:h-72"/>
                    <h4 className="text-grayishBlue text-xs text-left py-5 px-8">By Wilson Hutton</h4>
                    <h2 className="text-darkBlue text-lg px-5 md:cursor-pointer md:hover:text-limeGreen">Take your Easybank card wherever you go</h2>
                    <p className="p-section text-left px-8">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </div>
                <div>
                    <img src="src\assets\images\image-confetti.jpg" alt="err"  className="px-5 m-auto lg:h-72"/>
                    <h4 className="text-grayishBlue text-xs text-left py-5 px-8">By Claire Robinson</h4>
                    <h2 className="text-darkBlue text-lg px-5 md:cursor-pointer md:hover:text-limeGreen">Our invite-only Beta accounts are now live!</h2>
                    <p className="p-section text-left px-8">   After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </div>
 
            </div>
            
        </div>
    )
}

export default Articles