import { skills } from '../../data/portfolio';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SkillsSection() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    setTimeout(() => setAnimated(true), 300);
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const categories = [...new Set(skills.map((s) => s.category))];

    const categoryIcons = {
        frontend: '{ }',
        backend: '</>',
        lenguaje: '//',
        mobile: '>>',
        devops: '_',
        herramientas: '*',
        diseno: '~'
    };

    return (
        <section
            id="skills"
            ref={ref}
            style={{
                padding: '6rem clamp(1.5rem, 8vw, 6rem)',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
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
                        {t('skills.title')}
                    </p>
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: '1rem'
                        }}
                    >
                        {t('skills.heading')}
                    </h2>
                    <p
                        style={{
                            color: 'var(--color-text-primary)',
                            fontSize: '0.95rem',
                            maxWidth: '500px',
                            margin: '0 auto',
                            fontWeight: 400
                        }}
                    >
                        {t('skills.subtitle')}
                    </p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}
                >
                    {categories.map((category) => {
                        const categorySkills = skills.filter((s) => s.category === category);
                        return (
                            <div
                                key={category}
                                className="skills-cat-card"
                                style={{
                                    padding: '1.75rem 2rem',
                                    borderRadius: 'var(--radius-2xl)',
                                    background: 'var(--color-glass-bg)',
                                    border: '1px solid var(--color-glass-border)',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(var(--naranja-principal-rgb), 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-glass-border)';
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1.25rem'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-heading)',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: 'var(--naranja-principal)',
                                            background: 'rgba(var(--naranja-principal-rgb), 0.08)',
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: 'var(--radius-sm)',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {categoryIcons[category] || '>'}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            color: 'var(--color-text-secondary)',
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            fontFamily: 'var(--font-body)'
                                        }}
                                    >
                                        {t('skills.categories.' + category)}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.85rem'
                                    }}
                                >
                                    {categorySkills.map((skill, idx) => (
                                        <div
                                            key={skill.nameKey}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem'
                                            }}
                                        >
                                            <span
                                                className="skills-name"
                                                style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    color: 'var(--color-text-primary)',
                                                    fontFamily: 'var(--font-body)',
                                                    minWidth: '110px',
                                                    flexShrink: 0
                                                }}
                                            >
                                                {t(skill.nameKey)}
                                            </span>

                                            <div
                                                style={{
                                                    flex: 1,
                                                    height: '6px',
                                                    borderRadius: 'var(--radius-full)',
                                                    background: 'rgba(var(--naranja-principal-rgb), 0.06)',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        height: '100%',
                                                        width: animated ? `${skill.level}%` : '0%',
                                                        borderRadius: 'var(--radius-full)',
                                                        background: 'linear-gradient(90deg, var(--naranja-principal), var(--naranja-claro))',
                                                        transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.06}s`,
                                                        boxShadow: '0 0 8px rgba(var(--naranja-principal-rgb), 0.2)'
                                                    }}
                                                />
                                            </div>

                                            <span
                                                style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: 'rgba(var(--naranja-principal-rgb), 0.7)',
                                                    fontFamily: 'var(--font-heading)',
                                                    minWidth: '32px',
                                                    textAlign: 'right',
                                                    fontVariantNumeric: 'tabular-nums'
                                                }}
                                            >
                                                {skill.level}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
