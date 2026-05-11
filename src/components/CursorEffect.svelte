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
  class="cursor"
  aria-hidden="true"
  style:transform={`translate3d(${$cursor.x}px, ${$cursor.y}px, 0)`}
  class:active={$cursor.active}
></div>

<style>
  .cursor {
    border: 1px solid color-mix(in srgb, var(--accent) 70%, white);
    border-radius: 999px;
    height: 34px;
    left: -17px;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: -17px;
    transition:
      opacity 200ms ease,
      transform 60ms linear;
    width: 34px;
    z-index: 80;
  }

  .cursor.active {
    opacity: 0.7;
  }

  @media (pointer: coarse), (prefers-reduced-motion: reduce) {
    .cursor {
      display: none;
    }
  }
</style>
