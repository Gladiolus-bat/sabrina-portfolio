import havenImg from '../assets/haven.png';
import jmpImg from '../assets/javascript-mini-programs.png';
import xiangtanImg from '../assets/xinagtan-xuge.png';
import breezeImg from '../assets/breeze.png';
import dsaImg from '../assets/dsa-adventure.png';
import quickbiteImg from '../assets/quickbite.png';

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
        id: 'quickbite',
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
        image: quickbiteImg,
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
        image: xiangtanImg,
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
        image: jmpImg,
        githubLink: 'https://github.com/Gladiolus-bat/Mini-Programs',
        liveLink: 'https://gladiolus-bat.github.io/Mini-Programs/',
    }, {
        id: 'haven',
        title: 'Haven | Marketplace',
        shortDescription: 'A multi-page e-commerce marketplace created as part of the Mini Internet, featuring product browsing, shopping interactions, and links connecting users to websites created by other participating teams.',
        category: 'E-Commerce',
        badge: 'Mini Internet',
        tags: ['HTML', 'CSS', 'JavaScript'],
        fullDescription: 'Haven is a frontend e-commerce marketplace developed for the WebDev Community’s "Build the Mini Internet" event. The platform allows users to browse products by category, view product details and seller profiles, interact with a shopping cart, and navigate through login, registration, and payment interfaces. As part of the Mini Internet concept, Haven also connects to websites created by other participating teams, creating an interconnected network of independent projects rather than functioning as an isolated website.',
        challenge: 'Building a multi-page marketplace with vanilla JavaScript required coordinating navigation, shared layouts, product interactions, forms, and responsive design across multiple pages. An additional challenge was integrating external team websites into the platform while maintaining a seamless experience and making the different projects feel like part of one interconnected web ecosystem.',
        solution: 'Structured Haven into interconnected HTML pages with shared CSS and JavaScript functionality. Implemented product browsing, filtering, cart interactions, client-side form validation, and responsive layouts. External links to participating teams’ websites were incorporated into the platform, allowing users to move between different projects and demonstrating the interconnected "Mini Internet" concept.',
        features: ['Multi-page e-commerce interface', 'Category-based browsing', 'Shopping cart', 'Payment Interface', 'Interactive JavaScript features', 'Interconnected Mini Internet ecosystem'],
        image: havenImg,
        githubLink: 'https://github.com/Gladiolus-bat/Haven',
        liveLink: 'https://gladiolus-bat.github.io/Haven/',
    }, {
        id: 'breeze',
        title: 'Breeze | Hotel Booking System',
        shortDescription: 'A dual-sided hotel booking platform that connects travellers with accommodation providers, allowing guests to discover and book rooms while hotel owners manage properties, rooms, bookings, and revenue.',
        category: 'Full Stack',
        badge: 'MERN Stack',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
        fullDescription: 'Breeze is a full-stack hotel booking platform designed around two user experiences: travellers and hotel owners. Travellers can browse available rooms, search by location and dates, check availability, make bookings, manage their profiles, and view their booking history. Hotel owners can register their properties, add and manage rooms, upload room images, control room availability, and monitor bookings and revenue through an owner dashboard.',
        challenge: 'Building a dual-sided platform required coordinating two different user workflows while keeping authentication, authorisation, hotel data, room availability, bookings, and user information consistent. Another challenge was handling image uploads and protecting owner-only operations such as managing rooms and viewing hotel bookings.',
        solution: 'Implemented a RESTful Express backend with MongoDB and Mongoose models for users, hotels, rooms, and bookings. JWT-based authentication and role-based middleware were used to restrict owner functionality. Cloudinary was integrated for image storage, while React Context was used to manage authentication and application navigation on the frontend.',
        features: ['Traveller and hotel-owner workflows', 'JWT suthentication', 'Hotel registration', 'Room browsing and booking', 'Hotel owner dashboard', 'Room availability management', 'Profile management', 'Cloudinary integration'],
        image: breezeImg,
        githubLink: 'https://github.com/Gladiolus-bat/Breeze',
        liveLink: '',
    }, {
        id: 'dsa-adventure',
        title: 'DSA Adventure',
        shortDescription: 'An interactive educational game that helps learners practise fundamental Data Structures and Algorithms through engaging mini-games.',
        category: 'Educational Game',
        badge: 'Java Swing',
        tags: ['Java', 'DSA', 'Java Swing', 'Algorithms', 'Data Structures'],
        fullDescription: 'DSA Adventure is an interactive Java Swing educational game designed to make learning fundamental Data Structures and Algorithms more engaging. Instead of relying only on theoretical learning, players practise concepts through hands-on mini-games covering Bubble Sort, Stacks, Queues, and Binary Search. The game includes score tracking, lives, progress tracking, tutorials, randomised challenges, and visual feedback.',
        challenge: 'Learning Data Structures and Algorithms can be difficult for beginners when concepts are taught mainly through theory. Students often need practical ways to understand how algorithms and data structures work and how their operations affect the result.',
        solution: 'DSA Adventure turns fundamental DSA concepts into interactive challenges where players learn by performing algorithmic operations themselves. Each mini-game focuses on a specific concept, allowing learners to practise sorting, searching, stack operations, and queue operations while receiving immediate feedback and tracking their progress.',
        features: ['Four interactive DSA mini-games', 'Bubble Sort challenge', 'Stack PUSH and POP challenge', 'Queue ENQUEUE and DEQUEUE challenge', 'Binary Search challenge', 'Score Tracking', 'Tutorial for each game', 'Visual feedback for each game', 'Reset and replay functionality'],
        image: dsaImg,
        githubLink: 'https://github.com/Gladiolus-bat/DSA-Adventure',
        liveLink: '',
    },
];