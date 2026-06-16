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
                    className={`lang-btn${i18n.language === lang.code ? ' active' : ''}`}
                    aria-pressed={i18n.language === lang.code}
                    aria-label={lang.label}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
