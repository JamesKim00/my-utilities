import { writable } from 'svelte/store';

export const loading = writable(false);
export const showBars = writable(false);
export const inFirstHalfOfTransition = writable(false);
