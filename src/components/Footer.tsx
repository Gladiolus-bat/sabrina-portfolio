import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <span>
                        Sabrina Pradhan
                    </span>
                    <span>
                        •
                    </span>
                    <span>
                        Full-stack Developer
                    </span>
                </div>

                <p>
                    © 2026 Sabrina Pradhan. Built with React & Tailwind CSS.
                </p>

                <div>
                    <a href="https://github.com/Gladiolus-bat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/sabrina-pradhan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                    </a>
                    <a href="mailto:pradhansabrina32@gmail.com" aria-label="Email">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}