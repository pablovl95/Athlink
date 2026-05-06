<script>
  let { name, size = 18 } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  {#if name === 'home'}
    <path d="M3 12l9-9 9 9M5 10v10h14V10" />
  {:else if name === 'user'}
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  {:else if name === 'calendar'}
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  {:else if name === 'group'}
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-3.5 4-3.5s3 1.5 3 3.5" />
  {:else if name === 'chat'}
    <path d="M21 12c0 4-4 7-9 7-1.4 0-2.7-.2-3.9-.6L3 20l1.6-4.5C3.6 14.2 3 13.1 3 12c0-4 4-7 9-7s9 3 9 7z" />
  {:else if name === 'bell'}
    <path d="M6 8a6 6 0 0 1 12 0v5l2 3H4l2-3V8zM10 19a2 2 0 0 0 4 0" />
  {:else if name === 'bookmark'}
    <path d="M6 3h12v18l-6-4-6 4z" />
  {:else if name === 'newspaper'}
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 9h10M7 13h10M7 17h6" />
  {:else if name === 'search'}
    <circle cx="10" cy="10" r="6" />
    <path d="M14.5 14.5L20 20" />
  {/if}
</svg>
