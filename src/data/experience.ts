export interface Experience {
    id: string;
    title: string;
    period: string;
    highlights: string[];
    company: string;
    dotColor: string;
    borderHoverColor: string;
    periodBg: string;
}

export const experienceData: Experience[] = [
    {
        id: 'mercy-technology',
        title: 'MERN Stack Intern',
        period: 'Aug 2026 - Present',
        highlights: ["MERN Stack Intern at Mery Technology, currently working on transitioning FlatSathi from beta to a fully live production release.",
            "Contributing to full-stack development across the MongoDB, Express, React, and Node.js stack to stabilize and enhance core features.",
            "Collaborating with the development team to identify and resolve issues ahead of the public launch."
        ],
        company: 'Mercy Technology Pvt. Ltd.',
        dotColor: '#4A5759',
        borderHoverColor: 'hover:border-[#B0C4B1]',
        periodBg: 'bg-[#B0C4B1]/45',
    }, {
        id: 'islington-animanga',
        title: 'Head of Logistics',
        period: 'Jul 2026 - Present',
        highlights: ["Serving as Head of Logistics at Islington Animanga Community, overseeing planning for the upcoming award ceremony.",
            "Leading day-to-day club activities, including art sessions and creative workshops, to keep members engaged.",
            "Managing budgeting, certificate design, and promotional posters in preparation for the club's event."
        ],
        company: 'Islington Animanga Community',
        dotColor: '#B0C4B1',
        borderHoverColor: 'hover:border-[#EDAFB8]',
        periodBg: 'bg-[#EDAFB8]/40',
    }, {
        id: 'ing-skill-academy',
        title: 'Experience Ambassador',
        period: 'May 2025 - Jun 2025',
        highlights: ["Served as Experience Ambassador at ING Skill Academy, leading campus tours for prospective students and visitors.",
            "Communicated key details about college programs, facilities, and campus life to help visitors make informed decisions.",
            "Represented the institution as a first point of contact, creating a welcoming and informative visitor experience."
        ],
        company: 'ING SKill Academy',
        dotColor: '#EDAFB8',
        borderHoverColor: 'hover:border-[#B0C4B1]',
        periodBg: 'bg-[#B0C4B1]',
    }, {
        id: 'xiangtan-xuge',
        title: 'Web Developer',
        period: 'Mar 2025 - Jun 2025',
        highlights: ["Designed and built the company's website from the ground up, delivering a fully responsive, cross-device experience for desktop and mobile users.",
            "Optimized site performance and navigation, boosting user engagement across platforms.",
            "Collaborated remotely with an international client to deliver the project end-to-end, from planning to deployment."
        ],
        company: 'Xiangtan Xuge Commerce Co. Ltd.',
        dotColor: '#B0C4B1',
        borderHoverColor: 'hover:border-[#EDAFB8]',
        periodBg: 'bg-[#EDAFB8]',
    }
];