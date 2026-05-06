<script>
  import { goto } from '$app/navigation';
  import { auth } from '$lib/stores/auth.svelte.js';
</script>

<svelte:head>
  <title>Athlink — Conecta. Compite. Crece.</title>
</svelte:head>

<div class="container">
  <section class="hero">
    <h1>Conecta. Compite. Crece.</h1>
    <p class="lead">
      Athlink une atletas, clubes y eventos en un solo lugar.
    </p>

    {#if auth.isAuthenticated}
      <button class="btn primary" onclick={() => goto('/home')}>Ir a tu inicio</button>
    {:else}
      <button class="btn primary" onclick={() => goto('/register')}>Empezar</button>
    {/if}
  </section>

  <section class="features">
    <article>
      <h3>Perfil de atleta</h3>
      <p>Crea tu ficha deportiva con resultados, marcas y trayectoria.</p>
    </article>
    <article>
      <h3>Calendario de eventos</h3>
      <p>Inscríbete a competiciones cercanas con un par de clics.</p>
    </article>
    <article>
      <h3>Comunidad</h3>
      <p>Sigue clubes, encuentra rivales y construye tu red.</p>
    </article>
  </section>
</div>
