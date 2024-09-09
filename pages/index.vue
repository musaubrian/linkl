<template>
  <div class="h-screen w-[100dvw] flex flex-col items-center">
    <div
      class="w-full min-h-screen flex flex-col items-center justify-center gap-5"
    >
      <h1
        class="text-5xl leading-tight font-semibold tracking-wide text-center text-pretty bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent"
      >
        Turn Words into Connections
      </h1>
      <span
        class="text-xl w-10/12 md:w-3/6 md:text-2xl font-light text-slate-600 text-center text-balance italic"
      >
        Unlock AI-powered posts that amplify your professional voice.
      </span>
      <NuxtLink
        class="group relative hover:bg-slate-100 transition-all inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
        to="/create"
      >
        Try for free
      </NuxtLink>
    </div>
    <section class="min-h-screen p-5 mt-5">
      <h1 class="text-center text-4xl mb-6 font-semibold">Features</h1>
      <div
        className="mx-auto grid w-11/12 items-start gap-6 lg:grid-cols-3 lg:gap-12"
      >
        <div
          className="grid gap-1 p-2 "
          v-for="(feature, index) in features"
          :key="index"
        >
          <div
            className="bg-slate-50 rounded-md flex items-center justify-center aspect-square w-12"
            v-html="feature.icon"
          ></div>
          <h3 className="text-xl font-bold">{{ feature.title }}</h3>
          <p className="text-muted-foreground">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>

    <footer
      class="p-2 border-t-2 border-slate-200 w-10/12 inline-flex items-center justify-center italic font-light"
    >
      <span> {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>`,
    title: 'Intelligent Content',
    description:
      'Harness the power of AI to elevate your posts with intelligent, real-time suggestions that ensure your content resonates deeply with your audience.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>`,
    title: 'Insane Speed',
    description:
      'Experience lightning-fast content generation, allowing you to create high-quality LinkedIn posts in seconds.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>`,
    title: 'Privacy First, Always Free',
    description:
      "The platform is completely free and doesn't store any of your data—your privacy is our priority.",
  },
]
</script>
