import { useTranslation } from 'react-i18next';

const LANGS = [
    { code: 'es', label: 'ES' },
    { code: 'ca', label: 'CA' },
    { code: 'en', label: 'EN' }
];

export default function LangSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div
            style={{
                display: 'flex',
                gap: '1px',
                marginLeft: '0.25rem',
                paddingLeft: '0.4rem',
                borderLeft: '1px solid var(--color-glass-border)'
            }}
        >
            {LANGS.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    style={{
                        background: i18n.language === lang.code
                            ? 'rgba(var(--azul-principal-rgb), 0.15)'
                            : 'transparent',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        color: i18n.language === lang.code
                            ? 'var(--color-text-primary)'
                            : 'var(--color-text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        fontWeight: i18n.language === lang.code ? 700 : 500,
                        cursor: 'pointer',
                        padding: '0.2rem 0.3rem',
                        letterSpacing: '0.03em',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        if (i18n.language !== lang.code) {
                            e.currentTarget.style.color = 'var(--color-text-primary)';
                            e.currentTarget.style.background = 'var(--color-glass-bg)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (i18n.language !== lang.code) {
                            e.currentTarget.style.color = 'var(--color-text-muted)';
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
