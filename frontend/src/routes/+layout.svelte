<script>
  import '../app.css';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { auth } from '$lib/stores/auth.svelte.js';
  import Icon from '$lib/Icon.svelte';

  let { children } = $props();

  const navItems = [
    { href: '/home', label: 'Inicio', icon: 'home' },
    { href: '/network', label: 'Mi red', icon: 'group' },
    { href: '/events', label: 'Eventos', icon: 'calendar' },
    { href: '/messages', label: 'Mensajes', icon: 'chat' },
    { href: '/notifications', label: 'Notificaciones', icon: 'bell', badge: 9 }
  ];

  /** @param {string} href */
  function isActive(href) {
    const path = page.url.pathname;
    return path === href || path.startsWith(href + '/');
  }

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

  function handleLogout() {
    auth.logout();
    goto('/');
  }
</script>

<header class="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <a class="brand" href={auth.isAuthenticated ? '/home' : '/'}>Athlink</a>

      {#if auth.isAuthenticated}
        <label class="search">
          <Icon name="search" size={18} />
          <input type="text" placeholder="Buscar" />
        </label>
      {/if}
    </div>

    <nav class="topnav">
      {#if auth.isAuthenticated}
        {#each navItems as item}
          <a
            class="topnav-item"
            class:active={isActive(item.href)}
            href={item.href}
          >
            <span class="topnav-icon">
              <Icon name={item.icon} size={24} />
              {#if item.badge}
                <span class="badge">{item.badge}</span>
              {/if}
            </span>
            <span class="topnav-label">{item.label}</span>
          </a>
        {/each}

        <details class="topnav-item profile-dropdown">
          <summary>
            <span class="topnav-icon">
              <span class="topnav-avatar">{getInitials(auth.user)}</span>
            </span>
            <span class="topnav-label">Yo <span class="caret">▾</span></span>
          </summary>
          <div class="profile-menu">
            <a href="/profile">Mi perfil</a>
            <button type="button" onclick={handleLogout}>Cerrar sesión</button>
          </div>
        </details>
      {:else}
        <a class="btn ghost" href="/login">Iniciar sesión</a>
        <a class="btn primary" href="/register">Registrarse</a>
      {/if}
    </nav>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer class="footer">
  <small>© 2026 Athlink. Todos los derechos reservados.</small>
</footer>
