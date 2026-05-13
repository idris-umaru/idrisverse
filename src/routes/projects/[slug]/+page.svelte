<script>
  import Badge from '$lib/components/ui/Badge.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let data;
  const project = data.project;
</script>

<svelte:head>
  <title>{project.title} | NeonForge</title>
</svelte:head>

<article class="px-[var(--page-pad)] py-16 md:py-24" style={`--project: ${project.color}; --accent-2: ${project.accent}`}>
  <header class="mx-auto max-w-4xl text-center">
    <Badge>{project.category}</Badge>
    <h1 class="my-5 text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.86] tracking-normal">{project.title}</h1>
    <p class="text-[clamp(1.05rem,2vw,1.28rem)] leading-8 text-mist">{project.description}</p>
    <div class="mt-6 flex flex-wrap justify-center gap-3">
      <Button href={project.demo}>Live demo</Button>
      <Button href={project.github} variant="ghost">GitHub repo</Button>
    </div>
  </header>

  <section class="mx-auto my-12 max-w-6xl" aria-label={`${project.title} interface preview`}>
    <div class="min-h-[clamp(320px,52vw,620px)] overflow-hidden rounded-lg border border-[color:var(--project)]/40 p-4 shadow-forge [background:radial-gradient(circle_at_20%_20%,var(--project),transparent_30%),radial-gradient(circle_at_82%_76%,var(--accent-2),transparent_24%),#071019]">
      <div class="mb-4 h-11 rounded-md bg-white/10"></div>
      <div class="grid grid-cols-[1.2fr_0.8fr] gap-4 max-lg:grid-cols-1">
        <span class="min-h-40 animate-[lift_5s_ease-in-out_infinite] rounded-lg border border-white/20 bg-white/10 motion-reduce:animate-none"></span>
        <span class="min-h-40 animate-[lift_5s_ease-in-out_infinite] rounded-lg border border-white/20 bg-white/10 [animation-delay:200ms] motion-reduce:animate-none"></span>
        <span class="col-span-full min-h-40 animate-[lift_5s_ease-in-out_infinite] rounded-lg border border-white/20 bg-white/10 [animation-delay:400ms] motion-reduce:animate-none max-lg:col-span-1"></span>
        <span class="min-h-40 animate-[lift_5s_ease-in-out_infinite] rounded-lg border border-white/20 bg-white/10 [animation-delay:600ms] motion-reduce:animate-none"></span>
      </div>
    </div>
  </section>

  <section class="mx-auto grid max-w-6xl grid-cols-[1fr_1fr_0.8fr] gap-4 max-lg:grid-cols-1">
    <div class="rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <h2 class="mt-0 text-2xl font-black">Engineering Focus</h2>
      <p class="leading-7 text-mist">
        The build prioritizes resilient state, keyboard-accessible interactions, and GPU-friendly transitions.
        Motion is handled with transform and opacity so the interface stays smooth under pressure.
      </p>
    </div>
    <div class="rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <h2 class="mt-0 text-2xl font-black">Measured Impact</h2>
      <p class="leading-7 text-mist">{project.impact}</p>
    </div>
    <div class="rounded-lg border border-line bg-panel/80 p-5 shadow-forge backdrop-blur-xl">
      <h2 class="mt-0 text-2xl font-black">Stack</h2>
      <ul class="m-0 grid gap-2 pl-5 text-mist">
        {#each project.technologies as tech}
          <li class="leading-7">{tech}</li>
        {/each}
      </ul>
    </div>
  </section>
</article>
