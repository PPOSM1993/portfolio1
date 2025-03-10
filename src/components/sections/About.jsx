export const About = () => {

    const progammingLanguage = [
        "Python", 
        "Javascript", 
        "Typescript"
    ];

    const frontendSkills = [
        "React",
        "Vue",
        "TailwindCSS",
        "Bootstrap 4.6>",
        "Next JS",
        "Vite"
    ];
    
      const backendSkills = [
        "Django", 
        "Django Rest Framework", 
        "Flask", 
        "PostgreSQL", 
        "MySQL", 
        "API Rest", 
        "Amazon Web Server", 
        "Mongo DB",
        "Microservices"
    ];

    const otherSkills = ["Linux", "English", "Docker", "GIT"];

    const certificationsSkills = ["Resonsive Web Design Certification", "A2 English for Developers Certification"];

    const educationInfo = ["Technological University of Chile INACAP - Informatic Engineering and Computer Science (2015-2022)"];
    const workExperience = [
        "Catholic University of Temuco- Junior Software Developer (March 2022 - November 2022)",
        "Prince of Wales High School - Python Instructor, Math Teacher (August 2024 - December 2024)"
    ];
      
    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                        <p className="text-justify text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem! Perspiciatis quaerat a commodi laboriosam. Ea aspernatur laborum eos eaque nisi error labore aliquid temporibus, doloremque voluptas quaerat praesentium minus.
                        </p>

                        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent text-center">Skills</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent text-center"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        frontendSkills.map((skill, index) => (
                                            <div key={index} className="bg-green-200 rounded-2xl p-2 text-sm
                                            text-gray-800 hover:bg-green-400 transition-all">
                                                {skill}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent text-center"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        backendSkills.map((skill, index) => (
                                            <div key={index} className="bg-green-200 rounded-2xl p-2 text-sm
                                            text-gray-800 hover:bg-green-400 transition-all">
                                                {skill}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Other Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        otherSkills.map((skill, index) => (
                                            <div key={index} className="bg-green-200 rounded-2xl p-2 text-sm
                                            text-gray-800 hover:bg-green-400 transition-all">
                                                {skill}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>


                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Certifications Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        certificationsSkills.map((skill, index) => (
                                            <div key={index} className="bg-green-200 rounded-2xl p-2 text-sm
                                            text-gray-800 hover:bg-green-400 transition-all">
                                                {skill}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold mb-4"> 🏫 Education </h3>
                                { 
                                    educationInfo.map((education, index) => (
                                        <ul key={index} className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>
                                                <span>{education}</span>
                                            </li>
                                        </ul>
                                        ))
                                }
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-2xl font-bold mb-4"> Work Experience</h3>
                            { 
                                workExperience.map((work, index) => (
                                    <ul key={index} className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                            <span>{work}</span>
                                        </li>
                                    </ul>
                                    )
                                )
                            }

                        </div>
                    </div>


                </div>
            </section>
        </>
   )
}

export default About