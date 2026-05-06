<script>
  import Icon from '$lib/Icon.svelte';

  let { title, description = '', icon = null } = $props();
</script>

<svelte:head>
  <title>{title} · Athlink</title>
</svelte:head>

<header class="page-header">
  <h1>{title}</h1>
  {#if description}
    <p>{description}</p>
  {/if}
</header>

<section class="placeholder">
  {#if icon}
    <div class="placeholder-icon">
      <Icon name={icon} size={40} />
    </div>
  {/if}
  <h3>Próximamente</h3>
  <p>Esta sección está en construcción. Vuelve pronto.</p>
</section>
