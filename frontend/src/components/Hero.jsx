import image from '../assets/illustration-working.svg'

function Hero() {
  return (
    <section id="hero">
        <div className="container flex flex-col-reverse m-auto  p-6 lg:flex-row">
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">More than just Shorter Links</h1>
                <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className="mx-auto lg:mx-5">
                    <a href="#" className="py-5 px-10 text-2xl bg-cyan rounded-full text-white hover:opacity-80">Get Started</a>
                </div>
            </div>

            <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                <img src={image} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero;
