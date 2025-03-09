export const Home = () => {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h3 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent leading-right">
                        Hi everyone, I'm Pedro
                    </h3>

                    <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
                        I’m a full-stack developer who loves crafting clean, scalable web
                        applications. My goal is to build solutions that offer both
                        exceptional performance and a delightful user experience. 
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" 
                           className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10 rounded-full">
                            View Projects
                        </a>
                        <a href="#conctact" 
                           className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10 rounded-full">
                            Contact Me
                        </a>
                        
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Home