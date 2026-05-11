<script>
  import Badge from '$lib/components/ui/Badge.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  export let data;
  const project = data.project;
</script>

<svelte:head>
  <title>{project.title} | NeonForge</title>
</svelte:head>

<article class="detail" style={`--project: ${project.color}; --accent-2: ${project.accent}`}>
  <header class="detail__header">
    <Badge>{project.category}</Badge>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <div class="actions">
      <Button href={project.demo}>Live demo</Button>
      <Button href={project.github} variant="ghost">GitHub repo</Button>
    </div>
  </header>

  <section class="showcase" aria-label={`${project.title} interface preview`}>
    <div class="screen">
      <div class="screen__bar"></div>
      <div class="screen__grid">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </section>

  <section class="detail__body">
    <div>
      <h2>Engineering Focus</h2>
      <p>
        The build prioritizes resilient state, keyboard-accessible interactions, and GPU-friendly transitions.
        Motion is handled with transform and opacity so the interface stays smooth under pressure.
      </p>
    </div>
    <div>
      <h2>Measured Impact</h2>
      <p>{project.impact}</p>
    </div>
    <div>
      <h2>Stack</h2>
      <ul>
        {#each project.technologies as tech}
          <li>{tech}</li>
        {/each}
      </ul>
    </div>
  </section>
</article>

<style>
  .detail {
    padding: clamp(4rem, 8vw, 7rem) var(--page-pad);
  }

  .detail__header {
    margin: 0 auto;
    max-width: 900px;
    text-align: center;
  }

  h1 {
    font-size: clamp(3.5rem, 11vw, 8rem);
    line-height: 0.86;
    margin: 1rem 0;
  }

  .detail__header p {
    color: var(--muted);
    font-size: clamp(1.05rem, 2vw, 1.28rem);
    line-height: 1.7;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .showcase {
    margin: 3rem auto;
    max-width: 1100px;
  }

  .screen {
    background:
      radial-gradient(circle at 20% 20%, var(--project), transparent 30%),
      radial-gradient(circle at 82% 76%, var(--accent-2), transparent 24%),
      #071019;
    border: 1px solid color-mix(in srgb, var(--project) 44%, transparent);
    border-radius: 8px;
    min-height: clamp(320px, 52vw, 620px);
    overflow: hidden;
    padding: 1rem;
  }

  .screen__bar {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 6px;
    height: 44px;
    margin-bottom: 1rem;
  }

  .screen__grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1.2fr 0.8fr;
  }

  .screen__grid span {
    animation: lift 5s ease-in-out infinite;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    min-height: 160px;
  }

  .screen__grid span:nth-child(3) {
    grid-column: 1 / -1;
  }

  .detail__body {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 0.8fr;
    margin: 0 auto;
    max-width: 1100px;
  }

  .detail__body > div {
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 1.2rem;
  }

  h2 {
    margin-top: 0;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.65;
  }

  @keyframes lift {
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 860px) {
    .detail__body,
    .screen__grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .screen__grid span {
      animation: none;
    }
  }
</style>
