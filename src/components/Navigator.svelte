<script lang="ts">
	import { routes$ } from 'src/store';
	import NavigationItem from './NavigationItem.svelte';
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
