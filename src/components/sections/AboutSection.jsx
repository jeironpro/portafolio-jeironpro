import { personalInfo } from '../../data/portfolio';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { labelKey: 'about.stats.experience.label', value: '4+', suffixKey: 'about.stats.experience.suffix' },
        { labelKey: 'about.stats.projects.label', value: '6+', suffixKey: 'about.stats.projects.suffix' },
        { labelKey: 'about.stats.languages.label', value: '4+', suffixKey: 'about.stats.languages.suffix' },
        { labelKey: 'about.stats.formations.label', value: '2', suffixKey: 'about.stats.formations.suffix' }
    ];

    return (
        <section
            id="about"
            ref={ref}
            style={{
                padding: '6rem clamp(1.5rem, 8vw, 6rem)',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div
                className="about-glass"
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '3rem 3.5rem',
                    borderRadius: 'var(--radius-3xl)',
                    background: 'var(--color-glass-bg)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid var(--color-glass-border)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
                    transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >

                <div
                    style={{
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.85rem',
                            color: 'var(--color-primary)',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            marginBottom: '0.75rem',
                            fontWeight: 500
                        }}
                    >
                        {t('about.title')}
                    </p>

                    <div
                        className="about-layout"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2.5rem',
                            alignItems: 'start'
                        }}
                    >
                        {/* Columna izquierda: nombre + bio */}
                        <div>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                    fontWeight: 600,
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '1.25rem',
                                    lineHeight: 1.15
                                }}
                            >
                                {personalInfo.name}
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.95rem',
                                    color: 'var(--color-text-primary)',
                                    lineHeight: 1.8,
                                    fontWeight: 400
                                }}
                            >
                                {t('hero.bio')}
                            </p>

                            {/* Redes sociales inline */}
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    marginTop: '1.5rem'
                                }}
                            >
                                {[
                                    { label: 'GitHub', url: personalInfo.github },
                                    { label: 'LinkedIn', url: personalInfo.linkedin }
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.5rem 1.1rem',
                                            borderRadius: 'var(--radius-full)',
                                            border: '1px solid var(--color-glass-border)',
                                            background: 'var(--color-glass-bg)',
                                            color: 'var(--color-text-secondary)',
                                            fontSize: '0.82rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.1)';
                                            e.target.style.borderColor = 'rgba(var(--azul-claro-rgb), 0.2)';
                                            e.target.style.color = 'var(--color-text-primary)';
                                            e.target.style.transform = 'translateY(-1px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'var(--color-glass-bg)';
                                            e.target.style.borderColor = 'var(--color-glass-border)';
                                            e.target.style.color = 'var(--color-text-secondary)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Columna derecha: 4 cards de igual tamano */}
                        <div
                            className="about-stats"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '0.85rem'
                            }}
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.labelKey}
                                    className="about-stat"
                                    style={{
                                        padding: '1.5rem 1rem',
                                        borderRadius: 'var(--radius-xl)',
                                        background: 'var(--color-glass-bg)',
                                        border: '1px solid var(--color-glass-border)',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '120px',
                                        transition: 'border-color 0.3s ease, transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(var(--naranja-principal-rgb), 0.15)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-glass-border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            background: 'var(--color-accent-gradient)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            marginBottom: '0.15rem',
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            color: 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-body)',
                                            letterSpacing: '0.02em'
                                        }}
                                    >
                                        {t(stat.labelKey)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
