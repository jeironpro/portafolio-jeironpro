import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const CV_LANGUAGES = ['es', 'ca', 'en'];

export default function HeroSection() {
    const { t, i18n } = useTranslation();
    const ref = useRef(null);
    const dropdownRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);

    const handleClickOutside = useCallback((e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setCvOpen(false);
        }
    }, []);

    useEffect(() => {
        if (cvOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [cvOpen, handleClickOutside]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            ref={ref}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '6rem clamp(1.5rem, 8vw, 6rem) 6rem',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    textAlign: 'center',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                <p
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                        color: 'var(--color-primary)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem',
                        fontWeight: 500
                    }}
                >
                    {t('hero.role')}
                </p>

                <h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.05,
                        color: 'var(--color-text-primary)',
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em'
                    }}
                >
                    {t('hero.heading.before')}{' '}
                    <span
                        style={{
                            background: 'var(--color-accent-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        {t('hero.heading.highlight')}
                    </span>
                    <br />
                    {t('hero.heading.after')}
                </h1>

                <p
                    className="hero-bio"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                        color: 'var(--color-text-primary)',
                        maxWidth: '580px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.7,
                        fontWeight: 400
                    }}
                >
                    {t('hero.bio')}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href="#projects"
                        style={{
                            padding: '14px 32px',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'var(--color-primary)',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 30px rgba(var(--azul-principal-rgb), 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        {t('hero.ctaProjects')}
                    </a>
                    <div ref={dropdownRef} style={{ position: 'relative' }}>
                        <button
                            onClick={() => setCvOpen((prev) => !prev)}
                            style={{
                                padding: '14px 32px',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border-hover)',
                                background: 'var(--color-glass-bg)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                backdropFilter: 'blur(8px)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                lineHeight: 1
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--color-glass-bg-hover)';
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                            }}
                            onMouseLeave={(e) => {
                                if (!cvOpen) {
                                    e.currentTarget.style.background = 'var(--color-glass-bg)';
                                    e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                                }
                            }}
                            aria-label={t('hero.ctaDownloadCV')}
                            aria-expanded={cvOpen}
                        >
                            {t('hero.ctaDownloadCV')}
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: cvOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {cvOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 6px)',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    minWidth: '180px',
                                    background: 'rgba(var(--color-bg-rgb), 0.85)',
                                    backdropFilter: 'blur(20px) saturate(1.4)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                                    border: '1px solid var(--color-glass-border)',
                                    borderRadius: '12px',
                                    padding: '6px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                                    zIndex: 10,
                                    overflow: 'hidden'
                                }}
                            >
                                {CV_LANGUAGES.map((lang) => (
                                    <a
                                        key={lang}
                                        href={`/cv/cv-${lang}.pdf`}
                                        download
                                        onClick={() => setCvOpen(false)}
                                        style={{
                                            display: 'block',
                                            padding: '10px 16px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            color: 'var(--color-text-primary)',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.85rem',
                                            fontWeight: i18n.language === lang ? 600 : 400,
                                            background: i18n.language === lang
                                                ? 'rgba(var(--naranja-principal-rgb), 0.1)'
                                                : 'transparent',
                                            transition: 'background 0.2s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--color-glass-bg-hover)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = i18n.language === lang
                                                ? 'rgba(var(--naranja-principal-rgb), 0.1)'
                                                : 'transparent';
                                        }}
                                    >
                                        {t(`hero.cv.${lang}`)}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: visible ? 0.5 : 0,
                    transition: 'opacity 1s ease 1.5s'
                }}
            >
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {t('hero.scroll')}
                </span>
                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, var(--color-text-secondary), transparent)',
                        animation: 'scrollIndicator 2s ease-in-out infinite'
                    }}
                />
            </div>

            <style>{`
                @keyframes scrollIndicator {
                    0%, 100% { transform: scaleY(1); opacity: 1; }
                    50% { transform: scaleY(0.3); opacity: 0.3; }
                }
                @media (max-width: 768px) {
                    #hero {
                        padding-top: 3rem !important;
                    }
                    #hero .hero-bio {
                        font-size: 0.85rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
