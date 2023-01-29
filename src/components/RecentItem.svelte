<script lang="ts">
	import type { OfArray } from '$lib/types/utils';
	import type { FlattenRoutes } from 'src/interfaces/Route';
	import * as timeago from 'timeago.js';
	import LinkItem from './LinkItem.svelte';

	export let route: OfArray<FlattenRoutes>;

	$: mDate = new Date(route?.mTimeMs ?? '');
</script>

<div>
	<LinkItem {route} />
	<div>{timeago.format(mDate)}</div>
</div>
