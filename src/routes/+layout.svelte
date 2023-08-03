<script lang="ts">
	import Header from './header.svelte';
	import Footer from './footer.svelte';

	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import PageTransition from './transition.svelte';

	export let data;
</script>

<div class="h-full max-w-2xl mx-auto px-8 xl:px-0 grid grid-rows-[auto_1fr_auto]">
	<Header />

	<main class="py-16">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>
