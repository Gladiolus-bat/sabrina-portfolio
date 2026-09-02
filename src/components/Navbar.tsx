import { useEffect, useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("home");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== '/') return;

        const sections = [
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "contact",
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 220;

            for (const sectionId of sections) {
                const elements = document.getElementById(sectionId);
                if (elements) {
                    const sectionTop = elements.offsetTop;
                    const sectionHeight = elements.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(sectionId === "skills" ? "home" : sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop =
                        element.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
            setActiveSection(id);
        }
    };

    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto">
            <nav className="flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white/[0.05] backdrop-blur-xl border border-white/30 rounded-full shadow-[0_8px_32px_rgba(74,87,89,0.08)]">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className="relative px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors duration-200 outline-none select-none z-10">
                            {/* Smooth flowing liquid indicator pill */}
                            {isActive && (
                                <motion.div layoutId="flowingActiveTabPill"
                                    className="absolute inset-0 bg-[#4A5759] rounded-full shadow-md shadow-[#4A5759]/25 -z-10"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 420,
                                        damping: 32,
                                    }} />
                            )}

                            <span className={`transition-colors duration-200 ${isActive ? 'text-[#F7E1D7]' : 'text-[#4A5759]/80 hover:text-[#4A5759]'}`}>
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </nav>
        </header>
    );
}
