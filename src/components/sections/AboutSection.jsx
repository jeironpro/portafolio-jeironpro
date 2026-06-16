import { personalInfo } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';
import { useVisibility } from '../../hooks/useVisibility';

export default function AboutSection() {
    const { t } = useTranslation();
    const [ref, visible] = useVisibility(0.2);

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
            className="section"
        >
            <div
                className={`about-glass glass-card glass-card-rounded ${visible ? 'visible' : ''}`}
                style={{
                    backdropFilter: 'blur(16px)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p className="section-label">
                        {t('about.title')}
                    </p>

                    <div className="about-layout grid-2col">
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
                                        className="channel-link"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="about-stats grid-stats">
                            {stats.map((stat) => (
                                <div
                                    key={stat.labelKey}
                                    className="stat-card"
                                >
                                    <div className="stat-value">
                                        {stat.value}
                                    </div>
                                    <div className="stat-label">
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
