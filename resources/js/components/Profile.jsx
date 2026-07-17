import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export default function Profile() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <section id="profile" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Profil</span>
                    <h2 className="section-title">
                        Passionné de technologie. <br /><span>Dédié à l'excellence.</span>
                    </h2>
                </div>
                
                <div className="profile-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                    >
                        <p className="profile-highlight">
                            "Mettre à profit mes compétences techniques pour concevoir des applications dynamiques et participer à des projets innovants tout en développant continuellement mes connaissances."
                        </p>
                        <p className="profile-text" style={{ marginBottom: '1.5rem' }}>
                            Développeur web junior, je suis titulaire d'une <strong>Licence en Ingénierie des Systèmes Informatiques (ISI)</strong> et diplômé en tant que <strong>Technicien Spécialisé en Développement Digital</strong> à l'OFPPT NTIC de Rabat.
                        </p>
                        <p className="profile-text">
                            Intéressé par le développement web et l'exploration de nouvelles technologies, j'allie méthodologies agiles et rigueur technique pour concevoir des applications web réactives, élégantes et structurées de bout en bout.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className="profile-card glass"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                    >
                        <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '0.5rem' }}>Coordonnées & Infos</h3>
                        
                        <div className="info-item">
                            <MapPin className="info-icon" size={20} />
                            <div className="info-content">
                                <h4>Localisation</h4>
                                <p>Maroc, Salé, Sidi Moussa</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" size={20} />
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>mohammedelmarghani90@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" size={20} />
                            <div className="info-content">
                                <h4>Téléphone</h4>
                                <p>+212 608 395 990</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Globe className="info-icon" size={20} />
                            <div className="info-content">
                                <h4>Langues</h4>
                                <p>Arabe (Maternelle) • Français (Maitrise) • Anglais (Intermédiaire)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
