
import { writable } from 'svelte/store';

// A list of URL pathnames and their depth
export const pageHistory = writable([]);
