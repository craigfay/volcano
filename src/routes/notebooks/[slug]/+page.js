
import { error } from '@sveltejs/kit';
 
/** @type {import('../../../../.svelte-kit/types/src/routes/notebooks/$types').PageLoad} */
export function load({ params }) {
  return { params }
  throw error(404, 'Not found');
}
