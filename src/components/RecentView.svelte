<script lang="ts">
	import type { FlattenRoutes } from 'src/interfaces/Route';
	import { flattenRoutes$ } from 'src/store';
	import RecentItem from './RecentItem.svelte';

	let recentRoutes: FlattenRoutes = [];

	flattenRoutes$.subscribe((subscriber) => {
		subscriber.sort((a, b) => b.mTimeMs - a.mTimeMs);

		recentRoutes = subscriber.slice(0, 5);
	});
</script>

<div>
	{#each recentRoutes as route}
		<RecentItem {route} />
	{/each}
</div>
