<script context="module">
	import '../app.scss';
</script>

<script lang="ts">
	import SearchInput from 'src/components/SearchInput.svelte';
	import Navigator from 'src/components/Navigator.svelte';
	import RecentView from 'src/components/RecentView.svelte';
</script>

<div>
	<section class="">
		<SearchInput />
		<hr />
		<div class="flex mx-4">
			<div class="w-60">
				<Navigator />
			</div>
			<main class="h-full flex-1">
				<slot />
			</main>
			<div class="w-60">
				<RecentView />
			</div>
		</div>
	</section>
</div>

<style>
</style>
