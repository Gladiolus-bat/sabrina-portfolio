import { useEffect, useState } from 'react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('home');
}