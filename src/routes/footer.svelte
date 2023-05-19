<script lang="ts">
	import * as config from '$lib/config';

	let year = new Date().getFullYear();
</script>

<footer class="py-8 border-t border-slate-600">
	<p>{config.title} &copy; {year}</p>
</footer>
