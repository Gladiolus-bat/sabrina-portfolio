import { type MouseEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

    return (
        <div className="bg-[#FAF8F5] text-[#4A5759] font-sans selection:bg-[#EDAFB8]/40 selection:text-[#4A5759] min-h-screen">
            <Navbar />

            <main className="flex-grow">
                
            </main>

            <Footer />
        </div>
    )
}