import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: null, text: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, text: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({ type: 'success', text: data.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                // validation or backend error
                const errorMsg = data.message || "Une erreur s'est produite lors de l'envoi.";
                const validationErrors = data.errors ? Object.values(data.errors).flat().join(' ') : null;
                setStatus({ type: 'error', text: validationErrors || errorMsg });
            }
        } catch (error) {
            setStatus({ type: 'error', text: "Impossible de se connecter au serveur. Veuillez réessayer plus tard." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section" style={{ background: '#070708' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">
                        Commençons un projet. <br /><span>Échangeons sur vos idées.</span>
                    </h2>
                </div>

                <div className="contact-grid">
                    <motion.div 
                        className="contact-form-container glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    >
                        {status.type && (
                            <div className={`form-message ${status.type}`}>
                                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                <span>{status.text}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Nom complet</label>
                                <input 
                                    className="form-input" 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Ex: John Doe"
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Adresse email</label>
                                <input 
                                    className="form-input" 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Ex: john@example.com"
                                    disabled={loading}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea 
                                    className="form-textarea" 
                                    id="message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Décrivez votre projet ou votre demande..."
                                    disabled={loading}
                                ></textarea>
                            </div>

                            <button className="submit-btn" type="submit" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        Envoyer le message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    <div className="contact-info-cards">
                        <motion.a 
                            href="mailto:mohammedelmarghani90@gmail.com" 
                            className="contact-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="contact-card-icon">
                                <Mail size={24} />
                            </div>
                            <div className="contact-card-content">
                                <h4>Email</h4>
                                <p>mohammedelmarghani90@gmail.com</p>
                            </div>
                        </motion.a>

                        <motion.a 
                            href="tel:+212608395990" 
                            className="contact-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="contact-card-icon">
                                <Phone size={24} />
                            </div>
                            <div className="contact-card-content">
                                <h4>Téléphone</h4>
                                <p>+212 608 395 990</p>
                            </div>
                        </motion.a>

                        <motion.div 
                            className="contact-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <div className="contact-card-icon">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-card-content">
                                <h4>Localisation</h4>
                                <p>Maroc, Salé, Sidi Moussa</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
