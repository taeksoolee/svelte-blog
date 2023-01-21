<script lang="ts">
	import type { Route } from "src/interfaces";

  export let route: Route;
  let opened = false;
</script>

<li>
  <a href={route.link} > { route.title } </a>
  {#if route.children}
    <button on:click={() => opened = !opened}>
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