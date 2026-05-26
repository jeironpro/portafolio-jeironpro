import { describe, it, expect } from 'vitest';
import { lerp, clamp, formatUrl } from '../utils/helpers';

describe('lerp', () => {
    it('interpola correctamente entre dos valores', () => {
        expect(lerp(0, 10, 0.5)).toBe(5);
        expect(lerp(0, 10, 0)).toBe(0);
        expect(lerp(0, 10, 1)).toBe(10);
    });
});

describe('clamp', () => {
    it('limita el valor dentro del rango', () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(-1, 0, 10)).toBe(0);
        expect(clamp(15, 0, 10)).toBe(10);
    });
});

describe('formatUrl', () => {
    it('anade https:// si no tiene protocolo', () => {
        expect(formatUrl('ejemplo.com')).toBe('https://ejemplo.com');
    });

    it('devuelve la URL original si ya tiene protocolo', () => {
        expect(formatUrl('http://ejemplo.com')).toBe('http://ejemplo.com');
        expect(formatUrl('https://ejemplo.com')).toBe('https://ejemplo.com');
    });

    it('devuelve # si la URL es null o undefined', () => {
        expect(formatUrl(null)).toBe('#');
        expect(formatUrl(undefined)).toBe('#');
    });
});
