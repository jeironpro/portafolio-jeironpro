import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/tokens.css';

const palette = [
    {
        categoryKey: 'styleGuide.palette.azules', colors: [
            { nameKey: 'styleGuide.palette.azulPrincipal.name', hex: '#2563EB', var: '--azul-principal', usageKey: 'styleGuide.palette.azulPrincipal.usage' },
            { nameKey: 'styleGuide.palette.azulOscuro.name', hex: '#1E40AF', var: '--azul-oscuro', usageKey: 'styleGuide.palette.azulOscuro.usage' },
            { nameKey: 'styleGuide.palette.azulClaro.name', hex: '#60A5FA', var: '--azul-claro', usageKey: 'styleGuide.palette.azulClaro.usage' },
            { nameKey: 'styleGuide.palette.azulMuyClaro.name', hex: '#DBEAFE', var: '--azul-muy-claro', usageKey: 'styleGuide.palette.azulMuyClaro.usage' }
        ]
    },
    {
        categoryKey: 'styleGuide.palette.naranjas', colors: [
            { nameKey: 'styleGuide.palette.naranjaPrincipal.name', hex: '#F97316', var: '--naranja-principal', usageKey: 'styleGuide.palette.naranjaPrincipal.usage' },
            { nameKey: 'styleGuide.palette.naranjaOscuro.name', hex: '#C2410C', var: '--naranja-oscuro', usageKey: 'styleGuide.palette.naranjaOscuro.usage' },
            { nameKey: 'styleGuide.palette.naranjaClaro.name', hex: '#FB923C', var: '--naranja-claro', usageKey: 'styleGuide.palette.naranjaClaro.usage' },
            { nameKey: 'styleGuide.palette.naranjaMuyClaro.name', hex: '#FFEDD5', var: '--naranja-muy-claro', usageKey: 'styleGuide.palette.naranjaMuyClaro.usage' }
        ]
    },
    {
        categoryKey: 'styleGuide.palette.neutrales', colors: [
            { nameKey: 'styleGuide.palette.grisOscuro.name', hex: '#1F2937', var: '--gris-oscuro', usageKey: 'styleGuide.palette.grisOscuro.usage' },
            { nameKey: 'styleGuide.palette.grisMedio.name', hex: '#6B7280', var: '--gris-medio', usageKey: 'styleGuide.palette.grisMedio.usage' },
            { nameKey: 'styleGuide.palette.grisClaro.name', hex: '#E5E7EB', var: '--gris-claro', usageKey: 'styleGuide.palette.grisClaro.usage' },
            { nameKey: 'styleGuide.palette.fondoClaro.name', hex: '#F9FAFB', var: '--fondo-claro', usageKey: 'styleGuide.palette.fondoClaro.usage' }
        ]
    }
];

const typography = {
    family: 'Montserrat',
    weights: [300, 400, 500, 600, 700],
    sizes: [
        { token: '--text-xs', name: 'xs', px: '0.75rem', usageKey: 'styleGuide.typography.sizes.xs' },
        { token: '--text-sm', name: 'sm', px: '0.875rem', usageKey: 'styleGuide.typography.sizes.sm' },
        { token: '--text-base', name: 'base', px: '1rem', usageKey: 'styleGuide.typography.sizes.base' },
        { token: '--text-lg', name: 'lg', px: '1.125rem', usageKey: 'styleGuide.typography.sizes.lg' },
        { token: '--text-xl', name: 'xl', px: '1.25rem', usageKey: 'styleGuide.typography.sizes.xl' },
        { token: '--text-2xl', name: '2xl', px: '1.5rem', usageKey: 'styleGuide.typography.sizes.2xl' },
        { token: '--text-3xl', name: '3xl', px: '1.875rem', usageKey: 'styleGuide.typography.sizes.3xl' },
        { token: '--text-4xl', name: '4xl', px: '2.25rem', usageKey: 'styleGuide.typography.sizes.4xl' },
        { token: '--text-5xl', name: '5xl', px: '3rem', usageKey: 'styleGuide.typography.sizes.5xl' },
        { token: '--text-6xl', name: '6xl', px: '3.75rem', usageKey: 'styleGuide.typography.sizes.6xl' }
    ]
};

