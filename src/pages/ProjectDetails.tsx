import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from "../data/projects";
import { GithubIcon } from "../components/icons";
import { ArrowLeft, ExternalLink, ShieldAlert, Lightbulb, CheckCircle2 } from 'lucide-react';

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
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A5759] text-[#FAF8F5] rounded-full font-bold text-sm shadow-md hover:bg-[#3B4648] hover:shadow-lg transition-all">
                                Live Demo <ExternalLink size={16} />
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7E1D7] border border-[#DEDBD2] text-[#4A5759] rounded-full font-bold text-sm hover:bg-[#EDAFB8]/50 transition-all">
                                <GithubIcon size={18} /> Source Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Image Container */}
                <div className="relative w-full rounded-3xl overflow-hidden border-2 border-[#DEDBD2] shadow-xl bg-[#DEDBD2]/40 mb-14 group">
                    <div className="w-full h-80 sm:h-[460px] relative overflow-hidden bg-[#DEDBD2]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A5759]/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="p-6 bg-[#F7E1D7]/50 rounded-3xl border border-[#DEDBD2] shadow-xs mb-14">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#4A5759] mb-3 flex items-center gap-2">
                        Technologies & Tools Used
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-[#FAF8F5] text-[#4A5759] border border-[#DEDBD2] font-bold text-xs sm:text-sm rounded-xl shadow-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* In-depth Details Grid */}
                <div className="grid md:grid-cols-3 gap-10 mb-14">
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#DEDBD2] shadow-xs">
                            <h2 className="text-2xl font-bold text-[#4A5759] mb-4">Project Overview</h2>
                            <p className="text-[#4A5759]/85 leading-relaxed text-base">
                                {project.fullDescription}
                            </p>
                        </section>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Challenge Card */}
                            <div className="p-6 bg-[#EDAFB8]/20 rounded-3xl border border-[#EDAFB8]/60">
                                <div className="w-10 h-10 rounded-xl bg-[#EDAFB8]/40 text-[#4A5759] flex items-center justify-center mb-3">
                                    <ShieldAlert size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-[#4A5759] mb-2">The Challenge</h3>
                                <p className="text-sm text-[#4A5759]/85 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution Card */}
                            <div className="p-6 bg-[#B0C4B1]/25 rounded-3xl border border-[#B0C4B1]">
                                <div className="w-10 h-10 rounded-xl bg-[#B0C4B1]/40 text-[#4A5759] flex items-center justify-center mb-3">
                                    <Lightbulb size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-[#4A5759] mb-2">The Solution</h3>
                                <p className="text-sm text-[#4A5759]/85 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Sidebar */}
                    <div className="md:col-span-1">
                        <div className="p-7 bg-[#F7E1D7]/50 rounded-3xl border border-[#DEDBD2] shadow-xs sticky top-28">
                            <h3 className="text-lg font-bold text-[#4A5759] mb-5">Key Highlights</h3>

                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-[#4A5759]/90 leading-relaxed">
                                        <CheckCircle2 size={18} className="text-[#4A5759] flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* More Projects Section */}
                <section className="pt-10 border-t border-[#DEDBD2]">
                    <h2 className="text-2xl font-bold text-[#4A5759] mb-8 text-center sm:text-left">
                        Explore More Projects
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {otherProjects.map((p) => (
                            <Link key={p.id} to={`/project/${p.id}`}
                                className="group p-5 bg-[#FAF8F5] hover:bg-[#F7E1D7]/60 border border-[#DEDBD2] hover:border-[#B0C4B1] rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-5">

                                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#DEDBD2] flex-shrink-0">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <div className="flex-1">
                                    <span className="text-[11px] font-bold text-[#4A5759] uppercase tracking-wide">{p.category}</span>
                                    <h4 className="font-bold text-[#4A5759] text-base group-hover:underline transition-all">{p.title}</h4>
                                    <p className="text-xs text-[#4A5759]/70 line-clamp-1 mt-1">{p.shortDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main >
        </div >
    );
}