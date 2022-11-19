import { writable } from 'svelte/store';

export const loading = writable(false);
export const inFirstHalfOfTransition = writable(false);
// export const inSecondHalfOfTransition = writable(false);
// export const inLoadingScreen = writable(false);
// export const showBars = writable(false);
