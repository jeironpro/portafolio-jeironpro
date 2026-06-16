import { skills } from '../../data/portfolio';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useVisibility } from '../../hooks/useVisibility';

export default function SkillsSection() {
    const { t } = useTranslation();
    const [ref, visible] = useVisibility(0.15);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (visible) {
            const id = setTimeout(() => setAnimated(true), 300);
            return () => clearTimeout(id);
        }
    }, [visible]);

    const categories = [...new Set(skills.map((s) => s.category))];

    const categoryIcons = {
        frontend: '{ }',
        backend: '</>',
        language: '//',
        mobile: '>>',
        devops: '_',
        tools: '*',
        design: '~'
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="section"
        >
            <div
                className="section-inner section-inner-narrow"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(30px)'
                }}
            >
                <div className="section-header">
                    <p className="section-label">{t('skills.title')}</p>
                    <h2 className="section-heading">{t('skills.heading')}</h2>
                    <p className="section-subtitle">{t('skills.subtitle')}</p>
                </div>

                <div className="grid-skills">
                    {categories.map((category) => {
                        const categorySkills = skills.filter((s) => s.category === category);
                        return (
                            <div
                                key={category}
                                className="skills-cat-card"
                            >
                                <div className="skills-cat-header">
                                    <span className="cat-badge">
                                        {categoryIcons[category] || '>'}
                                    </span>
                                    <span className="skills-cat-name">
                                        {t('skills.categories.' + category)}
                                    </span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    {categorySkills.map((skill, idx) => (
                                        <div className="skills-row" key={skill.nameKey}>
                                            <span className="skills-name">
                                                {t(skill.nameKey)}
                                            </span>

                                            <div className="skill-bar-track">
                                                <div
                                                    className="skill-bar-fill"
                                                    style={{
                                                        width: animated ? `${skill.level}%` : '0%',
                                                        transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.06}s`
                                                    }}
                                                />
                                            </div>

                                            <span className="skills-pct">
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
