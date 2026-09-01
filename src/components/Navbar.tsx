import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
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
                const element = document.getElementById(sectionId);
                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionHeight = element.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(sectionId === "skills" ? "about" : sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offsetTop =
                element.getBoundingClientRect().top + window.scrollY - 200;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <header>
            <nav>
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                        >
                            {isActive && (
                                <motion.div layoutId="flowingActiveTabPill"
                                    className=""
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30,
                                    }} />
                            )}

                            <span className={`transition-colors duration-200 ${isActive ? 'text-[#F7E1D7]' : 'text-[#4A5759]/80 hover:text-[#4A5759]'}`}
                            >
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </nav>
        </header>
    );
}
