import { projects } from '../../data/portfolio';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TiltCard from '../ui/TiltCard';

export default function ProjectsSection() {
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
            id="projects"
            ref={ref}
            style={{
                padding: '6rem clamp(1.5rem, 8vw, 6rem)',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
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
                        {t('projects.title')}
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
                        {t('projects.heading')}
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
                         {t('projects.subtitle')}
                     </p>
                </div>

                <div
                    className="projects-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible
                                    ? 'translateY(0)'
                                    : 'translateY(30px)',
                                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.08}s`
                            }}
                        >
                            <TiltCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
