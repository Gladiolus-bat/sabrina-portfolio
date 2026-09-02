import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from "../data/projects";
import { GithubIcon } from "../components/icons";
import { ArrowLeft } from 'lucide-react';

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
                
            </main>
        </div>
    );
}