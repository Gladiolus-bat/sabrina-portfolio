import { useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from "../data/projects";
import { GithubIcon } from "../components/icons";

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

    );
}