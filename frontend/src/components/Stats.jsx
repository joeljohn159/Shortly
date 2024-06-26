import boxIcon1 from '../assets/icon-brand-recognition.svg'
import boxIcon2 from '../assets/icon-detailed-records.svg'
import boxIcon3 from '../assets/icon-fully-customizable.svg'

export default function Stats(){
    return (
        <>
        <section id="stats" className="bg-gray-100  py-28">
            <div className="container mx-auto px-3">
                <h2 className="text-4xl mb-6 font-bold text-center">Advanced Statistics</h2>
                <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>
        </section>
        

        <section id="features" className="bg-gray-100 pb-32">
            <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">

            <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
            
            {/* BOX1 */}
            <div className="relative flex- flex-col mx-6 p-6 space-y-6 bg-white rounded-lg md:w-1/3 ">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                    <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                        <img src={boxIcon1} alt="boxIcon1" />
                    </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capatilize md:text-left">Brand Recognition</h5>
                <p className="text-center text-gray-400 md:text-left">
                    Boost your brand recognition with each Click. Genric links don't mean a thing. Branded links help instil confidence in your content. 
                </p>
            </div>
            {/* BOX2 */}
            <div className="relative flex- flex-col mt-24  mx-6 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                    <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                        <img src={boxIcon2} alt="boxIcon1" />
                    </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capatilize md:text-left">Detailed Records</h5>
                <p className="text-center text-gray-400 md:text-left">
                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision. 
                </p>
            </div>
            {/* BOX3 */}
            <div className="relative flex- flex-col mt-24 mx-6 p-6 space-y-6 bg-white rounded-lg md:w-1/3  md:mt-16">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                    <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                        <img src={boxIcon3} alt="boxIcon1" />
                    </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capatilize md:text-left">Fully Customizable</h5>
                <p className="text-center text-gray-400 md:text-left">
                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
            </div>
            </div>
            
        </section>
        </>
    )
}