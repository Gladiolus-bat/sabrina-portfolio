import { type MouseEvent } from "react";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
    const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);

        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F7E1D7]/60 via-[#FAF8F5] to-[#FAF8F5]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#B0C4B1]/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#EDAFB8]/35 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F7E1D7]/35 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 text-center lg:text-left mt-6">
                <div className="flex-1 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B0C4B1]/35 border border-[#B0C4B1] text-[#4A5759] text-xs sm:text-sm font-bold mb-6 shadow-xs">
                        Available for opportunities
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#4A5759] mb-5 leading-tight">
                        Hi, I'm{' '}
                        <span className="relative inline-block text-[#4A5759]">
                            Sabrina Pradhan
                            <span className="absolute left-0 bottom-1.5 w-full h-3.5 bg-[#EDAFB8]/70 -z-10 rounded-md"></span>
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#4A5759]/85 mb-6 flex items-center justify-center lg:justify-start gap-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-[#B0C4B1]"></span>
                        Full-stack Developer
                    </h2>

                    <p className="text-base sm:text-lg text-[#4A5759]/80 mb-8 leading-relaxed">
                        Designing and building purposeful web applications where thoughtful user interfaces meet reliable backend systems. Translating creative concepts into polished, high-performance digital products with clean architecture and modern tools.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <a
                            href="#projects"
                            onClick={(e) => scrollToSection(e, 'projects')}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A5759] text-[#F7E1D7] rounded-full font-bold shadow-md shadow-[#4A5759]/25 hover:bg-[#3B4648] hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                            View Work <ArrowRight size={16} />
                        </a>

                        <div className="flex items-center gap-2 px-3 py-2 bg-[#F7E1D7] border border-[#DEDBD2] rounded-full shadow-xs">
                            <a
                                href="https://github.com/Gladiolus-bat"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 text-[#4A5759] hover:text-[#FAF8F5] hover:bg-[#4A5759] rounded-full transition-all"
                                aria-label="GitHub">
                                <GithubIcon size={19} />
                            </a>
                            <a
                                href="https://linkedin.com/in/sabrinapradhan"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 text-[#4A5759] hover:text-[#FAF8F5] hover:bg-[#4A5759] rounded-full transition-all"
                                aria-label="LinkedIn">
                                <LinkedinIcon size={19} />
                            </a>
                            <a
                                href="mailto:pradhansabrina@gmail.com"
                                className="p-2 text-[#4A5759] hover:text-[#FAF8F5] hover:bg-[#4A5759] rounded-full transition-all"
                                aria-label="Email">
                                <Mail size={19} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hero Section: Real Image Hero Avatar */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]">
                    {/* Ambient Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#EDAFB8]/60 via-[#B0C4B1]/50 to-[#F7E1D7]/70 rounded-full blur-3xl transform scale-105"></div>

                    {/* Avatar Container Frame */}
                    <div className="relative w-full h-full flex items-center justify-center group">
                        <div className="w-full h-full relative flex items-center justify-center rounded-[2.5rem] overflow-hidden border-4 border-[#FAF8F5] shadow-2xl bg-[#FAF8F5]/80 transition-transform duration-500 group-hover:scale-102">
                            <img
                                src={avatarImg}
                                alt="Sabrina Pradhan - Avatar"
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-500"/>
                        </div>

                        {/* Floating Pill Badge */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#DEDBD2] shadow-xl flex items-center gap-2 text-xs font-bold text-[#4A5759]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#B0C4B1] animate-ping"></span>
                            Creative Developer
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#4A5759]/70 hover:text-[#4A5759] transition-colors"
                aria-label="Discover">
                <span className="text-xs font-bold tracking-wider uppercase">Discover</span>
                <ChevronDown size={22} className="animate-bounce" />
            </a>
        </section>
    );
}