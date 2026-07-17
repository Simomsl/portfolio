import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div>
                        <p>© 2026 Mohammed El Marghani. Tous droits réservés.</p>
                        <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
                            Développé avec React, Laravel, Vite & Framer Motion. Inspiré par les lignes de design Apple.
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#profile" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' }); }}>Profil</a>
                        <a href="#skills" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Compétences</a>
                        <a href="#experience" className="footer-link" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>Parcours</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
