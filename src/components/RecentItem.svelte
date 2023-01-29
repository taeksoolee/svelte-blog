<script lang="ts">
	import type { OfArray } from '$lib/types/utils';
	import type { FlattenRoutes } from 'src/interfaces/Route';
	import * as timeago from 'timeago.js';

	export let route: OfArray<FlattenRoutes>;

	$: mDate = new Date(route?.mTimeMs ?? '');
</script>

<div>
	<div>{route.title}</div>
	<div>{timeago.format(mDate)}</div>
</div>
