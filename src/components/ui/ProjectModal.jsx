import { useStore } from '../../hooks/useStore';
import { projects } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

export default function ProjectModal() {
    const { t } = useTranslation();
    const selectedProject = useStore((s) => s.selectedProject);
    const isModalOpen = useStore((s) => s.isModalOpen);
    const closeModal = useStore((s) => s.closeModal);

    if (!isModalOpen || !selectedProject) return null;

    const project = projects.find((p) => p.id === selectedProject.id);
    if (!project) return null;

    return (
        <div
            onClick={closeModal}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(var(--color-bg-rgb), 0.8)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer'
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    maxWidth: '520px',
                    width: '90%',
                    padding: '2.5rem',
                    background: 'var(--color-bg-elevated)',
                    borderRadius: '16px',
                    border: '1px solid var(--color-border)',
                    cursor: 'default'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '1.5rem'
                    }}
                >
                    <h2
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        {t(project.titleKey)}
                    </h2>
                    <button
                        onClick={closeModal}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-text-secondary)',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            padding: '0.25rem',
                            lineHeight: 1
                        }}
                    >
                        &times;
                    </button>
                </div>

                <p
                    style={{
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        marginBottom: '1.5rem'
                    }}
                >
                    {t(project.longDescriptionKey)}
                </p>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1.5rem'
                    }}
                >
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: '4px 12px',
                                background: 'rgba(var(--azul-principal-rgb), 0.12)',
                                color: 'var(--color-primary)',
                                borderRadius: '100px',
                                fontSize: '0.8rem',
                                fontWeight: 500
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '10px 24px',
                                borderRadius: '8px',
                                background: 'var(--color-primary)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'var(--azul-claro)';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--color-primary)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {t('projects.viewSite')}
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '10px 24px',
                                borderRadius: '8px',
                                background: 'var(--color-glass-bg)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'var(--color-glass-bg-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--color-glass-bg)';
                            }}
                        >
                            {t('projects.viewCode')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
