const skills = [
    { name: 'React', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'Next.js', category: 'Fullstack', bg: '#DEDBD2' },
    { name: 'Tailwind CSS', category: 'Styling', bg: '#EDAFB8' },
    { name: 'JavaScript', category: 'Backend', bg: '#B0C4B1' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-10 bg-[#DEDBD2]/40 border-y border-[#DEDBD2] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4A5759]/80 bg-[#FAF8F5] px-4 py-1 rounded-full border border-[#DEDBD2]">
                    Technologies & Stack
                </span>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#ECE9E0] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#ECE9E0] to-transparent z-10 pointer-events-none"></div>

                <div className="animate-marquee flex items-center gap-4 py-2">
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={`${skill.name}-${index}`} className="flex items-center gap-3 px-5 py-2.5 bg-[#FAF8F5] border border-[#DEDBD2] rounded-full shadow-xs hover:border-[#B0C4B1] hover:shadow-md transition-all whitespace-nowrap cursor-default">
                            <span className="text-sm font-bold text-[#4A5759]">{skill.name}</span>
                            <span
                                className="text-[10px] px-2.5 py-0.5 rounded-full font-bold text-[#4A5759]"
                                style={{ backgroundColor: skill.bg, opacity: 0.85 }}>
                                {skill.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}