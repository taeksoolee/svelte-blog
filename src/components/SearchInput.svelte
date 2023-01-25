<script context="module">
	import { flattenRoutes$ } from 'src/store';
	import { toKorChars } from 'src/utils';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	import type { Route } from 'src/interfaces';

	let filteredRoutes: Route[] = [];
	let flattenRoutes: Omit<Route, 'children'>[] = [];
	let keyword: string = '';

	$: keyword, search();
	$: filteredRoutesStr = JSON.stringify(filteredRoutes);

	function includesKeyword(target: string = '', keyword: string) {
		return toKorChars(target).join('').includes(toKorChars(keyword).join(''));
	}

	function search() {
		if (!keyword || !flattenRoutes) {
			filteredRoutes = flattenRoutes;
			return;
		}

		filteredRoutes = flattenRoutes.filter((v) => {
			if (includesKeyword(v.title, keyword)) return true;
			if (includesKeyword(v.description, keyword)) return true;

			const keywords = v.keywords?.split(',') ?? [];
			for (const i in keywords) {
				if (includesKeyword(keywords[i], keyword)) return true;
			}

			return false;
		});
	}

	onMount(() => {
		flattenRoutes$.subscribe((subscriber) => {
			flattenRoutes = subscriber;
			search();
		});
	});
</script>

<input type="text" bind:value={keyword} />
<div>
	{filteredRoutesStr}
</div>
