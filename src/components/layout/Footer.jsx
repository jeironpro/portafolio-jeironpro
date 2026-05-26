import { personalInfo } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                position: 'relative',
                zIndex: 1,
                padding: '5rem clamp(1.5rem, 8vw, 6rem) 3rem',
                marginTop: '3rem'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 'clamp(1.5rem, 8vw, 6rem)',
                    right: 'clamp(1.5rem, 8vw, 6rem)',
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, rgba(var(--azul-claro-rgb), 0.2), rgba(var(--naranja-principal-rgb), 0.2), transparent)`
                }}
            />

            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}
            >
                <p
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        letterSpacing: '-0.04em',
                        marginBottom: '0.75rem',
                        lineHeight: 1.1
                    }}
                >
                    {personalInfo.name}
                    <span style={{ color: 'var(--azul-claro)' }}>.</span>
                </p>

                <p
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2.5rem',
                        fontWeight: 400
                    }}
                >
                    {t('footer.tagline')}
                </p>

                <div
                    className="footer-social"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '1.5rem'
                    }}
                >
                    {[
                        { label: 'GitHub', url: personalInfo.github },
                        { label: 'LinkedIn', url: personalInfo.linkedin },
                        { label: 'Email', url: `mailto:${personalInfo.email}` }
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target={link.url.startsWith('mailto') ? undefined : '_blank'}
                            rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                            style={{
                                padding: '0.6rem 1.2rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--color-glass-border)',
                                background: 'var(--color-glass-bg)',
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.82rem',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(var(--azul-principal-rgb), 0.1)';
                                e.target.style.borderColor = 'rgba(var(--azul-claro-rgb), 0.2)';
                                e.target.style.color = 'var(--color-text-primary)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--color-glass-bg)';
                                e.target.style.borderColor = 'var(--color-glass-border)';
                                e.target.style.color = 'var(--color-text-secondary)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div
                    className="footer-bottom"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--color-glass-border)'
                    }}
                >
                    <span
                        style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)'
                        }}
                    >
                        &copy; {new Date().getFullYear()} {personalInfo.name}. {t('footer.copyright')}
                    </span>

                    <a
                        href="#style-guide"
                        style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--color-text-muted)';
                        }}
                    >
                        {t('footer.styleGuide', 'Guía de Estilos')}
                    </a>

                    <button
                        onClick={scrollToTop}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            padding: '4px 8px',
                            transition: 'color 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--color-text-muted)';
                        }}
                    >
                        {t('footer.backToTop')}
                        <span style={{ display: 'inline-block', transform: 'rotate(-90deg)', fontSize: '1rem' }}>
                            &gt;
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
