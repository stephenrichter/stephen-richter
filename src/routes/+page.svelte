<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="prose">
	<h1 class="mb-0">Stephen Richter</h1>
	<p class="text-lg font-bold my-4">
		💡 <span class="italic">Bringing ideas to life through code</span> 🧑🏻‍💻
	</p>
	<p>--</p>
</section>

<main class="flex flex-col justify-center mx-auto my-12">
	<article class="prose lg:prose-xl">
		<svelte:component this={data.home.content} />
	</article>
</main>

<section class="mt-12">
	<h2 class="h1 mb-8">Recent posts</h2>
	<div class="my-8 flex flex-col space-y-4 w-full">
		{#each data.posts as post}
			<a
				href={post.slug}
				class="border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
			>
				<div class="flex flex-col">
					<a href={post.slug} class="h4 capitalize font-bold">{post.title}</a>
					<p class="text-gray font-normal text-sm">{formatDate(post.date)}</p>
				</div>
				<div class="text-neutral-700 dark:text-neutral-300">X</div>
			</a>
		{/each}
	</div>
</section>
