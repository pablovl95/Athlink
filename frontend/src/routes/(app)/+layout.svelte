<script>
  import { goto } from '$app/navigation';
  import { auth } from '$lib/stores/auth.svelte.js';
  import Sidebar from '$lib/Sidebar.svelte';

  let { children } = $props();

  $effect(() => {
    if (!auth.isAuthenticated) {
      goto('/login');
    }
  });
</script>

{#if auth.isAuthenticated}
  <div class="app-shell">
    <Sidebar />
    <section class="app-content">
      {@render children()}
    </section>
  </div>
{/if}
