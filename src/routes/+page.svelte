<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main class="flex flex-col justify-center mx-auto">
	<article class="prose lg:prose-xl mt-8">
		<svelte:component this={data.home.content} />
	</article>
</main>

<section class="mt-12">
	<h2 class="text-2xl mb-4">Recent posts</h2>
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
