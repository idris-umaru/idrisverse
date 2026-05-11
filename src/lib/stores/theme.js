import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialTheme = browser ? localStorage.getItem('neonforge-theme') || 'dark' : 'dark';

export const theme = writable(initialTheme);

export function setTheme(nextTheme) {
  theme.set(nextTheme);
  if (browser) {
    localStorage.setItem('neonforge-theme', nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }
}

export function toggleTheme(currentTheme) {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}
