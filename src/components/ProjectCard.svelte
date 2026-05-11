<script>
  import Badge from '$lib/components/ui/Badge.svelte';
  export let project;
</script>

<a class="project-card" href={`/projects/${project.slug}`} style={`--project: ${project.color}; --accent-2: ${project.accent}`}>
  <div class="preview" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="body">
    <Badge>{project.category}</Badge>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div class="tech">
      {#each project.technologies.slice(0, 3) as tech}
        <span>{tech}</span>
      {/each}
    </div>
  </div>
</a>

<style>
  .project-card {
    background: color-mix(in srgb, var(--panel) 88%, transparent);
    border: 1px solid var(--line);
    border-radius: 8px;
    color: var(--text);
    display: grid;
    min-height: 430px;
    overflow: hidden;
    text-decoration: none;
    transition:
      transform 220ms ease,
      border-color 220ms ease;
  }

  .project-card:hover,
  .project-card:focus-visible {
    border-color: color-mix(in srgb, var(--project) 65%, transparent);
    transform: translateY(-6px);
  }

  .preview {
    background:
      radial-gradient(circle at 20% 20%, var(--project), transparent 28%),
      radial-gradient(circle at 80% 70%, var(--accent-2), transparent 26%),
      linear-gradient(135deg, color-mix(in srgb, var(--project) 24%, #101720), #0a1018);
    display: grid;
    min-height: 190px;
    padding: 1rem;
    place-items: center;
  }

  .preview span {
    animation: float 5s ease-in-out infinite;
    background: color-mix(in srgb, white 12%, transparent);
    border: 1px solid color-mix(in srgb, white 30%, transparent);
    border-radius: 8px;
    display: block;
    height: 42px;
    width: 72%;
  }

  .preview span:nth-child(2) {
    animation-delay: 400ms;
    width: 54%;
  }

  .preview span:nth-child(3) {
    animation-delay: 800ms;
    width: 64%;
  }

  .body {
    padding: 1.25rem;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    margin: 1rem 0 0.6rem;
  }

  p {
    color: var(--muted);
    line-height: 1.65;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }

  .tech span {
    color: var(--muted);
    font-family: var(--mono);
    font-size: 0.82rem;
  }

  @keyframes float {
    50% {
      transform: translateY(-9px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .preview span {
      animation: none;
    }
  }
</style>
