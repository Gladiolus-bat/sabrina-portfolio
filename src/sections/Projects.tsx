import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-[#F7E1D7]/50 border-t border-[#DEDBD2]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A5759] bg-[#EDAFB8]/40 px-4 py-1.5 rounded-full border border-[#EDAFB8]">
                        Portfolio Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A5759] mt-3">
                        Featured Projects
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5759]/80 mt-2 max-w-xl mx-auto">
                        Click "View Project Details" on any card to view the in-depth project details and architecture breakdown.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#DEDBD2] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:border-[#B0C4B1]">

                            {/* Project Image Div */}
                            <div className="h-52 w-full relative overflow-hidden bg-[#DEDBD2]">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-[#4A5759]/60 p-4">
                                        <ImageIcon size={32} className="mb-2 opacity-50" />
                                        <span className="text-xs font-medium">Custom Project Image</span>
                                    </div>
                                )}

                                {/* Category Pill Tag */}
                                <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-[#4A5759] border border-[#DEDBD2] shadow-xs">
                                    {project.badge}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-[#4A5759] mb-2 group-hover:text-[#4A5759] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#4A5759]/80 text-sm mb-5 leading-relaxed">
                                        {project.shortDescription}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-xs font-bold px-2.5 py-1 bg-[#B0C4B1]/35 text-[#4A5759] rounded-lg">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-xs font-bold px-2 py-1 bg-[#EDAFB8]/35 text-[#4A5759] rounded-lg">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Redirect to Project Details Page */}
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4A5759] hover:text-[#3B4648] group-hover:translate-x-0.5 transition-all">
                                        View Project Details <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
