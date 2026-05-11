import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const scrollProgress = readable(0, (set) => {
  if (!browser) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    set(max > 0 ? window.scrollY / max : 0);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  return () => {
    window.removeEventListener('scroll', update);
    window.removeEventListener('resize', update);
  };
});
