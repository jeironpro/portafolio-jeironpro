import { personalInfo } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="section"
            style={{ paddingTop: '5rem', paddingBottom: '3rem', marginTop: '3rem' }}
        >
            <div className="footer-divider" />

            <div
                style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}
            >
                <p className="footer-name">
                    {personalInfo.name}
                    <span className="footer-name-dot">.</span>
                </p>

                <p className="footer-tagline">
                    {t('footer.tagline')}
                </p>

                <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
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
                            className="channel-link"
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
                    <span className="footer-copyright">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. {t('footer.copyright')}
                    </span>

                    <a
                        href="#style-guide"
                        className="footer-nav-link"
                    >
                        {t('footer.styleGuide', 'Guía de Estilos')}
                    </a>

                    <button
                        onClick={scrollToTop}
                        className="footer-top-btn"
                    >
                        {t('footer.backToTop')}
                        <span className="footer-top-arrow">&gt;</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
