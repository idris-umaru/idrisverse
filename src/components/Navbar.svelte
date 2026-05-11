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
</script>

<script>
  $: currentTheme = $theme;
</script>

<a class="skip" href="#main">Skip to content</a>
<nav class="nav" aria-label="Primary navigation">
  <a class="brand" href="/" aria-label="NeonForge home">
    <span aria-hidden="true">NF</span>
    NeonForge
  </a>
  <div class="nav__links">
    {#each links as link}
      <a class:active={$page.url.pathname === link.href} href={link.href}>{link.label}</a>
    {/each}
  </div>
  <button class="theme-toggle" type="button" onclick={() => toggleTheme(currentTheme)}>
    <span aria-hidden="true">{currentTheme === 'dark' ? 'Sun' : 'Moon'}</span>
    <span class="sr-only">Toggle theme</span>
  </button>
</nav>

<style>
  .skip {
    background: var(--accent);
    color: #061014;
    font-weight: 800;
    left: 1rem;
    padding: 0.7rem 1rem;
    position: fixed;
    top: -5rem;
    z-index: 100;
  }

  .skip:focus {
    top: 1rem;
  }

  .nav {
    align-items: center;
    backdrop-filter: blur(20px);
    background: color-mix(in srgb, var(--bg) 78%, transparent);
    border-bottom: 1px solid var(--line);
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    left: 0;
    padding: 0.9rem var(--page-pad);
    position: sticky;
    right: 0;
    top: 0;
    z-index: 60;
  }

  .brand {
    align-items: center;
    color: var(--text);
    display: inline-flex;
    font-weight: 900;
    gap: 0.6rem;
    text-decoration: none;
  }

  .brand span {
    background: var(--accent);
    border-radius: 6px;
    color: #061014;
    display: grid;
    height: 2.2rem;
    place-items: center;
    width: 2.2rem;
  }

  .nav__links {
    display: flex;
    gap: 0.4rem;
    justify-content: center;
  }

  .nav__links a,
  .theme-toggle {
    border-radius: 999px;
    color: var(--muted);
    padding: 0.62rem 0.8rem;
    text-decoration: none;
  }

  .nav__links a.active,
  .nav__links a:hover {
    background: color-mix(in srgb, var(--accent) 14%, transparent);
    color: var(--text);
  }

  .theme-toggle {
    background: color-mix(in srgb, var(--panel) 76%, transparent);
    border: 1px solid var(--line);
    color: var(--text);
    cursor: pointer;
    min-height: 2.6rem;
    min-width: 2.6rem;
  }

  @media (max-width: 760px) {
    .nav {
      grid-template-columns: 1fr auto;
    }

    .nav__links {
      grid-column: 1 / -1;
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 0.2rem;
    }
  }
</style>
