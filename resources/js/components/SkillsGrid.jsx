import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Settings } from 'lucide-react';

export default function SkillsGrid() {
    const categories = [
        {
            title: "Frontend & Design",
            icon: <Layout size={24} />,
            skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
        },
        {
            title: "Backend & Bases de données",
            icon: <Code size={24} />,
            skills: ["Laravel", "Python", "Java", "MySQL", "Architecture API"]
        },
        {
            title: "Outils & Méthodologie",
            icon: <Settings size={24} />,
            skills: ["Git & GitHub", "Visual Studio Code", "Méthodologie Agile", "Gestion de projet", "Gestion de temps", "Travail en équipe"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <section id="skills" className="section" style={{ background: '#070708' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Compétences</span>
                    <h2 className="section-title">
                        Un éventail technique. <br /><span>De l'interface à la base de données.</span>
                    </h2>
                </div>

                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {categories.map((category, index) => (
                        <motion.div 
                            key={index}
                            className="skills-category"
                            variants={cardVariants}
                        >
                            <h3 className="category-title">
                                {category.icon}
                                {category.title}
                            </h3>
                            <div className="skills-list">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
