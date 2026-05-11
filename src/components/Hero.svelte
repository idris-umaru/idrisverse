<script>
  import Button from '$lib/components/ui/Button.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import { profile, skills } from '$lib/data/profile';
</script>

<section class="hero" aria-labelledby="hero-title">
  <div class="hero__grid" aria-hidden="true"></div>
  <div class="hero__content">
    <Badge>Available for Svelte-heavy product work</Badge>
    <h1 id="hero-title">{profile.name}</h1>
    <p class="title">{profile.title}</p>
    <p class="intro">{profile.intro}</p>
    <div class="actions">
      <Button href="/projects">Explore projects</Button>
      <Button href="/resume.pdf" variant="ghost">Download resume</Button>
    </div>
    <div class="socials" aria-label="Social links">
      {#each profile.socials as social}
        <a href={social.href} rel="noreferrer" target="_blank">{social.label}</a>
      {/each}
    </div>
  </div>
  <div class="hero__visual" aria-label="Animated interface preview">
    <div class="orbital">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="console">
      <p>forge.run()</p>
      <p>motion: stable</p>
      <p>latency: 18ms</p>
    </div>
  </div>
  <div class="skill-rail" aria-label="Core skills">
    {#each skills as skill}
      <span>{skill}</span>
    {/each}
  </div>
</section>

<style>
  .hero {
    display: grid;
    gap: 2rem;
    grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    min-height: calc(100vh - 75px);
    overflow: hidden;
    padding: clamp(4rem, 8vw, 7rem) var(--page-pad) 2.2rem;
    position: relative;
  }

  .hero__grid {
    background:
      linear-gradient(color-mix(in srgb, var(--accent) 12%, transparent) 1px, transparent 1px),
      linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, transparent) 1px, transparent 1px);
    background-size: 54px 54px;
    inset: 0;
    mask-image: radial-gradient(circle at 50% 20%, black, transparent 72%);
    opacity: 0.45;
    position: absolute;
  }

  .hero__content,
  .hero__visual,
  .skill-rail {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: clamp(4rem, 14vw, 10.5rem);
    letter-spacing: 0;
    line-height: 0.82;
    margin: 1rem 0;
    max-width: 8ch;
  }

  .title {
    color: var(--accent);
    font-size: clamp(1.2rem, 2.8vw, 2rem);
    font-weight: 850;
    margin: 0;
  }

  .intro {
    color: var(--muted);
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.7;
    max-width: 650px;
  }

  .actions,
  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.4rem;
  }

  .socials a {
    color: var(--muted);
    font-weight: 750;
  }

  .hero__visual {
    align-self: center;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }

  .orbital {
    animation: spin 18s linear infinite;
    aspect-ratio: 1;
    border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
    border-radius: 50%;
    position: absolute;
    width: min(78vw, 520px);
  }

  .orbital span {
    background: var(--accent);
    border-radius: 50%;
    box-shadow: 0 0 34px var(--accent);
    height: 0.75rem;
    position: absolute;
    width: 0.75rem;
  }

  .orbital span:nth-child(1) {
    left: 12%;
    top: 20%;
  }

  .orbital span:nth-child(2) {
    right: 8%;
    top: 48%;
  }

  .orbital span:nth-child(3) {
    bottom: 14%;
    left: 48%;
  }

  .console {
    background: color-mix(in srgb, var(--panel) 84%, transparent);
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: var(--shadow);
    font-family: var(--mono);
    min-width: min(84vw, 340px);
    padding: 1.2rem;
    transform: rotate(-3deg);
  }

  .console p {
    margin: 0.45rem 0;
  }

  .skill-rail {
    align-self: end;
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    grid-column: 1 / -1;
  }

  .skill-rail span {
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    padding: 0.55rem 0.75rem;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width: 860px) {
    .hero {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .hero__visual {
      min-height: 360px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .orbital {
      animation: none;
    }
  }
</style>
