import { useRef, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useTranslation } from 'react-i18next';

export default function TiltCard({ project }) {
    const { t } = useTranslation();
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glow, setGlow] = useState({ x: 50, y: 50 });
    const selectProject = useStore((s) => s.selectProject);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setRotate({ x: rotateX, y: rotateY });
        setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setGlow({ x: 50, y: 50 });
    };

    return (
        <div
            ref={cardRef}
            className="tilt-card"
            onClick={() => selectProject(project)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'var(--color-glass-bg)',
                border: '1px solid var(--color-glass-border)',
                backdropFilter: 'blur(12px)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(var(--azul-principal-rgb), 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-glass-border)';
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(var(--azul-principal-rgb), 0.08) 0%, transparent 60%)`,
                    pointerEvents: 'none',
                    transition: 'background 0.15s ease-out'
                }}
            />

            <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: `${project.color}22`,
                        border: `1px solid ${project.color}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        fontSize: '1.2rem',
                        color: project.color
                    }}
                >
                    {project.shape === 'box' && '\u25A0'}
                    {project.shape === 'sphere' && '\u25CF'}
                    {project.shape === 'cylinder' && '\u25A3'}
                    {project.shape === 'cone' && '\u25B2'}
                    {project.shape === 'torus' && '\u25CB'}
                </div>

                <h3
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        marginBottom: '0.75rem',
                        lineHeight: 1.3
                    }}
                >
                    {t(project.titleKey)}
                </h3>

                <p
                    style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: '1rem',
                        fontWeight: 400
                    }}
                >
                    {t(project.descriptionKey)}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: '3px 10px',
                                borderRadius: '6px',
                                background: 'var(--color-glass-bg)',
                                color: 'var(--color-text-muted)',
                                fontSize: '0.7rem',
                                fontWeight: 500
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span
                            style={{
                                padding: '3px 10px',
                                borderRadius: '6px',
                                background: 'var(--color-glass-bg)',
                                color: 'var(--color-text-muted)',
                                fontSize: '0.7rem'
                            }}
                        >
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
