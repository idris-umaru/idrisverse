<script>
  import { projects, categories } from '$lib/data/projects';
  import ProjectCard from './ProjectCard.svelte';
  import { fade, fly } from 'svelte/transition';

  let activeCategory = 'All';
  $: visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);
</script>

<div class="mx-auto mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project categories">
  {#each categories as category}
    <button
      type="button"
      role="tab"
      aria-selected={activeCategory === category}
      class="cursor-pointer rounded-full border px-4 py-2 font-bold transition {activeCategory === category
        ? 'border-glow bg-glow text-slate-950'
        : 'border-line bg-panel/80 text-mist hover:text-paper'}"
      onclick={() => (activeCategory = category)}
    >
      {category}
    </button>
  {/each}
</div>

<div class="mx-auto grid max-w-6xl grid-cols-2 gap-4 max-md:grid-cols-1">
  {#each visibleProjects as project (project.slug)}
    <div in:fly={{ y: 18, duration: 280 }} out:fade={{ duration: 120 }}>
      <ProjectCard {project} />
    </div>
  {/each}
</div>
