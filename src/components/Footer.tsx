import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Footer() {
    return (
        <footer className="bg-[#3B4648] text-[#DEDBD2] py-12 px-6 border-t border-[#4A5759]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F7E1D7]">
                        Sabrina Pradhan
                    </span>
                    <span className="text-[#B0C4B1]">
                        •
                    </span>
                    <span>
                        Full-stack Developer
                    </span>
                </div>

                <p className="text-xs text-[#DEDBD2]/80">
                    © 2026 Sabrina Pradhan. Built with React & Tailwind CSS.
                </p>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/Gladiolus-bat" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className="p-2 text-[#DEDBD2] hover:text-[#EDAFB8] hover:bg-[#4A5759] rounded-full transition-colors">
                        <GithubIcon size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/sabrina-pradhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="p-2 text-[#DEDBD2] hover:text-[#EDAFB8] hover:bg-[#4A5759] rounded-full transition-colors">
                        <LinkedinIcon size={18} />
                    </a>
                    <a href="mailto:pradhansabrina32@gmail.com" aria-label="Email"
                        className="p-2 text-[#DEDBD2] hover:text-[#EDAFB8] hover:bg-[#4A5759] rounded-full transition-colors">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}