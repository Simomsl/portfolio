import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <main>
                <Profile />
                <SkillsGrid />
                <ExperienceTimeline />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
