<script lang="ts">
	import SearchInput from 'src/components/SearchInput.svelte';
	import Navigator from 'src/components/Navigator.svelte';
	import RecentView from 'src/components/RecentView.svelte';
</script>

<div>
	<section>
		<Navigator />
		<hr />
		<RecentView />
		<hr />
		<SearchInput />
	</section>

	<main>
		<slot />
	</main>
</div>

<style>
</style>
