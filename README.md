# Jeiron Espinal — Portafolio

Portafolio personal con tematica oscura, fondo 3D de particulas y diseno glassmorphism. Construido con React, Vite y Three.js (React Three Fiber).

## Stack tecnológico

| Tecnologia | Version |
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
│   ├── scene/         # BackgroundCanvas (particulas 3D)
│   ├── sections/      # Hero, About, Projects, Skills, Contact
│   └── ui/            # TiltCard, ProjectModal, ErrorBoundary
├── data/
│   └── portfolio.js   # Datos de proyectos, skills e info personal
├── hooks/
│   └── useStore.js    # Estado global (Zustand)
├── pages/
│   └── StyleGuidePage.jsx  # Guia de estilos visual
├── styles/
│   └── tokens.css     # Sistema de diseno (colores, tipografia, sombras)
├── __tests__/
│   └── helpers.test.js
├── App.jsx            # Componente raiz
├── main.jsx           # Entry point
└── index.css          # Estilos globales
```

## Diseno

- Sistema de tokens CSS en `src/styles/tokens.css`
- Paleta: Azul (#2563EB) como primario, Naranja (#F97316) como secundario
- Tipografia: Montserrat (todas las variantes)
- Fondo oscuro con efectos glass (blur, backdrop-filter)
- Particulas 3D que reaccionan al scroll y mouse

## Scripts

```bash
npm install
npm run dev      # Desarrollo con HMR
npm run build    # Build de produccion
npm run preview  # Vista previa del build
npm test         # Tests unitarios (Vitest)
npm run lint     # ESLint + Stylelint
```

## Personalizacion

Edita `src/data/portfolio.js` para cambiar:
- `personalInfo`: nombre, email, redes sociales
- `projects`: lista de proyectos
- `skills`: habilidades con nivel (0-100)

Los tokens de diseno se configuran en `src/styles/tokens.css`.

## Reglas del proyecto

- No se utilizan emojis en el codigo
- Todo codigo escrito en castellano
- Estructura semantica en HTML
- Media queries para responsive
- ESLint + Prettier + Stylelint configurados
