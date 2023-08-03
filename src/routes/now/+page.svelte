<script lang="ts">
	export let data;
</script>

<main class="flex flex-col justify-center mx-auto">
	<article class="prose lg:prose-xl mt-8">
		<svelte:component this={data.content} />
	</article>
</main>
