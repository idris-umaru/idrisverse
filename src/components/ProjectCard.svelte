<script>
  import Badge from '$lib/components/ui/Badge.svelte';
  export let project;
</script>

<a class="group grid min-h-[430px] overflow-hidden rounded-lg border border-line bg-panel/85 text-paper no-underline shadow-forge transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--project)] focus-visible:border-[color:var(--project)]" href={`/projects/${project.slug}`} style={`--project: ${project.color}; --accent-2: ${project.accent}`}>
  <div class="grid min-h-[190px] place-items-center p-4 [background:radial-gradient(circle_at_20%_20%,var(--project),transparent_28%),radial-gradient(circle_at_80%_70%,var(--accent-2),transparent_26%),linear-gradient(135deg,color-mix(in_srgb,var(--project)_24%,#101720),#0a1018)]" aria-hidden="true">
    <span class="block h-11 w-3/4 animate-soft-float rounded-lg border border-white/30 bg-white/10 motion-reduce:animate-none"></span>
    <span class="block h-11 w-1/2 animate-soft-float rounded-lg border border-white/30 bg-white/10 [animation-delay:400ms] motion-reduce:animate-none"></span>
    <span class="block h-11 w-2/3 animate-soft-float rounded-lg border border-white/30 bg-white/10 [animation-delay:800ms] motion-reduce:animate-none"></span>
  </div>
  <div class="p-5">
    <Badge>{project.category}</Badge>
    <h3 class="mb-3 mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-black leading-tight">{project.title}</h3>
    <p class="leading-7 text-mist">{project.description}</p>
    <div class="mt-5 flex flex-wrap gap-2">
      {#each project.technologies.slice(0, 3) as tech}
        <span class="font-mono text-xs font-semibold text-mist">{tech}</span>
      {/each}
    </div>
  </div>
</a>
