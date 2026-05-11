<footer class="footer">
  <p>Built with SvelteKit, native transitions, persistent theming, and motion-aware CSS.</p>
  <a href="/contact">Start a project</a>
</footer>

<style>
  .footer {
    align-items: center;
    border-top: 1px solid var(--line);
    color: var(--muted);
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding: 2rem var(--page-pad);
  }

  a {
    color: var(--text);
    font-weight: 800;
  }

  @media (max-width: 680px) {
    .footer {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
