<script>
  export let href = '';
  export let variant = 'primary';
  export let type = 'button';
  export let ariaLabel = '';
  export let onclick = undefined;
</script>

{#if href}
  <a class="button {variant}" {href} aria-label={ariaLabel || undefined}>
    <slot />
  </a>
{:else}
  <button class="button {variant}" {type} aria-label={ariaLabel || undefined} {onclick}>
    <slot />
  </button>
{/if}

<style>
  .button {
    align-items: center;
    border: 1px solid color-mix(in srgb, var(--text) 18%, transparent);
    border-radius: 999px;
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: 700;
    gap: 0.55rem;
    justify-content: center;
    min-height: 2.8rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      background 180ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .primary {
    background: var(--accent);
    border-color: var(--accent);
    color: #051014;
  }

  .ghost {
    background: color-mix(in srgb, var(--panel) 82%, transparent);
    color: var(--text);
  }

  .quiet {
    background: transparent;
    color: var(--text);
  }
</style>
