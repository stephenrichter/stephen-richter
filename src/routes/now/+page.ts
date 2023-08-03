import { error } from '@sveltejs/kit';

const slug = 'now';

export async function load() {
  try {
    const post = await import(`../../posts/${slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
    }
  } catch (e) {
    console.error(e);
    throw error(404, `Could not find ${slug}`);
  }
}
