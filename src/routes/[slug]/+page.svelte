<script lang="ts">
	import { formatDate } from '$lib/utils.js';

  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1 class="h1">{data.meta.title}</h1>
    <p>Published on {formatDate(data.meta.date)}</p>
  </hgroup>

  <div class="mt-8 flex gap-2">
    {#each data.meta.categories as category}
      <span class="chip variant-filled-primary p-2">&num;{category}</span>
    {/each}
  </div>

  <article class="prose lg:prose-xl mt-8">
    <svelte:component this={data.content} />
  </article>
</article>