<script lang="ts">
	import { flattenRoutes$ } from 'src/store';
	import { toKorChars } from '$lib/utils/strings';
	import { onMount } from 'svelte';
	import type { Route } from 'src/interfaces';
	import LinkItem from './LinkItem.svelte';

	let filteredRoutes: Route[] = [];
	let flattenRoutes: Omit<Route, 'children'>[] = [];
	let keyword: string = '';

	$: keyword, search();

	function includesKeyword(keyword: string) {
		const _keyword = toKorChars(keyword).join('');
		return (target: string = '') => {
			if (_keyword.length < 1) {
				return false;
			}

			const _target = toKorChars(target).join('');
			return _target.toUpperCase().includes(_keyword.toUpperCase());
		};
	}

	function search() {
		if (!keyword || !flattenRoutes) {
			filteredRoutes = flattenRoutes;
			return;
		}

		const splitedKeywords = keyword.split(' ');

		filteredRoutes = flattenRoutes.filter((route) => {
			for (const i in splitedKeywords) {
				const splitedKeyword = splitedKeywords[i];
				const _includesKeyword = includesKeyword(splitedKeyword);

				if (_includesKeyword(route.title)) {
					return true;
				}
				if (_includesKeyword(route.description)) {
					return true;
				}

				const keywords = route.keywords?.split(',') ?? [];
				for (const i in keywords) {
					if (_includesKeyword(keywords[i])) {
						return true;
					}
				}
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
	{#each filteredRoutes as route}
		<LinkItem {route} />
	{/each}
</div>
