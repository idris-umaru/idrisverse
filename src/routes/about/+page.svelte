<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import { skills, timeline } from '$lib/data/profile';
</script>

<svelte:head>
  <title>About | NeonForge</title>
</svelte:head>

<Section
  eyebrow="About"
  title="A frontend developer building useful, polished web apps."
  lead="This portfolio is structured like a product surface: stateful, accessible, animated with restraint, and designed around meaningful interaction."
>
  <div class="mx-auto grid max-w-6xl grid-cols-[0.8fr_1.2fr] gap-4 max-md:grid-cols-1">
    <section class="rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <h2 class="mt-0 text-2xl font-black">Capabilities</h2>
      <div class="flex flex-wrap gap-2">
        {#each skills as skill}
          <Badge>{skill}</Badge>
        {/each}
      </div>
    </section>
    <section class="rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <h2 class="mt-0 text-2xl font-black">Timeline</h2>
      {#each timeline as item}
        <article class="grid grid-cols-[76px_1fr] gap-4 border-t border-line py-4 first:border-t-0">
          <strong class="font-mono text-glow">{item.year}</strong>
          <div>
            <h3 class="m-0 text-lg font-extrabold">{item.title}</h3>
            <p class="mt-2 leading-7 text-mist">{item.body}</p>
          </div>
        </article>
      {/each}
    </section>
  </div>
</Section>
