import { writable } from 'svelte/store';

export const cursor = writable({ x: 0, y: 0, active: false, label: '' });
