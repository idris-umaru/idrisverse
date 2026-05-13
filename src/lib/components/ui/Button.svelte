<script>
  export let href = '';
  export let variant = 'primary';
  export let type = 'button';
  export let ariaLabel = '';
  export let onclick = undefined;
</script>

{#if href}
  <a
    class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-3 font-bold no-underline transition duration-200 hover:-translate-y-0.5 {variant ===
    'primary'
      ? 'border-glow bg-glow text-slate-950'
      : variant === 'quiet'
        ? 'border-transparent bg-transparent text-paper hover:bg-glow/10'
        : 'border-line bg-panel/80 text-paper hover:border-glow/50'}"
    {href}
    aria-label={ariaLabel || undefined}
  >
    <slot />
  </a>
{:else}
  <button
    class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 font-bold transition duration-200 hover:-translate-y-0.5 {variant ===
    'primary'
      ? 'border-glow bg-glow text-slate-950'
      : variant === 'quiet'
        ? 'border-transparent bg-transparent text-paper hover:bg-glow/10'
        : 'border-line bg-panel/80 text-paper hover:border-glow/50'}"
    {type}
    aria-label={ariaLabel || undefined}
    {onclick}
  >
    <slot />
  </button>
{/if}
