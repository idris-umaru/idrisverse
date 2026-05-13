<script>
  import Section from '$lib/components/ui/Section.svelte';
  import { isValidEmail, sanitizeInput } from '$lib/utils/sanitize';

  let name = '';
  let email = '';
  let message = '';
  let status = '';
  let errors = { name: '', email: '', message: '' };

  function submit() {
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safeMessage = sanitizeInput(message);

    errors = {
      name: safeName.length < 2 ? 'Please enter your name.' : '',
      email: !isValidEmail(safeEmail) ? 'Please enter a valid email.' : '',
      message: safeMessage.length < 12 ? 'Please share a little more context.' : ''
    };

    if (Object.values(errors).some(Boolean)) {
      status = 'Review the highlighted fields.';
      return;
    }

    status = `Thanks, ${safeName}. Your message is ready to send to Idris.`;
    name = '';
    email = '';
    message = '';
  }
</script>

<svelte:head>
  <title>Contact | NeonForge</title>
</svelte:head>

<Section
  eyebrow="Contact"
  title="Bring the brief. Idris will bring the interface."
  lead="The form validates and sanitizes input on the client. Wire it to your preferred mail provider or server action for production sending."
>
  <form
    class="mx-auto grid max-w-4xl grid-cols-2 gap-4 max-md:grid-cols-1"
    onsubmit={(event) => {
      event.preventDefault();
      submit();
    }}
    novalidate
  >
    <label class="grid gap-2 font-bold text-mist">
      Name
      <input class="min-h-12 rounded-lg border border-line bg-panel/80 px-4 py-3 text-paper shadow-forge" bind:value={name} aria-describedby="name-error" autocomplete="name" />
      {#if errors.name}<span class="text-sm text-rose-400" id="name-error">{errors.name}</span>{/if}
    </label>
    <label class="grid gap-2 font-bold text-mist">
      Email
      <input class="min-h-12 rounded-lg border border-line bg-panel/80 px-4 py-3 text-paper shadow-forge" bind:value={email} aria-describedby="email-error" autocomplete="email" inputmode="email" />
      {#if errors.email}<span class="text-sm text-rose-400" id="email-error">{errors.email}</span>{/if}
    </label>
    <label class="col-span-full grid gap-2 font-bold text-mist">
      Project note
      <textarea class="min-h-40 resize-y rounded-lg border border-line bg-panel/80 px-4 py-3 text-paper shadow-forge" bind:value={message} aria-describedby="message-error" rows="6"></textarea>
      {#if errors.message}<span class="text-sm text-rose-400" id="message-error">{errors.message}</span>{/if}
    </label>
    <button class="col-span-full min-h-12 cursor-pointer rounded-full bg-glow px-5 py-3 font-black text-slate-950 transition hover:-translate-y-0.5" type="submit">Send brief</button>
    <p class="col-span-full text-mist" aria-live="polite">{status}</p>
  </form>
</Section>
