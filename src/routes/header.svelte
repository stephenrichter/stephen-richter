<script lang="ts">
	import * as config from '$lib/config';

	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<nav class="py-8 flex justify-between">
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links mx-8 flex gap-4 md:gap-8">
		<li>
			<a href="/">Blog</a>
		</li>
		<li>
			<a href="/now">Now</a>
		</li>
	</ul>

	<LightSwitch />
</nav>
