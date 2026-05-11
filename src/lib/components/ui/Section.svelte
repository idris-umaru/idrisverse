<script>
  export let eyebrow = '';
  export let title = '';
  export let lead = '';
</script>

<section class="section">
  <div class="section__head">
    {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
    {#if title}<h2>{title}</h2>{/if}
    {#if lead}<p>{lead}</p>{/if}
  </div>
  <slot />
</section>

<style>
  .section {
    padding: clamp(4rem, 8vw, 7rem) var(--page-pad);
  }

  .section__head {
    margin: 0 auto 2rem;
    max-width: 760px;
    text-align: center;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 4.6rem);
    line-height: 0.98;
    margin: 0;
  }

  p {
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.16rem);
    line-height: 1.7;
  }
</style>
