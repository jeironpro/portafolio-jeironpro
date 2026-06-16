import { personalInfo } from '../../data/portfolio';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useVisibility } from '../../hooks/useVisibility';

export default function ContactSection() {
    const { t } = useTranslation();
    const [ref, visible] = useVisibility(0.2);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const channels = [
        { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { label: 'GitHub', href: personalInfo.github },
        { label: 'LinkedIn', href: personalInfo.linkedin }
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="section section-contact"
        >
            <div
                className={`section-inner section-inner-contact ${visible ? 'visible' : ''}`}
            >
                <div className="section-header">
                    <p className="section-label">{t('contact.title')}</p>
                    <h2 className="section-heading">{t('contact.heading')}</h2>
                    <p className="section-subtitle">{t('contact.subtitle')}</p>
                </div>

                <div className="contact-channels grid-channels">
                    {channels.map((ch) => (
                        <a
                            key={ch.label}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="channel-card"
                        >
                            <span className="channel-label">
                                {ch.label === personalInfo.email ? t('contact.channelEmail') : ch.label}
                            </span>
                            <span
                                style={{
                                    fontSize: '0.82rem',
                                    fontWeight: 500,
                                    color: 'var(--color-text-primary)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%'
                                }}
                            >
                                {ch.label === personalInfo.email ? personalInfo.email : (
                                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>/</span>
                                )}
                                {ch.label !== personalInfo.email && ch.label.toLowerCase()}
                            </span>
                        </a>
                    ))}
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="glass-card glass-card-rounded form-card"
                    style={{ backdropFilter: 'blur(12px)' }}
                >
                    <div className="contact-input-row grid-input-row">
                        <div>
                            <label htmlFor="contact-name" className="sr-only">{t('contact.form.name')}</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                className="form-input"
                                placeholder={t('contact.form.name')}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="sr-only">{t('contact.form.email')}</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                className="form-input"
                                placeholder={t('contact.form.email')}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="contact-message" className="sr-only">{t('contact.form.message')}</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            className="form-input"
                            placeholder={t('contact.form.message')}
                            rows={3}
                            required
                            style={{ marginBottom: '1rem' }}
                        />
                    </div>
                    <div
                        className="contact-form-foot"
                    >
                        <span
                            aria-live="polite"
                            style={{
                                fontSize: '0.75rem',
                                color: error ? '#ef4444' : 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-body)'
                            }}
                        >
                            {error ? 'Error al enviar. Intenta de nuevo.' : t('contact.response')}
                        </span>
                        <button
                            type="submit"
                            style={{
                                padding: '16px 36px',
                                borderRadius: '14px',
                                border: 'none',
                                background: sent
                                    ? 'linear-gradient(135deg, #2ecc71, #27ae60)'
                                    : 'var(--color-highlight-gradient)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                if (!sent) {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 8px 30px rgba(var(--naranja-principal-rgb), 0.3)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            {sent ? t('contact.form.sent') : t('contact.form.send')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
