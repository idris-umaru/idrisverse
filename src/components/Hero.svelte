<script>
  import Button from '$lib/components/ui/Button.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import { profile, skills } from '$lib/data/profile';
</script>

<section class="relative grid min-h-[calc(100vh-75px)] grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] gap-8 overflow-hidden px-[var(--page-pad)] pb-9 pt-16 md:pt-24 max-lg:grid-cols-1 max-lg:min-h-0" aria-labelledby="hero-title">
  <div class="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(color-mix(in_srgb,var(--accent)_12%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--accent)_12%,transparent)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_50%_20%,black,transparent_72%)]" aria-hidden="true"></div>
  <div class="relative z-10">
    <Badge>Available for Svelte-heavy product work</Badge>
    <h1 id="hero-title" class="my-5 max-w-[8ch] text-[clamp(4rem,14vw,10.5rem)] font-black leading-[0.82] tracking-normal">{profile.name}</h1>
    <p class="m-0 text-[clamp(1.2rem,2.8vw,2rem)] font-black text-glow">{profile.title}</p>
    <p class="max-w-2xl text-[clamp(1rem,2vw,1.25rem)] leading-8 text-mist">{profile.intro}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <Button href="/projects">Explore projects</Button>
      <Button href="/pdf/idris-umaru-frontend-resume.pdf" download="idris-umaru-frontend-resume.pdf" variant="ghost">Download resume</Button>
    </div>
    <div class="mt-6 flex flex-wrap gap-4" aria-label="Social links">
      {#each profile.socials as social}
        <a class="font-bold text-mist transition hover:text-paper" href={social.href} rel="noreferrer" target="_blank">{social.label}</a>
      {/each}
    </div>
  </div>
  <div class="relative z-10 grid aspect-square place-items-center self-center max-lg:min-h-[360px]" aria-label="Animated interface preview">
    <div class="absolute aspect-square w-[min(78vw,520px)] animate-slow-spin rounded-full border border-glow/35 motion-reduce:animate-none">
      <span class="absolute left-[12%] top-[20%] h-3 w-3 rounded-full bg-glow shadow-[0_0_34px_var(--accent)]"></span>
      <span class="absolute right-[8%] top-[48%] h-3 w-3 rounded-full bg-glow shadow-[0_0_34px_var(--accent)]"></span>
      <span class="absolute bottom-[14%] left-[48%] h-3 w-3 rounded-full bg-glow shadow-[0_0_34px_var(--accent)]"></span>
    </div>
    <div class="min-w-[min(84vw,340px)] rotate-[-3deg] rounded-lg border border-line bg-panel/85 p-5 font-mono shadow-forge backdrop-blur-2xl">
      <p>forge.run()</p>
      <p>motion: stable</p>
      <p>latency: 18ms</p>
    </div>
  </div>
  <div class="relative z-10 col-span-full flex flex-wrap gap-3 self-end" aria-label="Core skills">
    {#each skills as skill}
      <span class="rounded-full border border-line px-3 py-2 text-sm font-semibold text-mist">{skill}</span>
    {/each}
  </div>
</section>
