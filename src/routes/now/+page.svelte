<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<main class="flex flex-col justify-center mx-auto">
	<article class="prose lg:prose-xl my-8">
		<svelte:component this={data.content} />
	</article>
	<p class="mb-2">--</p>
	<p class="font-light italic">Last updated {formatDate(data.meta.date)}</p>
</main>
