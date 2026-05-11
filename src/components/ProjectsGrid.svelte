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

<div class="filters" role="tablist" aria-label="Project categories">
  {#each categories as category}
    <button
      type="button"
      role="tab"
      aria-selected={activeCategory === category}
      class:active={activeCategory === category}
      onclick={() => (activeCategory = category)}
    >
      {category}
    </button>
  {/each}
</div>

<div class="grid">
  {#each visibleProjects as project (project.slug)}
    <div in:fly={{ y: 18, duration: 280 }} out:fade={{ duration: 120 }}>
      <ProjectCard {project} />
    </div>
  {/each}
</div>

<style>
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  button {
    background: color-mix(in srgb, var(--panel) 78%, transparent);
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    cursor: pointer;
    font: inherit;
    font-weight: 750;
    padding: 0.65rem 0.85rem;
  }

  button.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #061014;
  }

  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 auto;
    max-width: 1120px;
  }

  @media (max-width: 760px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
