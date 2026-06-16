import { projects } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';
import { useVisibility } from '../../hooks/useVisibility';
import TiltCard from '../ui/TiltCard';

export default function ProjectsSection() {
    const { t } = useTranslation();
    const [ref, visible] = useVisibility(0.1);

    return (
        <section
            id="projects"
            ref={ref}
            className="section"
        >
            <div
                className="section-inner section-inner-wide"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)'
                }}
            >
                <div className="section-header">
                    <p className="section-label">{t('projects.title')}</p>
                    <h2 className="section-heading">{t('projects.heading')}</h2>
                    <p className="section-subtitle">{t('projects.subtitle')}</p>
                </div>

                <div className="projects-grid grid-projects">
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
