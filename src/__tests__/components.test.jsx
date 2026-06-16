import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key, fallback) => fallback || key,
        i18n: { language: 'es', changeLanguage: vi.fn() }
    })
}));

describe('TiltCard', () => {
    let TiltCard;

    beforeEach(async () => {
        TiltCard = (await import('../components/ui/TiltCard')).default;
    });

    const mockProject = {
        id: '1',
        titleKey: 'Proyecto Test',
        descriptionKey: 'Descripción test',
        tags: ['React', 'Node'],
        image: null,
        color: '#4a90e2',
        shape: 'box',
        url: null,
        github: 'https://github.com/test'
    };

    it('renderiza el título y la descripción', () => {
        render(<TiltCard project={mockProject} />);
        expect(screen.getByText('Proyecto Test')).toBeInTheDocument();
        expect(screen.getByText('Descripción test')).toBeInTheDocument();
    });

    it('renderiza los tags', () => {
        render(<TiltCard project={mockProject} />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Node')).toBeInTheDocument();
    });
});

describe('LangSwitcher', () => {
    let LangSwitcher;

    beforeEach(async () => {
        LangSwitcher = (await import('../components/layout/LangSwitcher')).default;
    });

    it('renderiza los 3 botones de idioma', () => {
        render(<LangSwitcher />);
        expect(screen.getByText('ES')).toBeInTheDocument();
        expect(screen.getByText('CA')).toBeInTheDocument();
        expect(screen.getByText('EN')).toBeInTheDocument();
    });
});
