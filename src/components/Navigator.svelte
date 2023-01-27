<script lang="ts">
	import { routes$ } from 'src/store';
	import { onMount } from 'svelte';
	import NavigationItem from './NavigationItem.svelte';

	onMount(async () => {
		routes$.subscribe((routes) => {
			console.log(routes);
		});
	});
</script>

<nav class="navigation">
	<ul>
		{#each $routes$ as route}
			<NavigationItem {route} />
		{/each}
	</ul>
</nav>

<style>
	.navigation {
	}
</style>
