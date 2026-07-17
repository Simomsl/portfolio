import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
    const items = [
        {
            date: "2026",
            title: "Stage - Développeur Full Stack",
            org: "Station A",
            desc: "Création et développement d'une plateforme de gestion des candidatures pour les programmes d'incubation au sein de l'entreprise Station A."
        },
        {
            date: "2025 - 2026",
            title: "Licence en Ingénierie des Systèmes Informatiques",
            org: "SupMTI | École supérieure de management, de télécommunication et d'informatique, Rabat",
            desc: "Spécialisation dans la conception et l'analyse des architectures logicielles, des réseaux et de l'ingénierie des systèmes complexes."
        },
        {
            date: "2024 - 2025",
            title: "Stage de développement - Création de site web",
            org: "Création de site web & Communication",
            desc: "Gestion de contenu web et optimisation ergonomique :",
            details: [
                "Rédaction et publication régulière d'articles de blog.",
                "Chargement et mise en page de textes, d'images et de vidéos en garantissant la compatibilité multi-supports (responsive).",
                "Veille technologique et concurrentielle pour anticiper les tendances et adapter le site."
            ]
        },
        {
            date: "2021 - 2024",
            title: "Technicien Spécialisé en Développement Digital (Option Full Stack)",
            org: "Institut Spécialisé de Technologie Appliquée (OFPPT NTIC), Rabat",
            desc: "Formation technique approfondie axée sur le développement backend (Laravel, PHP, Python, bases de données) et frontend (React, JavaScript, HTML/CSS)."
        },
        {
            date: "2020 - 2021",
            title: "Baccalauréat en Sciences Physiques",
            org: "Lycée Abi Bakr El Kadiri, Salé",
            desc: "Validation du diplôme d'études secondaires avec mention scientifique."
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Parcours</span>
                    <h2 className="section-title">
                        Parcours & Expériences. <br /><span>L'évolution de mes compétences.</span>
                    </h2>
                </div>

                <div className="timeline">
                    {items.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-meta">
                                <span className="timeline-date">{item.date}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                            </div>
                            <h4 className="timeline-org">{item.org}</h4>
                            <div className="timeline-desc">
                                <p>{item.desc}</p>
                                {item.details && (
                                    <ul>
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
