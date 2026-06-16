import { useEffect, useRef } from 'react';
import { useStore } from '../../hooks/useStore';
import { projects } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

export default function ProjectModal() {
    const { t } = useTranslation();
    const selectedProject = useStore((s) => s.selectedProject);
    const isModalOpen = useStore((s) => s.isModalOpen);
    const closeModal = useStore((s) => s.closeModal);
    const closeRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!isModalOpen) return;
        const prev = document.activeElement;
        closeRef.current?.focus();

        const handleKey = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'Tab') {
                const modal = overlayRef.current?.firstElementChild;
                if (!modal) return;
                const focusable = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusable.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
            prev?.focus();
        };
    }, [isModalOpen, closeModal]);

    if (!isModalOpen || !selectedProject) return null;

    const project = projects.find((p) => p.id === selectedProject.id);
    if (!project) return null;

    return (
        <div
            ref={overlayRef}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={t(project.titleKey)}
            className="modal-overlay"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="modal-content"
            >
                <div className="modal-header">
                    <h2 className="modal-title">
                        {t(project.titleKey)}
                    </h2>
                    <button
                        ref={closeRef}
                        onClick={closeModal}
                        aria-label="Cerrar"
                        className="modal-close"
                    >
                        &times;
                    </button>
                </div>

                {project.image && (
                    <div className="modal-img-wrap">
                        <img
                            src={project.image}
                            alt={t(project.titleKey)}
                            className="modal-img"
                        />
                    </div>
                )}

                <p className="modal-desc">
                    {t(project.longDescriptionKey)}
                </p>

                <div className="modal-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="modal-actions">
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn action-btn-primary"
                        >
                            {t('projects.viewSite')}
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn action-btn-glass"
                        >
                            {t('projects.viewCode')}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
