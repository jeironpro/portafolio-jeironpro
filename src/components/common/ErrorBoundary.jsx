import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--color-bg)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-body)',
                        padding: '2rem',
                        textAlign: 'center'
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2rem',
                            color: 'var(--color-primary)',
                            marginBottom: '1rem'
                        }}
                    >
                        Algo salio mal
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                        Hubo un error al cargar la escena 3D. Intenta recargar la pagina.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'var(--color-primary)',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Recargar
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
