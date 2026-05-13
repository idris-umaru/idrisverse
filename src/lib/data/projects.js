export const projects = [
  {
    slug: 'islamic-web-app',
    title: 'Islamic Web App',
    category: 'Full Stack',
    description:
      'Leanweb is a dynamic Islamic web application built with PHP and MySQL, focused on useful content, clean flows, and dependable data handling.',
    impact: 'Pinned GitHub project showcasing backend-backed web application work.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    demo: 'https://github.com/idris-umaru/islamic-web-app',
    github: 'https://github.com/idris-umaru/islamic-web-app',
    color: '#38f2d7',
    accent: '#ffd166'
  },
  {
    slug: 'ecommerce-app',
    title: 'Ecommerce App',
    category: 'Frontend',
    description:
      'A scalable React ecommerce platform with product browsing, polished layout structure, and conversion-focused interface patterns.',
    impact: 'Demonstrates product UI thinking, component structure, and ecommerce interaction flows.',
    technologies: ['React', 'JavaScript', 'CSS', 'Ecommerce UI'],
    demo: 'https://github.com/idris-umaru/ecommerce-app',
    github: 'https://github.com/idris-umaru/ecommerce-app',
    color: '#a78bfa',
    accent: '#38f2d7'
  },
  {
    slug: 'ai-page-summarizer',
    title: 'AI Page Summarizer',
    category: 'AI Tools',
    description:
      'A JavaScript tool for summarizing web pages with an AI-assisted workflow and a focused browser-friendly user experience.',
    impact: 'Pinned GitHub project highlighting AI product thinking and utility-first UX.',
    technologies: ['JavaScript', 'AI', 'Browser APIs', 'HTML'],
    demo: 'https://github.com/idris-umaru/ai-page-summarizer',
    github: 'https://github.com/idris-umaru/ai-page-summarizer',
    color: '#60a5fa',
    accent: '#f472b6'
  },
  {
    slug: 'whisperbox-e2ee-messaging',
    title: 'Whisperbox E2EE Messaging',
    category: 'Security',
    description:
      'A secure end-to-end encrypted messaging application where messages are encrypted on the client for privacy-first communication.',
    impact: 'Shows security-minded interface engineering and modern JavaScript application architecture.',
    technologies: ['JavaScript', 'Encryption', 'Realtime UX', 'Security'],
    demo: 'https://github.com/idris-umaru/whisperbox-e2ee-messaging',
    github: 'https://github.com/idris-umaru/whisperbox-e2ee-messaging',
    color: '#fb7185',
    accent: '#22c55e'
  },
  {
    slug: 'habit-tracker-app',
    title: 'Habit Tracker App',
    category: 'Productivity',
    description:
      'A TypeScript habit tracking app designed around daily progress, clear feedback loops, and simple personal productivity flows.',
    impact: 'Pinned GitHub project demonstrating TypeScript UI structure and stateful product interactions.',
    technologies: ['TypeScript', 'State Management', 'Productivity UX', 'Responsive UI'],
    demo: 'https://github.com/idris-umaru/habit-tracker-app',
    github: 'https://github.com/idris-umaru/habit-tracker-app',
    color: '#f59e0b',
    accent: '#38f2d7'
  }
];

export const categories = ['All', ...new Set(projects.map((project) => project.category))];
