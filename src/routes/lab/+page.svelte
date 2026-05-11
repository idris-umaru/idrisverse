<script>
  import Section from '$lib/components/ui/Section.svelte';
  import Terminal from '../../components/Terminal.svelte';

  let density = 18;
  let speed = 6;

  const point = (index, multiplier) => `${(index * multiplier) % 100}%`;
</script>

<svelte:head>
  <title>Lab | NeonForge</title>
</svelte:head>

<Section
  eyebrow="Interactive lab"
  title="A control room for playful frontends."
  lead="Tune a lightweight CSS particle field, then jump into the command interface. No canvas dependency required, so the page stays fast and accessible."
>
  <div class="lab">
    <section class="field" style={`--density: ${density}; --speed: ${speed}s`} aria-label="Animated particle field">
      {#each Array(density) as _, index}
        <span style={`--x: ${point(index, 37)}; --y: ${point(index, 23)}; --i: ${index}`}></span>
      {/each}
    </section>

    <form class="controls">
      <label>
        Particle density
        <input bind:value={density} min="8" max="34" type="range" />
      </label>
      <label>
        Drift speed
        <input bind:value={speed} min="3" max="12" type="range" />
      </label>
    </form>
  </div>

  <Terminal />
</Section>

<style>
  .lab {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 320px;
    margin: 0 auto 2rem;
    max-width: 1080px;
  }

  .field {
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, transparent), transparent),
      color-mix(in srgb, var(--panel) 90%, transparent);
    border: 1px solid var(--line);
    border-radius: 8px;
    min-height: 360px;
    overflow: hidden;
    position: relative;
  }

  .field span {
    animation: drift var(--speed) ease-in-out infinite alternate;
    background: var(--accent);
    border-radius: 50%;
    height: 7px;
    left: var(--x);
    opacity: 0.8;
    position: absolute;
    top: var(--y);
    width: 7px;
  }

  .field span:nth-child(3n) {
    background: #ffd166;
  }

  .field span:nth-child(4n) {
    background: #ff5c8a;
  }

  .controls {
    align-self: stretch;
    border: 1px solid var(--line);
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    padding: 1.2rem;
  }

  label {
    color: var(--muted);
    display: grid;
    font-weight: 750;
    gap: 0.7rem;
  }

  input {
    accent-color: var(--accent);
  }

  @keyframes drift {
    to {
      transform: translate3d(24px, -30px, 0) scale(1.8);
    }
  }

  @media (max-width: 820px) {
    .lab {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .field span {
      animation: none;
    }
  }
</style>
