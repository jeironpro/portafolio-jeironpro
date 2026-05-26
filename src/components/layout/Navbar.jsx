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
            {/* Barra de progreso de scroll */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 101,
                    height: '2px',
                    background: 'var(--color-glass-border)'
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: `${scrollProgress * 100}%`,
                        background: 'var(--color-accent-gradient)',
                        transition: 'width 0.1s linear',
                        borderRadius: '0 1px 1px 0'
                    }}
                />
            </div>

            {/* Navegacion flotante tipo pill */}
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
                        className="nav-pill-btn"
                        style={{
                            padding: '0.4rem 0.9rem',
                            border: 'none',
                            borderRadius: 'var(--radius-full)',
                            background: activeSection === s.id
                                ? 'rgba(var(--naranja-principal-rgb), 0.12)'
                                : 'transparent',
                            color: activeSection === s.id
                                ? 'var(--color-text-primary)'
                                : 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.8rem',
                            fontWeight: activeSection === s.id ? 600 : 450,
                            cursor: 'pointer',
                            letterSpacing: '0.01em',
                            transition: 'all 0.25s ease',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => {
                            if (activeSection !== s.id) {
                                e.currentTarget.style.color = 'var(--color-text-primary)';
                                e.currentTarget.style.background = 'var(--color-glass-bg)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeSection !== s.id) {
                                e.currentTarget.style.color = 'var(--color-text-muted)';
                                e.currentTarget.style.background = 'transparent';
                            }
                        }}
                    >
                        {t(s.labelKey)}
                    </button>
                ))}
                <LangSwitcher />
            </nav>
        </>
    );
}
