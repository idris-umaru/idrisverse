<script>
  import { tick } from 'svelte';
  import { projects } from '$lib/data/projects';

  let input = '';
  let lines = [
    { type: 'system', text: 'NeonForge terminal online. Try help, skills, projects, open signaldeck, theme.' }
  ];

  const commands = {
    help: 'Commands: skills, projects, open <project-slug>, contact, clear, theme',
    skills: 'SvelteKit, accessibility, performance budgets, design systems, motion engineering.',
    projects: projects.map((project) => `${project.slug}: ${project.title}`).join(' | '),
    contact: 'Open /contact or email hello@alexcarter.dev.'
  };

  async function submit() {
    const command = input.trim().toLowerCase();
    if (!command) return;

    lines = [...lines, { type: 'input', text: `> ${input}` }];
    input = '';

    if (command === 'clear') {
      lines = [];
      return;
    }

    if (command === 'theme') {
      lines = [...lines, { type: 'system', text: 'Use the top-right control to switch the persisted theme.' }];
    } else if (command.startsWith('open ')) {
      const slug = command.replace('open ', '');
      const project = projects.find((item) => item.slug === slug);
      lines = [
        ...lines,
        {
          type: project ? 'link' : 'error',
          text: project ? `Opening ${project.title}: /projects/${project.slug}` : `No project found for "${slug}".`
        }
      ];
    } else {
      lines = [...lines, { type: commands[command] ? 'system' : 'error', text: commands[command] || 'Unknown command.' }];
    }

    await tick();
  }
</script>

<section class="terminal" aria-label="Interactive developer terminal">
  <div class="chrome" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>
  <div class="output" aria-live="polite">
    {#each lines as line}
      <p class={line.type}>
        {#if line.type === 'link'}
          <a href={line.text.split(': ')[1]}>{line.text}</a>
        {:else}
          {line.text}
        {/if}
      </p>
    {/each}
  </div>
  <form
    onsubmit={(event) => {
      event.preventDefault();
      submit();
    }}
  >
    <label for="terminal-input">Command</label>
    <input id="terminal-input" bind:value={input} autocomplete="off" placeholder="help" />
    <button type="submit">Run</button>
  </form>
</section>

<style>
  .terminal {
    background: #081018;
    border: 1px solid color-mix(in srgb, var(--accent) 34%, transparent);
    border-radius: 8px;
    box-shadow: var(--shadow);
    color: #dffcff;
    font-family: var(--mono);
    margin: 0 auto;
    max-width: 980px;
    overflow: hidden;
  }

  .chrome {
    background: #101d28;
    display: flex;
    gap: 0.5rem;
    padding: 0.85rem;
  }

  .chrome span {
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
  }

  .chrome span:nth-child(1) {
    background: #ff5c8a;
  }

  .chrome span:nth-child(2) {
    background: #ffd166;
  }

  .chrome span:nth-child(3) {
    background: #8cff7a;
  }

  .output {
    min-height: 280px;
    padding: 1rem;
  }

  p {
    line-height: 1.65;
    margin: 0.3rem 0;
  }

  .input {
    color: #ffd166;
  }

  .error {
    color: #ff8fab;
  }

  a {
    color: #8cff7a;
  }

  form {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    display: grid;
    gap: 0.7rem;
    grid-template-columns: 1fr auto;
    padding: 1rem;
  }

  label {
    position: absolute;
    transform: translateX(-9999px);
  }

  input,
  button {
    border-radius: 6px;
    font: inherit;
    min-height: 2.8rem;
  }

  input {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    padding: 0 0.85rem;
  }

  button {
    background: var(--accent);
    border: 0;
    color: #061014;
    cursor: pointer;
    font-weight: 800;
    padding: 0 1rem;
  }
</style>
