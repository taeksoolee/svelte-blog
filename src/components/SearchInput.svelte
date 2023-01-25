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

	function includesKeyword(keyword: string) {
		const _keyword = toKorChars(keyword).join('');
		return (target: string = '') => {
			if (_keyword.length < 2) {
				return false;
			}

			const _target = toKorChars(target).join('');
			return _target.includes(_keyword);
		};
	}

	function search() {
		if (!keyword || !flattenRoutes) {
			filteredRoutes = flattenRoutes;
			return;
		}

		const splitedKeywords = keyword.split(' ');

		filteredRoutes = flattenRoutes.filter((v) => {
			for (const i in splitedKeywords) {
				const splitedKeyword = splitedKeywords[i];
				const _includesKeyword = includesKeyword(splitedKeyword);

				if (_includesKeyword(v.title)) {
					return true;
				}
				if (_includesKeyword(v.description)) {
					return true;
				}

				const keywords = v.keywords?.split(',') ?? [];
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
	{filteredRoutesStr}
</div>
