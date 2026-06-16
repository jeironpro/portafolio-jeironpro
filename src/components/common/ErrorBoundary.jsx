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
                <div className="error-page">
                    <h1 className="error-title">Algo salio mal</h1>
                    <p className="error-desc">
                        Ocurrio un error inesperado. Intenta recargar la pagina.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="error-btn"
                    >
                        Recargar
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
