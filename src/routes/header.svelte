<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '$lib/config';

	import { LightSwitch } from '@skeletonlabs/skeleton';

	$: isHome = $page.url.pathname === '/';
	$: isNow = $page.url.pathname === '/now';
</script>

<nav class="py-8 flex justify-between">
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links mx-8 flex gap-4 md:gap-8">
		<li
			aria-current={isHome ? 'page' : undefined}
			class={`hover:scale-105 transition-transform ${
				isHome ? 'font-bold text-primary-500' : undefined
			}`}
		>
			<a href="/">Blog</a>
		</li>
		<li
			aria-current={isNow ? 'page' : undefined}
			class={`hover:scale-105 transition-transform ${
				isNow ? 'font-bold text-primary-500' : undefined
			}`}
		>
			<a href="/now">Now</a>
		</li>
	</ul>

	<LightSwitch />
</nav>
