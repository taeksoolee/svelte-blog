<script lang="ts">
	import type { Route } from 'src/interfaces';
	import { onMount } from 'svelte';
	import NavigationItem from './NavigationItem.svelte';

  let routes: Route[] | null = null;

  function setRoutes() {
    fetch('/routes.json')
      .then(res => res.json())
      .then(data => {
        routes = data as Route[];
      });
  }

  onMount(() => {
    setRoutes();
  });
</script>

<nav class="navigation">
  {#if !!routes}
    <ul>
      {#each routes as route}
        <NavigationItem route={route} />
      {/each}
    </ul>
  {/if}
</nav>

<style>
  .navigation {

  }
</style>