import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useVisibility } from '../../hooks/useVisibility';

const CV_LANGUAGES = ['es', 'ca', 'en'];

export default function HeroSection() {
    const { t, i18n } = useTranslation();
    const [ref, visible] = useVisibility(0.1);
    const dropdownRef = useRef(null);
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

    return (
        <section
            id="hero"
            ref={ref}
            className="section hero-section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingBottom: '6rem'
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
                <p className="section-label" style={{ marginBottom: '1.5rem' }}>
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
                    <span className="hero-gradient">
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
                        className="btn btn-primary"
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
                            className="btn btn-glass"
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
                            <div className="cv-dropdown">
                                {CV_LANGUAGES.map((lang) => (
                                    <a
                                        key={lang}
                                        href={`/cv/cv-${lang}.pdf`}
                                        download
                                        onClick={() => setCvOpen(false)}
                                        className="cv-dropdown-item"
                                        style={{
                                            fontWeight: i18n.language === lang ? 600 : 400,
                                            background: i18n.language === lang
                                                ? 'rgba(var(--naranja-principal-rgb), 0.1)'
                                                : 'transparent'
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
                className="scroll-indicator"
                style={{
                    opacity: visible ? 0.5 : 0,
                    transition: 'opacity 1s ease 1.5s'
                }}
            >
                <span className="scroll-label">{t('hero.scroll')}</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
