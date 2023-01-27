<script lang="ts">
	import { URI_CONTEXT } from '$lib/const/env';
	import type { Route } from 'src/interfaces';

	export let route: Route;
	let opened = false;

	function resolver(path: string) {
		return URI_CONTEXT + path;
	}

	function link() {
		location.href = resolver(route.link);
	}
</script>

<li>
	<button role="link" on:click={link}> {route.title} </button>
	{#if route.children}
		<button on:click={() => (opened = !opened)}>
			{#if opened}
				<span>&lt;</span>
			{:else}
				<span>&gt;</span>
			{/if}
		</button>
		{#if opened}
			<ul>
				{#each route.children as _route}
					<svelte:self route={_route} />
				{/each}
			</ul>
		{/if}
	{/if}
</li>

<style>
	li {
		padding: 10px;
	}
</style>