const spacing = [
    { token: '--space-1', value: '0.25rem', usageKey: 'styleGuide.spacing.list.1' },
    { token: '--space-2', value: '0.5rem', usageKey: 'styleGuide.spacing.list.2' },
    { token: '--space-3', value: '0.75rem', usageKey: 'styleGuide.spacing.list.3' },
    { token: '--space-4', value: '1rem', usageKey: 'styleGuide.spacing.list.4' },
    { token: '--space-5', value: '1.25rem', usageKey: 'styleGuide.spacing.list.5' },
    { token: '--space-6', value: '1.5rem', usageKey: 'styleGuide.spacing.list.6' },
    { token: '--space-8', value: '2rem', usageKey: 'styleGuide.spacing.list.8' },
    { token: '--space-10', value: '2.5rem', usageKey: 'styleGuide.spacing.list.10' },
    { token: '--space-12', value: '3rem', usageKey: 'styleGuide.spacing.list.12' },
    { token: '--space-16', value: '4rem', usageKey: 'styleGuide.spacing.list.16' },
    { token: '--space-20', value: '5rem', usageKey: 'styleGuide.spacing.list.20' },
    { token: '--space-24', value: '6rem', usageKey: 'styleGuide.spacing.list.24' }
];

export default function StyleGuidePage() {
    const { t, i18n } = useTranslation();
    const [copied, setCopied] = useState(null);

    const copyVar = (varName) => {
        navigator.clipboard.writeText(`var(${varName})`).then(() => {
            setCopied(varName);
            setTimeout(() => setCopied(null), 1500);
        });
    };

    const sectionStyle = {
        padding: 'var(--space-16) var(--space-10)',
        borderBottom: '1px solid var(--color-border)'
    };

    const headingStyle = {
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--text-4xl)',
        fontWeight: 600,
        color: 'var(--color-text-primary)',
        marginBottom: 'var(--space-2)'
    };

    const subheadingStyle = {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--color-text-muted)',
        marginBottom: 'var(--space-10)'
    };

    const cardStyle = {
        padding: 'var(--space-6)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)'
    };

    return (
        <div style={{ background: 'var(--color-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
            {/* Header */}
            <header style={{
                padding: 'var(--space-16) var(--space-10) var(--space-8)',
                textAlign: 'center',
                borderBottom: '1px solid var(--color-border)',
                position: 'relative'
            }}>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-5xl)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-3)'
                }}>
                    {t('styleGuide.title')}
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)' }}>
                    {t('styleGuide.description')}
                </p>
                <div style={{
                    marginTop: 'var(--space-6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-4)',
                    flexWrap: 'wrap'
                }}>
                    <a key="back" href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.hash = '';
                        }}
                        style={{
                            padding: 'var(--space-2) var(--space-4)',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(var(--naranja-principal-rgb), 0.08)',
                            border: '1px solid rgba(var(--naranja-principal-rgb), 0.12)',
                            color: 'var(--naranja-principal)',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all var(--transition-base)',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(var(--naranja-principal-rgb), 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(var(--naranja-principal-rgb), 0.08)';
                        }}
                    >
                        &larr; Portafolio
                    </a>
                    {[
                        { id: 'colors', labelKey: 'styleGuide.colors' },
                        { id: 'typography', labelKey: 'styleGuide.typography.title' },
                        { id: 'spacing', labelKey: 'styleGuide.spacing.title' },
                        { id: 'components', labelKey: 'styleGuide.components.title' }
                    ].map((item) => (
                        <a key={item.id}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            href={`#${item.id}`}
                            style={{
                                padding: 'var(--space-2) var(--space-4)',
                                borderRadius: 'var(--radius-full)',
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text-secondary)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'all var(--transition-base)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'var(--color-bg-elevated)';
                                e.target.style.color = 'var(--color-text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'var(--color-bg-card)';
                                e.target.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            {t(item.labelKey)}
                        </a>
                    ))}
                </div>
            </header>

            {/* Colors */}
            <section id="colors" style={sectionStyle}>
                <h2 style={headingStyle}>{t('styleGuide.colors')}</h2>
                <p style={subheadingStyle}>{t('styleGuide.colorsDesc')}</p>

                {palette.map((group) => (
                    <div key={group.categoryKey} style={{ marginBottom: 'var(--space-10)' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {t(group.categoryKey)}
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: 'var(--space-4)'
                        }}>
                            {group.colors.map((color) => (
                                <div key={color.hex}
                                    style={cardStyle}
                                    onClick={() => copyVar(color.var)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '80px',
                                        borderRadius: 'var(--radius-md)',
                                        background: color.hex,
                                        marginBottom: 'var(--space-3)',
                                        border: color.hex === '#F9FAFB' || color.hex === '#FFEDD5' || color.hex === '#DBEAFE' || color.hex === '#E5E7EB'
                                            ? '1px solid rgba(255,255,255,0.1)'
                                            : 'none'
                                    }} />
                                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>
                                        {t(color.nameKey)}
                                    </div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>
                                        {color.hex}
                                    </div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                                        {t(color.usageKey)}
                                    </div>
                                    <div style={{
                                        marginTop: 'var(--space-2)',
                                        fontSize: 'var(--text-xs)',
                                        color: copied === color.var ? 'var(--color-primary)' : 'var(--color-text-muted)'
                                    }}>
                                        {copied === color.var ? t('styleGuide.copied') : `var(${color.var})`}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Tema oscuro */}
                <div style={{
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)'
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4)'
                    }}>
                        {t('styleGuide.darkVars')}
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: 'var(--space-3)'
                    }}>
                        {[
                            { var: '--color-bg', value: '#0f172a' },
                            { var: '--color-bg-elevated', value: '#1e293b' },
                            { var: '--color-bg-card', value: 'rgba(30,41,59,0.6)' },
                            { var: '--color-text-primary', value: '#f1f5f9' },
                            { var: '--color-text-secondary', value: '#94a3b8' },
                            { var: '--color-text-muted', value: '#64748b' },
                            { var: '--color-border', value: 'rgba(148,163,184,0.1)' },
                            { var: '--color-glass', value: 'rgba(30,41,59,0.4)' }
                        ].map((t) => (
                            <div key={t.var} style={{
                                padding: 'var(--space-3)',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(0,0,0,0.2)',
                                fontSize: 'var(--text-xs)'
                            }}>
                                <div style={{ color: 'var(--color-text-primary)', fontFamily: 'monospace', marginBottom: 'var(--space-1)' }}>{t.var}</div>
                                <div style={{ color: 'var(--color-text-muted)', fontFamily: 'monospace' }}>{t.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section id="typography" style={sectionStyle}>
                <h2 style={headingStyle}>{t('styleGuide.typography.title')}</h2>
                <p style={subheadingStyle}>
                    {t('styleGuide.typography.family')} <strong style={{ color: 'var(--color-text-primary)' }}>Montserrat</strong> —
                    {t('styleGuide.typography.weights')} {typography.weights.join(', ')}
                </p>

                <div style={{
                    padding: 'var(--space-8)',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    marginBottom: 'var(--space-8)'
                }}>
                    {[700, 600, 500, 400, 300].map((weight) => (
                        <div key={weight} style={{
                            marginBottom: weight === 300 ? 0 : 'var(--space-4)',
                            paddingBottom: weight === 300 ? 0 : 'var(--space-4)',
                            borderBottom: weight === 300 ? 'none' : '1px solid var(--color-border)'
                        }}>
                            <p style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: weight,
                                fontSize: 'var(--text-2xl)',
                                color: 'var(--color-text-primary)',
                                margin: 0
                            }}>
                                {t('styleGuide.typography.sample', { weight })}
                            </p>
                            <p style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--color-text-muted)',
                                marginTop: 'var(--space-1)'
                            }}>
                                Weight {weight}
                            </p>
                        </div>
                    ))}
                </div>

                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-4)'
                }}>
                    {t('styleGuide.typography.scale')}
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: 'var(--space-3)'
                }}>
                    {typography.sizes.map((size) => (
                        <div key={size.token} style={{
                            ...cardStyle,
                            cursor: 'default'
                        }}>
                            <p style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: size.px === '3.75rem' ? 'var(--text-3xl)' : `var(${size.token})`,
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                marginBottom: 'var(--space-2)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                                {size.name}
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: 'var(--text-xs)',
                                fontFamily: 'monospace',
                                color: 'var(--color-text-muted)'
                            }}>
                                <span>var({size.token})</span>
                                <span>{size.px}</span>
                            </div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-1)' }}>
                                {t(size.usageKey)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Spacing */}
            <section id="spacing" style={sectionStyle}>
                <h2 style={headingStyle}>{t('styleGuide.spacing.title')}</h2>
                <p style={subheadingStyle}>{t('styleGuide.spacing.description')}</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 'var(--space-4)'
                }}>
                    {spacing.map((s) => (
                        <div key={s.token} style={cardStyle}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-3)',
                                marginBottom: 'var(--space-2)'
                            }}>
                                <div style={{
                                    width: s.value,
                                    height: '20px',
                                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                                    borderRadius: 'var(--radius-sm)',
                                    flexShrink: 0,
                                    transition: 'width 0.3s ease'
                                }} />
                                <span style={{
                                    fontSize: 'var(--text-xs)',
                                    fontFamily: 'monospace',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    {s.token}
                                </span>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: 'var(--text-xs)',
                                color: 'var(--color-text-muted)'
                            }}>
                                <span>{s.value}</span>
                                <span>{t(s.usageKey)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Components */}
            <section id="components" style={{ ...sectionStyle, borderBottom: 'none' }}>
                <h2 style={headingStyle}>{t('styleGuide.components.title')}</h2>
                <p style={subheadingStyle}>{t('styleGuide.components.description')}</p>

                <div className="sg-components-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--space-8)'
                }}>
                    {/* Buttons */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {t('styleGuide.components.buttons')}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                            <button style={{
                                padding: '12px 28px',
                                borderRadius: 'var(--radius-lg)',
                                border: 'none',
                                background: 'var(--color-primary)',
                                color: '#fff',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}>
                                {t('styleGuide.components.primary')}
                            </button>
                            <button style={{
                                padding: '12px 28px',
                                borderRadius: 'var(--radius-lg)',
                                border: '2px solid var(--color-primary)',
                                background: 'transparent',
                                color: 'var(--color-primary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}>
                                {t('styleGuide.components.outline')}
                            </button>
                            <button style={{
                                padding: '12px 28px',
                                borderRadius: 'var(--radius-lg)',
                                border: 'none',
                                background: 'var(--color-secondary)',
                                color: '#fff',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                fontSize: 'var(--text-sm)',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}>
                                {t('styleGuide.components.secondary')}
                            </button>
                            <button style={{
                                padding: '8px 20px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-glass)',
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 500,
                                fontSize: 'var(--text-xs)',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}>
                                {t('styleGuide.components.glass')}
                            </button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {t('styleGuide.components.cards')}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                            <div style={{
                                padding: 'var(--space-6)',
                                borderRadius: 'var(--radius-xl)',
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)'
                            }}>
                                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                                    {t('styleGuide.components.cardSimple')}
                                </h4>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                    {t('styleGuide.components.cardSimpleDesc')}
                                </p>
                            </div>
                            <div style={{
                                padding: 'var(--space-6)',
                                borderRadius: 'var(--radius-xl)',
                                background: 'var(--color-glass)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid var(--color-glass-border)'
                            }}>
                                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                                    {t('styleGuide.components.cardGlass')}
                                </h4>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                    {t('styleGuide.components.cardGlassDesc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form elements */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {t('styleGuide.components.forms')}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                            <input
                                type="text"
                                placeholder={t('styleGuide.components.inputText')}
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-elevated)',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 'var(--text-sm)',
                                    outline: 'none'
                                }}
                            />
                            <textarea
                                placeholder={t('styleGuide.components.textarea')}
                                rows={3}
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-elevated)',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: 'var(--text-sm)',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                            />
                            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                                <span style={{
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'rgba(37,99,235,0.12)',
                                    color: 'var(--color-primary)',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600
                                }}>
                                    {t('styleGuide.components.badgeAzul')}
                                </span>
                                <span style={{
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'rgba(249,115,22,0.12)',
                                    color: 'var(--color-secondary)',
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600
                                }}>
                                    {t('styleGuide.components.badgeNaranja')}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {t('styleGuide.components.navigation')}
                        </h3>
                        <div className="sg-nav-demo" style={{
                            padding: 'var(--space-3) var(--space-4)',
                            borderRadius: 'var(--radius-xl)',
                            background: 'var(--color-glass)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid var(--color-glass-border)',
                            display: 'flex',
                            gap: 'var(--space-3)',
                            alignItems: 'center'
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-text-primary)'
                            }}>
                                {t('styleGuide.components.navLogo')}
                                <span style={{ color: 'var(--color-primary)' }}>.</span>
                            </span>
                            {[
                                { key: 'styleGuide.components.navHome', active: true },
                                { key: 'styleGuide.components.navProjects', active: false },
                                { key: 'styleGuide.components.navContact', active: false }
                            ].map((item) => (
                                <span key={item.key} style={{
                                    fontSize: 'var(--text-xs)',
                                    color: item.active ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                }}>
                                    {t(item.key)}
                                </span>
                            ))}
                            <span style={{
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--color-primary)',
                                color: '#fff',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 600,
                                fontFamily: 'var(--font-heading)',
                                cursor: 'pointer'
                            }}>
                                {t('styleGuide.components.navCta')}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: 'var(--space-8) var(--space-10)',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)'
            }}>
                {t('styleGuide.footer', { date: new Date().toLocaleDateString(i18n.language) })}
            </footer>

            <style>{`
                @media (max-width: 768px) {
                    .sg-components-grid {
                        grid-template-columns: 1fr !important;
                    }
                    #components {
                        padding-left: var(--space-4) !important;
                        padding-right: var(--space-4) !important;
                    }
                    .sg-nav-demo {
                        gap: var(--space-3) !important;
                        padding: var(--space-3) var(--space-4) !important;
                    }
                }
                @media (max-width: 480px) {
                    .sg-components-grid {
                        gap: var(--space-6) !important;
                    }
                    .sg-nav-demo {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                    }
                }
            `}</style>
        </div>
    );
}
