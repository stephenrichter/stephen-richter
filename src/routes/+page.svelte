<script lang="ts">
  import * as config from '$lib/config';
  import { formatDate } from '$lib/utils.js';
  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <ul class="grid gap-8">
    {#each data.posts as post}
      <li class="max-w-md pb-8 border-b border-slate-600">
        <a href={post.slug} class="h1 capitalize">{post.title}</a>
        <p class="text-gray mt-2">{formatDate(post.date)}</p>
        <p class="mt-4">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>