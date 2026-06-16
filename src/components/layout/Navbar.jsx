import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';

const SECTIONS = [
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'contact', labelKey: 'nav.contact' }
];

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [showFloating, setShowFloating] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const currentY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docHeight > 0 ? Math.min(currentY / docHeight, 1) : 0);
        setScrolled(currentY > 50);
        setShowFloating(currentY > window.innerHeight * 0.6);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let best = activeSection;
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        best = entry.target.id;
                    }
                }
                if (best) setActiveSection(best);
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );

        for (const s of SECTIONS) {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [activeSection]);

    const scrollTo = (id) => {
        if (window.location.hash === '#style-guide') {
            window.history.pushState(null, '', window.location.pathname + window.location.search);
            window.dispatchEvent(new HashChangeEvent('hashchange'));
            setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
            return;
        }
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="progress-bar-track">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            <nav
                className="nav-pill"
                style={{
                    position: 'fixed',
                    top: '0.9rem',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${showFloating || scrolled ? '0' : '-120%'})`,
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.15rem',
                    padding: '0.35rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(var(--color-bg-rgb), 0.7)',
                    backdropFilter: 'blur(20px) saturate(1.4)',
                    WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                    border: '1px solid var(--color-glass-border)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {SECTIONS.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className={`nav-pill-btn${activeSection === s.id ? ' active' : ''}`}
                        aria-current={activeSection === s.id ? 'true' : undefined}
                    >
                        {t(s.labelKey)}
                    </button>
                ))}
                <LangSwitcher />
            </nav>
        </>
    );
}
