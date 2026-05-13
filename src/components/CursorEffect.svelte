<script>
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { cursor } from '$lib/stores/cursor';

  onMount(() => {
    if (!browser || matchMedia('(pointer: coarse)').matches) return;

    const move = (event) => {
      cursor.set({ x: event.clientX, y: event.clientY, active: true, label: '' });
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  });
</script>

<div
  class="pointer-events-none fixed -left-[17px] -top-[17px] z-[80] h-[34px] w-[34px] rounded-full border border-glow/70 opacity-0 transition-[opacity,transform] duration-200 motion-reduce:hidden max-md:hidden"
  aria-hidden="true"
  style:transform={`translate3d(${$cursor.x}px, ${$cursor.y}px, 0)`}
  class:opacity-70={$cursor.active}
></div>
