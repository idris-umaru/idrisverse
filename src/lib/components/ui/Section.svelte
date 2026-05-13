<script>
  export let eyebrow = '';
  export let title = '';
  export let lead = '';
</script>

<section class="px-[var(--page-pad)] py-16 md:py-24">
  <div class="mx-auto mb-8 max-w-3xl text-center">
    {#if eyebrow}<p class="font-mono text-sm font-extrabold uppercase text-glow">{eyebrow}</p>{/if}
    {#if title}<h2 class="m-0 text-[clamp(2rem,5vw,4.6rem)] font-black leading-none tracking-normal">{title}</h2>{/if}
    {#if lead}<p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-mist md:text-lg">{lead}</p>{/if}
  </div>
  <slot />
</section>
