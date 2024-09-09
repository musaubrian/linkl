<template>
  <div
    class="absolute top-0 z-[-2] h-screen w-screen overflow-x-hidden bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
  >
    <Toaster position="top-right" richColors />
    <NuxtPage />
  </div>
</template>

<style>
body {
  font-family:
    'Space Mono',
    system-ui,
    -apple-system,
    BlinkMacSystemFont;
}
</style>
