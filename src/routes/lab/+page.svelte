<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Terminal from '../../components/Terminal.svelte';

  let density = 18;
  let speed = 6;

  const point = (index, multiplier) => `${(index * multiplier) % 100}%`;
</script>

<svelte:head>
  <title>Lab | NeonForge</title>
</svelte:head>

<Section
  eyebrow="Interactive lab"
  title="A control room for playful frontends."
  lead="Tune a lightweight CSS particle field, then jump into the command interface. No canvas dependency required, so the page stays fast and accessible."
>
  <div class="mx-auto mb-8 grid max-w-6xl grid-cols-[1fr_320px] gap-4 max-lg:grid-cols-1">
    <section
      class="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-panel/80 shadow-forge [background:linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,transparent),transparent),rgb(var(--panel-rgb)/.9)]"
      style={`--density: ${density}; --speed: ${speed}s`}
      aria-label="Animated particle field"
    >
      {#each Array(density) as _, index}
        <span
          class="absolute h-[7px] w-[7px] rounded-full opacity-80 motion-reduce:animate-none {index % 4 === 0
            ? 'bg-[#ff5c8a]'
            : index % 3 === 0
              ? 'bg-[#ffd166]'
              : 'bg-glow'} [animation:drift_var(--speed)_ease-in-out_infinite_alternate]"
          style={`left: ${point(index, 37)}; top: ${point(index, 23)};`}
        ></span>
      {/each}
    </section>

    <form class="grid content-start gap-5 rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <label class="grid gap-3 font-bold text-mist">
        Particle density
        <input class="accent-glow" bind:value={density} min="8" max="34" type="range" />
      </label>
      <label class="grid gap-3 font-bold text-mist">
        Drift speed
        <input class="accent-glow" bind:value={speed} min="3" max="12" type="range" />
      </label>
    </form>
  </div>

  <Terminal />
</Section>
