import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from "../data/projects";
import { GithubIcon } from "../components/icons";
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-3xl font-bold text-[#4A5759] mb-4">Project Not Found</h1>
                <p className="text-[#4A5759]/80 mb-6">The project you are looking for does not exist.</p>
                <Link to="/" className="px-6 py-3 bg-[#4A5759] text-[#FAF8F5] rounded-full font-bold shadow-md hover:bg-[#3B4648] transition-all">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    const otherProjects = projectsData.filter((p) => p.id !== id);

    return (
        <div className="bg-[#FAF8F5] text-[#4A5759] font-sans selection:bg-[#B0C4B1]/50 selection:text-[#4A5759] min-h-screen pb-24">

            {/* Top Floating Back Bar */}
            <div className="sticky top-6 z-40 max-w-5xl mx-auto px-6 mb-8 pointer-events-none">
                <button
                    onClick={() => navigate('/')}
                    className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#DEDBD2] text-[#4A5759] font-bold text-sm rounded-full shadow-lg hover:bg-[#F7E1D7] hover:shadow-xl transition-all duration-200">
                    <ArrowLeft size={16} className="text-[#4A5759]" /> Back to Portfolio
                </button>
            </div>

            <main className="max-w-5xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#4A5759] bg-[#B0C4B1]/35 px-3.5 py-1.5 rounded-full border border-[#B0C4B1]">
                            {project.category}
                        </span>
                        <span className="text-xs font-bold text-[#4A5759] bg-[#EDAFB8]/35 px-3 py-1.5 rounded-full border border-[#EDAFB8]">
                            {project.badge}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4A5759] mb-4 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-lg sm:text-xl text-[#4A5759]/80 max-w-3xl leading-relaxed mb-6">
                        {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A5759] text-[#FAF8F5] rounded-full font-bold text-sm shadow-md hover:bg-[#3B4648] hover:shadow-lg transition-all">
                            Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7E1D7] border border-[#DEDBD2] text-[#4A5759] rounded-full font-bold text-sm hover:bg-[#EDAFB8]/50 transition-all">
                            <GithubIcon size={18} /> Source Code
                        </a>
                    </div>
                </div>


            </main>
        </div>
    );
}