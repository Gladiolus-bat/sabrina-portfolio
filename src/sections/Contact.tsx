import { Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-[#4A5759] text-[#FAF8F5] relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-[#B0C4B1] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-[#EDAFB8] rounded-full blur-3xl opacity-25"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7E1D7] bg-[#3B4648] px-4 py-1.5 rounded-full border border-[#B0C4B1]/40">
                    Let's Connect
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-6 text-[#FAF8F5]">
                    Let's build something remarkable together.
                </h2>
                <p className="text-[#F7E1D7]/90 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    Have a project in mind, an opportunity to discuss, or simply want to say hello? I'd love to hear from you.
                </p>

                <a href="mailto:pradhansabrina32@gmail.com"
                    className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#EDAFB8] text-[#4A5759] rounded-full font-extrabold shadow-xl hover:bg-[#F7E1D7] hover:-translate-y-0.5 transition-all duration-200">
                    <Mail size={18} /> Say Hello
                </a>
            </div>
        </section>
    );
}