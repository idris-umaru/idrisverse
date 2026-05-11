<script>
  import Section from '$lib/components/ui/Section.svelte';
  import { isValidEmail, sanitizeInput } from '$lib/utils/sanitize';

  let name = '';
  let email = '';
  let message = '';
  let status = '';
  let errors = {};

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

    status = `Thanks, ${safeName}. Your message is ready to send.`;
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
  title="Bring the brief. I will bring the interface."
  lead="The form validates and sanitizes input on the client. Wire it to your preferred mail provider or server action for production sending."
>
  <form
    class="contact"
    onsubmit={(event) => {
      event.preventDefault();
      submit();
    }}
    novalidate
  >
    <label>
      Name
      <input bind:value={name} aria-describedby="name-error" autocomplete="name" />
      {#if errors.name}<span id="name-error">{errors.name}</span>{/if}
    </label>
    <label>
      Email
      <input bind:value={email} aria-describedby="email-error" autocomplete="email" inputmode="email" />
      {#if errors.email}<span id="email-error">{errors.email}</span>{/if}
    </label>
    <label class="full">
      Project note
      <textarea bind:value={message} aria-describedby="message-error" rows="6"></textarea>
      {#if errors.message}<span id="message-error">{errors.message}</span>{/if}
    </label>
    <button type="submit">Send brief</button>
    <p aria-live="polite">{status}</p>
  </form>
</Section>

<style>
  .contact {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0 auto;
    max-width: 900px;
  }

  label {
    color: var(--muted);
    display: grid;
    font-weight: 750;
    gap: 0.55rem;
  }

  .full,
  button,
  p {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    background: color-mix(in srgb, var(--panel) 88%, transparent);
    border: 1px solid var(--line);
    border-radius: 8px;
    color: var(--text);
    font: inherit;
    min-height: 3rem;
    padding: 0.85rem 1rem;
  }

  textarea {
    resize: vertical;
  }

  span {
    color: #ff6b8f;
    font-size: 0.9rem;
  }

  button {
    background: var(--accent);
    border: 0;
    border-radius: 999px;
    color: #061014;
    cursor: pointer;
    font: inherit;
    font-weight: 900;
    min-height: 3rem;
  }

  p {
    color: var(--muted);
  }

  @media (max-width: 720px) {
    .contact {
      grid-template-columns: 1fr;
    }
  }
</style>
