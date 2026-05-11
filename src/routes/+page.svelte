<script>
  import Hero from '../components/Hero.svelte';
  import ProjectsGrid from '../components/ProjectsGrid.svelte';
  import Terminal from '../components/Terminal.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { reveal } from '$lib/animations/reveal';
</script>

<svelte:head>
  <title>NeonForge | Svelte Developer Portfolio</title>
</svelte:head>

<Hero />

<div use:reveal>
  <Section
    eyebrow="Selected work"
    title="Interfaces with velocity and nerve."
    lead="Each project is designed to show production architecture, motion restraint, and the kind of polish that survives real users."
  >
    <ProjectsGrid />
  </Section>
</div>

<div use:reveal={{ delay: 120 }}>
  <Section
    eyebrow="Creative feature"
    title="Command the portfolio."
    lead="A keyboard-friendly developer tools experience gives the site a playful second navigation layer."
  >
    <Terminal />
  </Section>
</div>
