import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProfile = (e) => {
        e.preventDefault();
        document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    };

    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <motion.div 
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="hero-subtitle">
                    Développeur Web Full Stack
                </motion.div>
                <motion.h1 variants={itemVariants} className="hero-title">
                    Mohammed <br />El Marghani
                </motion.h1>
                <motion.p variants={itemVariants} className="hero-tagline">
                    Création d'applications web modernes et performantes. Spécialisé en React et Laravel pour allier fluidité front-end et robustesse back-end.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <a href="#contact" className="cta-button" onClick={scrollToContact}>
                        Me contacter <ArrowRight size={16} />
                    </a>
                    <a href="#profile" className="cta-link" onClick={scrollToProfile}>
                        En savoir plus
                    </a>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <span>Défiler pour explorer</span>
                <div className="scroll-indicator-dot"></div>
            </motion.div>
        </section>
    );
}
