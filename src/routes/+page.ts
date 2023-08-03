import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

const slug = 'home';

export async function load({ fetch }) {
  try {
    const response = await fetch('api/posts');
    const posts: Post[] = await response.json();

    const home = await import(`../posts/${slug}.md`);

    return {
      posts,
      home: {
        content: home.default,
        meta: home.metadata,
      }
    }
  } catch (e) {
    console.error(e);
    throw error(404, `Could not find ${slug}`);
  }
}
