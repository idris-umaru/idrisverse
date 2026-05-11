<script>
  export let elevated = false;
</script>

<article class:elevated class="card">
  <slot />
</article>

<style>
  .card {
    background: color-mix(in srgb, var(--panel) 88%, transparent);
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: var(--shadow);
  }

  .elevated {
    backdrop-filter: blur(18px);
  }
</style>
