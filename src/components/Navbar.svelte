<script>
  import { page } from '$app/stores';
  import { theme, toggleTheme } from '$lib/stores/theme';

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/lab', label: 'Lab' },
    { href: '/contact', label: 'Contact' }
  ];

  $: currentTheme = $theme;
</script>

<a class="fixed left-4 top-[-5rem] z-[100] bg-glow px-4 py-3 font-extrabold text-slate-950 focus:top-4" href="#main">Skip to content</a>
<nav class="sticky top-0 z-[60] grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line/80 bg-ink/80 px-[var(--page-pad)] py-3 backdrop-blur-2xl max-md:grid-cols-[1fr_auto]" aria-label="Primary navigation">
  <a class="inline-flex items-center gap-3 font-black text-paper no-underline" href="/" aria-label="Idris Umaru portfolio home">
    <span class="grid h-9 w-9 place-items-center rounded-lg bg-glow text-slate-950" aria-hidden="true">IU</span>
    Idris Umaru
  </a>
  <div class="flex justify-center gap-1 max-md:col-span-full max-md:justify-start max-md:overflow-x-auto max-md:pb-1">
    {#each links as link}
      <a
        class="rounded-full px-3 py-2 text-sm font-bold no-underline transition hover:bg-glow/10 hover:text-paper {$page.url.pathname ===
        link.href
          ? 'bg-glow/15 text-paper'
          : 'text-mist'}"
        href={link.href}>{link.label}</a
      >
    {/each}
  </div>
  <button class="min-h-11 min-w-11 cursor-pointer rounded-full border border-line bg-panel/80 px-3 py-2 font-bold text-paper transition hover:border-glow/50" type="button" onclick={() => toggleTheme(currentTheme)}>
    <span aria-hidden="true">{currentTheme === 'dark' ? 'Sun' : 'Moon'}</span>
    <span class="sr-only">Toggle theme</span>
  </button>
</nav>
