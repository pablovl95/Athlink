<script>
  let {
    title,
    subtitle,
    bullets = [
      'Perfil deportivo personal',
      'Calendario de competiciones',
      'Comunidad de clubes y atletas'
    ]
  } = $props();
</script>

<aside class="auth-side">
  <div class="auth-brand">
    <a class="brand-big" href="/">Athlink</a>
    <h2>{title}</h2>
    <p class="auth-sub">{subtitle}</p>
    <ul class="auth-bullets">
      {#each bullets as bullet}
        <li><span class="check" aria-hidden="true"></span>{bullet}</li>
      {/each}
    </ul>
  </div>
</aside>
