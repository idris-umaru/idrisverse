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
  title="Engineering for feel, speed, and trust."
  lead="This portfolio is structured like a product surface: stateful, accessible, animated with restraint, and designed around meaningful interaction."
>
  <div class="about-grid">
    <section class="panel">
      <h2>Capabilities</h2>
      <div class="skills">
        {#each skills as skill}
          <Badge>{skill}</Badge>
        {/each}
      </div>
    </section>
    <section class="panel">
      <h2>Timeline</h2>
      {#each timeline as item}
        <article class="timeline">
          <strong>{item.year}</strong>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      {/each}
    </section>
  </div>
</Section>

<style>
  .about-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.8fr 1.2fr;
    margin: 0 auto;
    max-width: 1080px;
  }

  .panel {
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 1.2rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .timeline {
    display: grid;
    gap: 1rem;
    grid-template-columns: 76px 1fr;
    padding: 1rem 0;
  }

  .timeline + .timeline {
    border-top: 1px solid var(--line);
  }

  p {
    color: var(--muted);
    line-height: 1.65;
  }

  @media (max-width: 780px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
