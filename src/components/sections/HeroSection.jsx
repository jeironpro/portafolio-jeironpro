import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

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
                    <a
                        href="#contact"
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
                            textDecoration: 'none',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--color-glass-bg-hover)';
                            e.target.style.borderColor = 'var(--color-border)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'var(--color-glass-bg)';
                            e.target.style.borderColor = 'var(--color-border-hover)';
                        }}
                    >
                        {t('hero.ctaContact')}
                    </a>
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
