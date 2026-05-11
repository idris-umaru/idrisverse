export const projects = [
  {
    slug: 'signaldeck',
    title: 'SignalDeck',
    category: 'Product',
    description:
      'A real-time operations cockpit for teams tracking incidents, releases, and customer impact from one kinetic command surface.',
    impact: 'Reduced response planning time by 34% in simulated release drills.',
    technologies: ['SvelteKit', 'WebSocket', 'Canvas', 'IndexedDB'],
    demo: 'https://example.com/signaldeck',
    github: 'https://github.com/example/signaldeck',
    color: '#00e5ff',
    accent: '#ffd166'
  },
  {
    slug: 'orbit-ui',
    title: 'Orbit UI',
    category: 'Design Systems',
    description:
      'A token-driven component system with accessible primitives, motion guidelines, and production-ready documentation.',
    impact: 'Shipped 42 reusable components with keyboard-first interaction contracts.',
    technologies: ['Svelte', 'Storybook', 'CSS Variables', 'A11y'],
    demo: 'https://example.com/orbit-ui',
    github: 'https://github.com/example/orbit-ui',
    color: '#8cff7a',
    accent: '#ff5c8a'
  },
  {
    slug: 'forge-labs',
    title: 'Forge Labs',
    category: 'Experimental',
    description:
      'A playful frontend laboratory for testing scroll choreography, input physics, and GPU-friendly visual systems.',
    impact: 'Maintained 60fps animation on mid-range mobile devices.',
    technologies: ['SvelteKit', 'Web Animations', 'CSS Houdini', 'Vite'],
    demo: 'https://example.com/forge-labs',
    github: 'https://github.com/example/forge-labs',
    color: '#ff7a45',
    accent: '#7dd3fc'
  },
  {
    slug: 'aura-cms',
    title: 'Aura CMS',
    category: 'Content',
    description:
      'A fast editorial workspace with optimistic publishing flows, visual diffing, and resilient offline drafts.',
    impact: 'Improved content QA throughput with inline preview comparison.',
    technologies: ['SvelteKit', 'SQLite', 'Forms', 'SSR'],
    demo: 'https://example.com/aura-cms',
    github: 'https://github.com/example/aura-cms',
    color: '#c084fc',
    accent: '#2dd4bf'
  }
];

export const categories = ['All', ...new Set(projects.map((project) => project.category))];
