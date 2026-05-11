<script>
  import ProjectsGrid from '../../components/ProjectsGrid.svelte';
  import Section from '$lib/components/ui/Section.svelte';
</script>

<svelte:head>
  <title>Projects | NeonForge</title>
</svelte:head>

<Section
  eyebrow="Project index"
  title="Built systems, not screenshots."
  lead="Filter by category, inspect the interaction model, and open deeper project pages with links, stack notes, and outcomes."
>
  <ProjectsGrid />
</Section>
