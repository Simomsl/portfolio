import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'glass' : ''}`} style={{
            background: scrolled ? 'var(--glass-bg)' : 'transparent',
            borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
        }}>
            <div className="navbar-container">
                <a href="#" className="navbar-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <Terminal size={18} />
                    <span>M. Marghani</span>
                </a>
                <div className="navbar-menu">
                    <a href="#profile" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollTo('profile'); }}>Profil</a>
                    <a href="#skills" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Compétences</a>
                    <a href="#experience" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Parcours</a>
                    <a href="#contact" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
                </div>
            </div>
        </nav>
    );
}
