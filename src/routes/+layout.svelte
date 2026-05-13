<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { scrollProgress } from '$lib/stores/scroll';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import CursorEffect from '../components/CursorEffect.svelte';
  import '../app.css';

  onMount(() => {
    if (browser) {
      document.documentElement.dataset.theme = $theme;
    }
  });

  $: if (browser) {
    document.documentElement.dataset.theme = $theme;
  }
</script>

<div class="fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left bg-glow" style:transform={`scaleX(${$scrollProgress})`} aria-hidden="true"></div>
<Navbar />
<CursorEffect />
<main id="main">
  <slot />
</main>
<Footer />
