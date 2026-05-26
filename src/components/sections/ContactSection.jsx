import { personalInfo } from '../../data/portfolio';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [sent, setSent] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
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
            style={{
                padding: '8rem clamp(1.5rem, 8vw, 6rem) 10rem',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                {/* Heading */}
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
                        {t('contact.title')}
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
                        {t('contact.heading')}
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
                        {t('contact.subtitle')}
                    </p>
                </div>

                {/* Contact channels as large horizontal cards */}
                <div
                    className="contact-channels"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                        marginBottom: '3rem'
                    }}
                >
                    {channels.map((ch) => (
                        <a
                            key={ch.label}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '1.5rem 1rem',
                                borderRadius: 'var(--radius-2xl)',
                                textDecoration: 'none',
                                textAlign: 'center',
                                fontFamily: 'var(--font-body)',
                                background: 'var(--color-glass-bg)',
                                border: '1px solid var(--color-glass-border)',
                                color: 'var(--color-text-primary)',
                                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.1)';
                                e.target.style.borderColor = 'rgba(var(--azul-principal-rgb), 0.2)';
                                e.target.style.transform = 'translateY(-4px)';
                                e.target.style.boxShadow = '0 12px 40px rgba(var(--azul-principal-rgb), 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--color-glass-bg)';
                                e.target.style.borderColor = 'var(--color-glass-border)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    color: 'var(--color-primary)',
                                    background: 'rgba(var(--azul-principal-rgb), 0.12)',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase'
                                }}
                            >
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

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-3xl)',
                        background: 'var(--color-glass-bg)',
                        border: '1px solid var(--color-glass-border)',
                        backdropFilter: 'blur(12px)'
                    }}
                >
                    <div
                        className="contact-input-row"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem',
                            marginBottom: '1rem'
                        }}
                    >
                        <input
                            type="text"
                            placeholder={t('contact.form.name')}
                            required
                            style={{
                                padding: '16px 18px',
                                borderRadius: '14px',
                                border: '1px solid var(--color-border)',
                                background: 'rgba(var(--azul-principal-rgb), 0.03)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.9rem',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(var(--azul-principal-rgb), 0.35)';
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.06)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--color-border)';
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.03)';
                            }}
                        />
                        <input
                            type="email"
                            placeholder={t('contact.form.email')}
                            required
                            style={{
                                padding: '16px 18px',
                                borderRadius: '14px',
                                border: '1px solid var(--color-border)',
                                background: 'rgba(var(--azul-principal-rgb), 0.03)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.9rem',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(var(--azul-principal-rgb), 0.35)';
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.06)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--color-border)';
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.03)';
                            }}
                        />
                    </div>
                    <textarea
                        placeholder={t('contact.form.message')}
                        rows={3}
                        required
                        style={{
                            padding: '16px 18px',
                            borderRadius: '14px',
                            border: '1px solid var(--color-border)',
                            background: 'rgba(var(--azul-principal-rgb), 0.03)',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            outline: 'none',
                            resize: 'vertical',
                            width: '100%',
                            boxSizing: 'border-box',
                            marginBottom: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = 'rgba(var(--azul-principal-rgb), 0.35)';
                            e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.06)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'var(--color-border)';
                            e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.03)';
                        }}
                    />
                    <div
                        className="contact-form-foot"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem'
                        }}
                    >
                        <span
                            style={{
                                fontSize: '0.75rem',
                                    color: 'var(--color-text-secondary)',
                                    fontFamily: 'var(--font-body)'
                                }}
                            >
                                {t('contact.response')}
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
