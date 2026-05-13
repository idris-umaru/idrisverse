<script>
  export let elevated = false;
</script>

<article class="rounded-lg border border-line bg-panel/85 shadow-forge {elevated ? 'backdrop-blur-2xl' : ''}">
  <slot />
</article>
