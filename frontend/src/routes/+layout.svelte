<script>
  import '../app.css';
  import { auth } from '$lib/stores/auth.svelte.js';

  let { children } = $props();
</script>

<header class="topbar">
  <a class="brand" href="/">Athlink</a>
  <nav class="nav">
    {#if auth.isAuthenticated}
      <span class="hello">Hola, {auth.user.email}</span>
      <button class="btn ghost" onclick={() => auth.logout()}>Cerrar sesión</button>
    {:else}
      <a class="btn ghost" href="/login">Iniciar sesión</a>
      <a class="btn primary" href="/register">Registrarse</a>
    {/if}
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="footer">
  <small>© 2026 Athlink. Todos los derechos reservados.</small>
</footer>
