<script lang="ts">
	import { URI_CONTEXT } from '$lib/const/env';
	import type { Route } from 'src/interfaces';
	import { onMount } from 'svelte';

	export let route: Route;
	let opened = false;

	function resolver(path: string) {
		return URI_CONTEXT + path;
	}

	function link() {
		location.href = resolver(route.link);
	}

	onMount(() => {
		const uri = window.location.href.replace(window.location.origin + URI_CONTEXT, '');
		if (uri.includes(route.link)) {
			opened = true;
		}
	});
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
