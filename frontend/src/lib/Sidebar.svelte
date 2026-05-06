<script>
  import { auth } from '$lib/stores/auth.svelte.js';
  import Icon from '$lib/Icon.svelte';

  /** @param {{ name?: string, email?: string } | null | undefined} user */
  function getInitials(user) {
    if (user?.name) {
      return user.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((/** @type {string} */ part) => part[0].toUpperCase())
        .join('');
    }
    return user?.email?.[0]?.toUpperCase() ?? '?';
  }
</script>

<aside class="sidebar">
  <article class="profile-card">
    <div class="profile-cover" aria-hidden="true"></div>

    <div class="profile-body">
      <div class="profile-avatar avatar">{getInitials(auth.user)}</div>

      <h3 class="profile-name">
        <span>{auth.user?.name ?? 'Atleta'}</span>
        <span class="verified-badge" title="Verificado" aria-label="Verificado">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path
              d="M8 12l3 3 5-6"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </span>
      </h3>

      {#if auth.user?.headline}
        <p class="profile-headline">{auth.user.headline}</p>
      {/if}

      {#if auth.user?.location}
        <p class="profile-location">{auth.user.location}</p>
      {/if}

      {#if auth.user?.company}
        <a class="profile-company" href="/profile">
          <span class="company-logo">{auth.user.company[0]}</span>
          <span>{auth.user.company}</span>
        </a>
      {/if}
    </div>
  </article>

  <article class="sidebar-card premium-card">
    <p>Mejora tu visibilidad como atleta con Athlink Pro.</p>
    <a class="premium-cta" href="/pro">
      <span class="premium-icon" aria-hidden="true"></span>
      <span>Probar Pro por 0 €</span>
    </a>
  </article>

  <article class="sidebar-card stats-card">
    <a class="stat-row" href="/profile">
      <span>Visualizaciones del perfil</span>
      <strong>{auth.user?.stats?.profileViews ?? 0}</strong>
    </a>
    <a class="stat-row" href="/profile">
      <span>Impresiones de publicación</span>
      <strong>{auth.user?.stats?.postImpressions ?? 0}</strong>
    </a>
  </article>

  <nav class="sidebar-card quick-links" aria-label="Accesos rápidos">
    <a href="/saved"><Icon name="bookmark" /><span>Elementos guardados</span></a>
    <a href="/groups"><Icon name="group" /><span>Grupos</span></a>
    <a href="/newsletters"><Icon name="newspaper" /><span>Newsletters</span></a>
    <a href="/events"><Icon name="calendar" /><span>Eventos</span></a>
  </nav>
</aside>
