<script lang="ts">
	import { URI_CONTEXT } from '$lib/const/env';
	import type { Route } from 'src/interfaces';

	export let route: Route;

	function resolver(path: string) {
		return URI_CONTEXT + path;
	}

	function link() {
		location.href = resolver(route.link);
	}
</script>

<button role="link" on:click={link}> {route.title} </button>
