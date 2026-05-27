# Jeiron Espinal - Portafolio

Portafolio personal con temática oscura, fondo 3D de partículas y diseño glassmorphism. Construido con React, Vite y Three.js (React Three Fiber).

## Stack tecnológico

| Tecnología | Versión |
|-----------|---------|
| React | 18+ |
| Vite | 5+ |
| @react-three/fiber | 8+ |
| @react-three/drei | 9+ |
| Three.js | 0.160+ |
| Zustand | 4+ |
| Vitest | 4+ |

## Arquitectura

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── scene/         # BackgroundCanvas (partículas 3D)
│   ├── sections/      # Hero, About, Projects, Skills, Contact
│   └── ui/            # TiltCard, ProjectModal, ErrorBoundary
├── data/
│   └── portfolio.js   # Datos de proyectos, skills e info personal
├── hooks/
│   └── useStore.js    # Estado global (Zustand)
├── pages/
│   └── StyleGuidePage.jsx  # Guía de estilos visual
├── styles/
│   └── tokens.css     # Sistema de diseño (colores, tipografía, sombras)
├── __tests__/
│   └── helpers.test.js
├── App.jsx            # Componente raíz
├── main.jsx           # Entry point
└── index.css          # Estilos globales
```

## Diseño

- Sistema de tokens CSS en `src/styles/tokens.css`
- Paleta: Azul (#2563EB) como primario, Naranja (#F97316) como secundario
- Tipografia: Montserrat (todas las variantes)
- Fondo oscuro con efectos glass (blur, backdrop-filter)
- Partículas 3D que reaccionan al scroll y mouse

## Scripts

```bash
npm install
npm run dev      # Desarrollo con HMR
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm test         # Tests unitarios (Vitest)
npm run lint     # ESLint + Stylelint
```

## Personalización

Edita `src/data/portfolio.js` para cambiar:
- `personalInfo`: nombre, email, redes sociales
- `projects`: lista de proyectos
- `skills`: habilidades con nivel (0-100)

Los tokens de diseño se configuran en `src/styles/tokens.css`.

## Reglas del proyecto

- No se utilizan emojis en el código
- Todo el código escrito en español
- Estructura semántica en HTML
- Media queries para responsive
- ESLint + Prettier + Stylelint configurados
