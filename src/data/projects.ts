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
        id: 'management-system',
        title: 'Quickbite | Food Management System',
        shortDescription: 'A web-based food pre-ordering platform that helps college students order meals in advance and avoid long canteen queues.',
        category: 'Web Application',
        badge: 'Full Stack',
        tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'JSP', 'MySQL'],
        fullDescription: 'QuickBite is a full-stack food service management system designed for college canteens. It allows students to browse menus from multiple campus outlets, add items to a cart, place instant or scheduled orders, save favourites, and track their order history. Kitchen staff can manage incoming orders and update preparation statuses, while administrators can manage customers, menus, outlets, feedback, and sales reports.',
        challenge: 'Developing a role-based food ordering system with separate workflows for customers, kitchen staff, and administrators, while keeping order management, menu data, authentication, and database interactions properly connected.',
        solution: 'Implemented a structured MVC architecture using Jakarta EE, JSP, and Servlets, with MySQL for persistent data storage. Separate role-based interfaces and controllers were created for customers, kitchen staff, and administrators, while database operations were organised through dedicated data access components.',
        features: ['Multi-outlet food browsing', 'Search and filter menu items', 'Instant and scheduled orders', 'Profile and order history management',
            'Favourite food items', 'Real-time order status management', 'Role-based authentication', 'Admin menu and outlet management' 
        ],
        image: '',
        githubLink: 'https://github.com/Swornadt/quickbite',
        liveLink: '',
    }, {
        id: 'xiangtan-xuge-commerce',
        title: 'Xiangtan Xuge Commerce Co. Ltd.',
        shortDescription: 'A B2B product showcase website for an overseas commerce company, allowing international customers to explore industrial products and contact the company for purchase enquiries.',
        category: 'B2B Website',
        badge: 'Overseas Project',
        tags: ['HTML', 'CSS', 'JavaScript'],
        fullDescription: 'A professional B2B website developed for Xiangtan Xuge Commerce Co., Ltd., an overseas supplier serving customers worldwide. The website showcases a wide range of products including construction machinery parts, equipment spare parts, electronic components, automobile parts, hardware tools, safety equipment, and building materials. Rather than providing direct online purchasing, the website guides interested customers towards contacting the company for product enquiries and purchases.',
        challenge: 'The main challenge was designing a professional online presence for an overseas B2B company whose products span several different industries. The website needed to present a large and diverse product range clearly while building trust with international customers and making it easy for potential buyers to enquire about products.',
        solution: 'Created a structured and responsive corporate website with dedicated product categories, company information, business strengths, and contact sections. Products are presented as a catalogue for customers to browse, while prominent contact options allow interested buyers to directly reach the company and proceed with their purchase enquiries.',
        features: ['Product catalogue', 'Company profile', 'International customer focus', 'Direct contact and enquiry options', 'Responsive design'],
        image: '',
        githubLink: '',
        liveLink: 'https://xiangtanxugecommerce.com/',
    }, {
        id: 'javascript-mini-programs',
        title: 'JavaScript Mini Programs',
        shortDescription: 'A collection of interactive web-based mini applications built to practise JavaScript fundamentals, DOM manipulation, event handling, timers, and API integration.',
        category: 'Web Development',
        badge: 'Javascript',
        tags: ['HTML', 'CSS', 'JavaScript', 'DOM', 'API Integration'],
        fullDescription: 'A collection of interactive browser-based mini applications developed using HTML, CSS, and modern JavaScript. The project includes a Counter, Number Guessing Game, Dice Roller, Temperature Converter, Digital Clock, Stopwatch, Calculator, Rock Paper Scissors, and a Weather App. It demonstrates practical use of JavaScript fundamentals, DOM manipulation, event-driven programming, timers, user input validation, dynamic content rendering, and API requests.',
        challenge: 'The main challenge was implementing several different types of interactive applications while maintaining consistent behaviour and a responsive interface. Each mini-project required different JavaScript concepts, including event handling, timers, random number generation, input validation, dynamic DOM updates, and external API communication.',
        solution: 'Built each mini-program as an independent interactive module using vanilla JavaScript, with reusable HTML and CSS patterns across the collection. JavaScript event listeners and DOM manipulation were used for user interactions, while Fetch API was used to retrieve real-time weather data from the OpenWeather API. Responsive layouts were implemented to ensure the applications remained usable across different screen sizes.',
        features: ['Counter', 'Number Guessing Game', 'Dice Roller', 'Temperature Converter', 'Digital Clock', 'Stopwatch', 'Calculator', 'Rock Paper Scissors', 'Real-time Weather App'],
        image: '',
        githubLink: 'https://github.com/Gladiolus-bat/Mini-Programs',
        liveLink: 'https://gladiolus-bat.github.io/Mini-Programs/',
    }, {
        id: '',
        title: '',
        shortDescription: '',
        category: '',
        badge: '',
        tags: [''],
        fullDescription: '',
        challenge: '',
        solution: '',
        features: [''],
        image: '',
        githubLink: '',
        liveLink: '',
    }, {
        id: '',
        title: '',
        shortDescription: '',
        category: '',
        badge: '',
        tags: [''],
        fullDescription: '',
        challenge: '',
        solution: '',
        features: [''],
        image: '',
        githubLink: '',
        liveLink: '',
    }, {
        id: '',
        title: '',
        shortDescription: '',
        category: '',
        badge: '',
        tags: [''],
        fullDescription: '',
        challenge: '',
        solution: '',
        features: [''],
        image: '',
        githubLink: '',
        liveLink: '',
    },
];