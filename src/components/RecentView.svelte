<script lang="ts">
	import type { Route } from 'src/interfaces';
	import { flattenRoutes$ } from 'src/store';

	let recentRoutes: Omit<Route, 'children'>[] = [];

	flattenRoutes$.subscribe((subscriber) => {
		subscriber.sort((a, b) => b.mTimeMs - a.mTimeMs);

		recentRoutes = subscriber.slice(0, 5);
	});
</script>

<div>
	{#each recentRoutes as route}
		<div>{route.title}</div>
		<div>{route.mTimeMs}</div>
	{/each}
</div>
