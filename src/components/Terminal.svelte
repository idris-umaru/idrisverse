<script>
  import { tick } from 'svelte';
  import { projects } from '$lib/data/projects';

  let input = '';
  let lines = [
    { type: 'system', text: 'Idris portfolio terminal online. Try help, skills, projects, open ecommerce-app, theme.' }
  ];

  const commands = {
    help: 'Commands: skills, projects, open <project-slug>, contact, clear, theme',
    skills: 'SvelteKit, accessibility, performance budgets, design systems, motion engineering.',
    projects: projects.map((project) => `${project.slug}: ${project.title}`).join(' | '),
    contact: 'Open /contact or reach Idris through GitHub, LinkedIn, or X.'
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

<section class="mx-auto max-w-5xl overflow-hidden rounded-lg border border-glow/35 bg-[#081018] font-mono text-[#dffcff] shadow-forge" aria-label="Interactive developer terminal">
  <div class="flex gap-2 bg-[#101d28] p-4" aria-hidden="true">
    <span class="h-3 w-3 rounded-full bg-[#ff5c8a]"></span><span class="h-3 w-3 rounded-full bg-[#ffd166]"></span><span class="h-3 w-3 rounded-full bg-[#8cff7a]"></span>
  </div>
  <div class="min-h-[280px] p-4" aria-live="polite">
    {#each lines as line}
      <p class="my-1 leading-7 {line.type === 'input' ? 'text-[#ffd166]' : line.type === 'error' ? 'text-[#ff8fab]' : ''}">
        {#if line.type === 'link'}
          <a class="text-[#8cff7a]" href={line.text.split(': ')[1]}>{line.text}</a>
        {:else}
          {line.text}
        {/if}
      </p>
    {/each}
  </div>
  <form
    class="grid grid-cols-[1fr_auto] gap-3 border-t border-white/10 p-4 max-sm:grid-cols-1"
    onsubmit={(event) => {
      event.preventDefault();
      submit();
    }}
  >
    <label class="sr-only" for="terminal-input">Command</label>
    <input class="min-h-11 rounded-md border border-white/20 bg-white/5 px-3 text-white" id="terminal-input" bind:value={input} autocomplete="off" placeholder="help" />
    <button class="min-h-11 cursor-pointer rounded-md border-0 bg-glow px-4 font-extrabold text-slate-950" type="submit">Run</button>
  </form>
</section>
