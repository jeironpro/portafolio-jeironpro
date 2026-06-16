import { useState, useEffect, lazy, Suspense } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import ProjectModal from './components/ui/ProjectModal';
import StyleGuidePage from './pages/StyleGuidePage';

const BackgroundCanvas = lazy(() => import('./components/scene/BackgroundCanvas'));

function Portfolio() {
    return (
        <>
            <Suspense fallback={null}>
                <BackgroundCanvas />
            </Suspense>
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
            <ProjectModal />
        </>
    );
}

export default function App() {
    const [showStyleGuide, setShowStyleGuide] = useState(() => window.location.hash === '#style-guide');

    useEffect(() => {
        const onHashChange = () => setShowStyleGuide(window.location.hash === '#style-guide');
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return (
        <ErrorBoundary>
            {showStyleGuide ? <StyleGuidePage /> : <Portfolio />}
        </ErrorBoundary>
    );
}
