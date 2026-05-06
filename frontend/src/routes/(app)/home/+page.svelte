<script>
  import { auth } from '$lib/stores/auth.svelte.js';

  const greeting = $derived(
    auth.user?.name?.split(' ')[0] ??
      auth.user?.email?.split('@')[0] ??
      'atleta'
  );
</script>

<svelte:head>
  <title>Inicio · Athlink</title>
</svelte:head>

<header class="page-header">
  <h1>Hola, {greeting}</h1>
  <p>Esto es lo último en tu comunidad.</p>
</header>

<div class="tile-grid">
  <article class="tile">
    <h3>Próximos eventos</h3>
    <p>Aún no tienes eventos. Explora competiciones cerca de ti.</p>
    <a class="btn ghost" href="/events">Ver eventos</a>
  </article>

  <article class="tile">
    <h3>Sugerencias de clubes</h3>
    <p>Conecta con clubes de tu zona y disciplina.</p>
    <a class="btn ghost" href="/clubs">Explorar clubes</a>
  </article>

  <article class="tile">
    <h3>Actividad reciente</h3>
    <p>Tu feed se llenará con publicaciones de los atletas y clubes que sigas.</p>
  </article>
</div>
