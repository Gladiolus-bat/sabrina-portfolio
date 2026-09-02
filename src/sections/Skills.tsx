const skills = [
    { name: 'React', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'Html', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'Css', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'TypeScript', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'JavaScript', category: 'Frontend', bg: '#B0C4B1' },
    { name: 'Next.js', category: 'Fullstack', bg: '#C5D3E8' },
    { name: 'Tailwind CSS', category: 'Styling', bg: '#EDAFB8' },
    { name: 'Java', category: 'Backend', bg: '#D5C6E0' },
    { name: 'jsp', category: 'Backend', bg: '#D5C6E0' },
    { name: 'Python', category: 'Backend', bg: '#D5C6E0' },
    { name: 'Node.js', category: 'Backend', bg: '#D5C6E0' },
    { name: 'Express.js', category: 'Backend', bg: '#D5C6E0' },
    { name: 'MongoDB', category: 'Database', bg: '#F7D6BF' },
    { name: 'MySQL', category: 'Database', bg: '#F7D6BF' },
    { name: 'PostgreSQL', category: 'Database', bg: '#F7D6BF' },
    { name: 'Git', category: 'Version Control', bg: '#F4E2BB' },
    { name: 'GitHub', category: 'Version Control', bg: '#F4E2BB' },
    { name: 'Docker', category: 'Containerization', bg: '#A2D2DF' },
    { name: 'Figma', category: 'Design', bg: '#E3D5CA' },
    { name: 'Clip Studio Paint', category: 'Design', bg: '#E3D5CA' },
    { name: 'Adobe Photoshop', category: 'Design', bg: '#E3D5CA' },
    { name: 'Adobe Illustrator', category: 'Design', bg: '#E3D5CA' },
    { name: 'Canva', category: 'Design', bg: '#E3D5CA' },
    { name: 'VS Code', category: 'IDE', bg: '#DEDBD2' },
    { name: 'IntelliJ IDEA', category: 'IDE', bg: '#DEDBD2' },
    { name: 'Arduino IDE', category: 'IDE', bg: '#DEDBD2' },
    { name: 'Cursor', category: 'IDE', bg: '#DEDBD2' },
    { name: 'Jira', category: 'Project Management', bg: '#FFCFD2' },
    { name: 'Trello', category: 'Project Management', bg: '#FFCFD2' },
    { name: 'AWS', category: 'Cloud', bg: '#C8D6AF' },
    { name: 'google cloud console', category: 'Cloud', bg: '#C8D6AF' },
    { name: 'Netlify', category: 'Cloud', bg: '#C8D6AF' },
    { name: 'GitHub Pages', category: 'Cloud', bg: '#C8D6AF' },
    { name: 'Power BI', category: 'Data Visualization', bg: '#F0E68C' },
    { name: 'n8n' , category: 'Automation', bg: '#D3E4CD' },
    { name: 'Claude', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'ChatGPT', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'Antigravity', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'Gemini', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'Perplexity', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'Nano Banana', category: 'AI / LLM', bg: '#A2D2DF' },
    { name: 'Google AI Studio', category: 'AI / LLM', bg: '#A2D2DF' },
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