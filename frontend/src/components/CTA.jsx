import logo from '../assets/logo.svg';
import fb from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

export default function CTA(){
    return <>
    <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
            <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">Boost your links today.</h5>
            <button className="px-10 py-3 mx-auto text-2xl text-white bg-cyan font-bold rounded-full hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">Get Started</button>
        </div>
    </section>

    <section className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start ">
            <img src={logo} alt="" />
            <div className="flex flex-col space-y-16 md:space-x-20 md:space-y-0 md:flex-row">
                {/* Menu1 */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitilize">Features</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Link Shortening</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Branded Link</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
                    </div>
                </div>

                 {/* Menu2 */}
                 <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitilize">Features</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">support</a>
                    </div>
                </div>

                {/* Menu3 */}
                <div className="flex flex-col items-center w-full md:items-start">
                    <div className="mb-5 font-bold text-white capitilize">Company</div>
                    <div className="flex flex-col items-center space-y-3 md:items-start">
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">About</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Our team</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Career</a>
                        <a href="" className="capitalize text-grayishViolet hover:text-cyan">Contacts</a>
                    </div>
                </div>

               
            </div>

            {/* Social Container */}
            <div className="flex space-x-6">
                <a href="#">
                    <img src={fb} alt="" className='ficon' />
                </a>
                <a href="#">
                    <img src={twitter} alt="" className='ficon' />
                </a>
                <a href="#">
                    <img src={pinterest} alt="" className='ficon' />
                </a>
                <a href="#">
                    <img src={instagram} alt="" className='ficon' />
                </a>
            </div>
        </div>
    </section>
    </>
}