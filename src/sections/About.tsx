import { Layout, Server, Database, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-[#FAF8F5]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A5759] bg-[#B0C4B1]/35 px-4 py-1.5 rounded-full border border-[#B0C4B1]">
                        Get to Know Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A5759] mt-3">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-[#4A5759]/85 leading-relaxed text-base">
                        <h3 className="text-2xl font-bold text-[#4A5759]">
                            Passionate about building functional web applications and eager to dive deeper into software engineering.
                        </h3>
                        <p>
                            I am an aspiring full-stack developer who loves turning lines of code into engaging digital experiences. I thrive on the puzzle of solving complex problems, writing clean code, and transforming fresh ideas into smooth, responsive applications that just work.
                        </p>
                        <p>
                            My journey into tech is fueled by curiosity and hands-on creation—from exploring regional web interfaces and architecting Java-based systems to building mini reservation platforms with modern JavaScript technologies. I enjoy working in cross-functional teams and translating complex requirements into simple, human-friendly experiences.
                        </p>

                        {/* Core Philosophy Banner */}
                        <div className="p-6 bg-[#F7E1D7] rounded-3xl border border-[#DEDBD2] shadow-xs relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#EDAFB8]/30 rounded-bl-full pointer-events-none"></div>
                            <h4 className="font-bold text-[#4A5759] mb-2 text-xs uppercase tracking-wider flex items-center gap-1.5">
                                Core Philosophy
                            </h4>
                            <p className="text-sm text-[#4A5759] font-medium leading-relaxed">
                                "Code is like a blank canvas—every line is a deliberate stroke toward something functional, clean, and built to inspire."
                            </p>
                        </div>
                    </div>

                    {/* Core Domain Cards */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-[#4A5759] mb-4">Core Domains</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-5 bg-[#FAF8F5] rounded-3xl border border-[#DEDBD2] hover:border-[#B0C4B1] hover:shadow-md transition-all shadow-xs">
                                <div className="w-10 h-10 rounded-2xl bg-[#B0C4B1]/40 text-[#4A5759] flex items-center justify-center mb-3">
                                    <Layout size={20} />
                                </div>
                                <h4 className="font-bold text-[#4A5759] text-sm mb-1">Frontend Design</h4>
                                <p className="text-xs text-[#4A5759]/75">React, Next.js, and responsive layouts.</p>
                            </div>

                            <div className="p-5 bg-[#FAF8F5] rounded-3xl border border-[#DEDBD2] hover:border-[#EDAFB8] hover:shadow-md transition-all shadow-xs">
                                <div className="w-10 h-10 rounded-2xl bg-[#EDAFB8]/45 text-[#4A5759] flex items-center justify-center mb-3">
                                    <Server size={20} />
                                </div>
                                <h4 className="font-bold text-[#4A5759] text-sm mb-1">Backend Systems</h4>
                                <p className="text-xs text-[#4A5759]/75">Node.js, Express, Microservices and java.</p>
                            </div>

                            <div className="p-5 bg-[#FAF8F5] rounded-3xl border border-[#DEDBD2] hover:border-[#F7E1D7] hover:shadow-md transition-all shadow-xs">
                                <div className="w-10 h-10 rounded-2xl bg-[#F7E1D7] text-[#4A5759] flex items-center justify-center mb-3">
                                    <Database size={20} />
                                </div>
                                <h4 className="font-bold text-[#4A5759] text-sm mb-1">Databases</h4>
                                <p className="text-xs text-[#4A5759]/75">PostgreSQL, MongoDB, OracleDB and MySQL.</p>
                            </div>

                            <div className="p-5 bg-[#FAF8F5] rounded-3xl border border-[#DEDBD2] hover:border-[#B0C4B1] hover:shadow-md transition-all shadow-xs">
                                <div className="w-10 h-10 rounded-2xl bg-[#DEDBD2] text-[#4A5759] flex items-center justify-center mb-3">
                                    <Code size={20} />
                                </div>
                                <h4 className="font-bold text-[#4A5759] text-sm mb-1">API & Integration</h4>
                                <p className="text-xs text-[#4A5759]/75">REST, Auth & 3rd Party APIs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}