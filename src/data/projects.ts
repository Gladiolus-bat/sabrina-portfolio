export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    category: string;
    badge: string;
    tags: string[];
    fullDescription: string;
    challenge: string;
    solution: string;
    features: string[];
    image: string;
    githubLink: string;
    liveLink: string;
}

export const projectsData: Project[] = [
    {
        id: '',
        title: '',
        shortDescription: '',
        category: '',
        badge: '',
        tags: ['', '', ''],
        fullDescription: '',
        challenge: '',
        solution: '',
        features: ['', '', ''],
        image: '',
        githubLink: '',
        liveLink: '',
    }
];