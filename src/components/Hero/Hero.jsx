import heroImg from "../../assets/hero.jpg"

const Hero = () => {
    return (
        <section className="bg-blue-50 min-h-screen">
            <div className="max-w-6xl mx-auto py-10 lg:py-20 px-4 md:flex justify-between items-center gap-10">
                <div className="space-y-4 md:w-1/2">
                    <h2 className="w-80 font-bold text-2xl lg:text-4xl lg:leading-12">We Build Digital Solutions for a Better Tommorow</h2>
                    <p className="text-slate-600 md:text-sm">Biswas IT is a modern web & software development agency dedicated to helping business grow through technology, creativity and innovation.</p>
                    <button
                        className="px-4 py-2 text-lg rounded-md bg-blue-600 text-[#ffff] font-semibold cursor-pointer active:scale-98"
                    >
                        Get In Touch
                    </button>
                </div>
                <div className="md:w-1/2 mt-10 lg:mt-0">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;