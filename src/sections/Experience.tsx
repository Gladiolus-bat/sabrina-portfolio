import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-[#FAF8F5]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A5759] bg-[#B0C4B1]/35 px-4 py-1.5 rounded-full border border-[#B0C4B1]">
                        Career Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A5759] mt-3">Work Experience</h2>
                </div>

                <div className="relative border-l-2 border-[#DEDBD2] ml-4 md:ml-6 pl-6 space-y-12">
                    {experienceData.map((job) => (
                        <div key={job.id} className="relative group">
                            <div
                                className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-[#FAF8F5] shadow-sm"
                                style={{ backgroundColor: job.dotColor }}></div>
                            <div className={`bg-[#F7E1D7]/60 p-6 rounded-3xl border border-[#DEDBD2] shadow-xs transition-all ${job.borderHoverColor}`}>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                    <h3 className="text-lg font-bold text-[#4A5759]">{job.title}</h3>
                                    <span className={`text-xs font-bold px-3 py-1 text-[#4A5759] rounded-full w-fit ${job.periodBg}`}>
                                        {job.period}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-[#4A5759]/80 mb-4">
                                    <Briefcase size={15} />
                                    {job.company}
                                </div>
                                <ul className="list-disc list-inside text-sm text-[#4A5759]/85 space-y-2 leading-relaxed">
                                    {job.highlights.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}