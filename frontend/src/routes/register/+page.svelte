<script>
  import { goto } from '$app/navigation';
  import { auth } from '$lib/stores/auth.svelte.js';
  import AuthPanel from '$lib/AuthPanel.svelte';

  let name = $state('');
  let email = $state('');
  let password = $state('');
  let confirm = $state('');
  let acceptTerms = $state(false);
  let error = $state('');
  let loading = $state(false);

  function validate() {
    if (name.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Introduce un correo válido.';
    if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres.';
    if (password !== confirm) return 'Las contraseñas no coinciden.';
    if (!acceptTerms) return 'Debes aceptar los términos y condiciones.';
    return '';
  }

  async function submit(e) {
    e.preventDefault();
    error = validate();
    if (error) return;

    loading = true;
    await new Promise((resolve) => setTimeout(resolve, 400));
    loading = false;

    auth.login({ email, name, provider: 'password' });
    goto('/');
  }

  async function registerWith(provider) {
    loading = true;
    await new Promise((resolve) => setTimeout(resolve, 350));
    loading = false;
    auth.login({ email: 'admin@admin.com', provider });
    goto('/');
  }
</script>

<svelte:head>
  <title>Crear cuenta · Athlink</title>
</svelte:head>

<div class="auth-page">
  <AuthPanel
    title="Únete a la comunidad deportiva"
    subtitle="Crea tu perfil, descubre eventos y conecta con clubes y atletas en un solo lugar."
  />

  <div class="auth-form-wrap">
    <form class="card" onsubmit={submit}>
      <h2>Crear cuenta</h2>
      <p class="hint">Es gratis y solo te llevará un momento.</p>

      <div class="form-row">
        <label>
          Nombre
          <input
            type="text"
            bind:value={name}
            required
            autocomplete="name"
            placeholder="Tu nombre"
          />
        </label>

        <label>
          Correo
          <input
            type="email"
            bind:value={email}
            required
            autocomplete="email"
            placeholder="tu@correo.com"
          />
        </label>
      </div>

      <div class="form-row">
        <label>
          Contraseña
          <input
            type="password"
            bind:value={password}
            required
            autocomplete="new-password"
            placeholder="Mínimo 6 caracteres"
          />
        </label>

        <label>
          Repetir contraseña
          <input
            type="password"
            bind:value={confirm}
            required
            autocomplete="new-password"
            placeholder="••••••••"
          />
        </label>
      </div>

      <label class="checkbox">
        <input type="checkbox" bind:checked={acceptTerms} />
        <span>Acepto los <a href="/">términos y la política de privacidad</a></span>
      </label>

      {#if error}
        <p class="error">{error}</p>
      {/if}

      <button class="btn primary" type="submit" disabled={loading}>
        {loading ? 'Creando cuenta…' : 'Crear cuenta'}
      </button>

      <div class="divider"><span>o</span></div>

      <div class="socials">
        <button
          type="button"
          class="btn social google"
          disabled={loading}
          onclick={() => registerWith('google')}
        >
          <svg class="icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34 6.5 29.3 4.5 24 4.5 16.4 4.5 9.8 8.7 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 43.5c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 34.4 26.7 35.5 24 35.5c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.7 38.4 16.3 43.5 24 43.5z"/>
            <path fill="#1976D2" d="M43.6 20.5H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2c-.4.4 6.7-4.9 6.7-15.3 0-1.2-.1-2.3-.4-3.5z"/>
          </svg>
          Registrarse con Google
        </button>

        <button
          type="button"
          class="btn social facebook"
          disabled={loading}
          onclick={() => registerWith('facebook')}
        >
          <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Registrarse con Facebook
        </button>

        <button
          type="button"
          class="btn social apple"
          disabled={loading}
          onclick={() => registerWith('apple')}
        >
          <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          Registrarse con Apple
        </button>
      </div>

      <p class="alt">
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </form>
  </div>
</div>
