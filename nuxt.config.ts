// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Linkl - Turn Words into Connections',
      meta: [
        {
          name: 'description',
          content:
            'Unlock AI-powered posts that amplify your professional voice.',
        },
        {
          name: 'keywords',
          content:
            'AI, LinkedIn posts, professional networking, social media, AI-powered content, Linkl, professional voice',
        },
        {
          property: 'og:title',
          content: 'Linkl - Turn Words into Connections',
        },
        {
          property: 'og:description',
          content:
            'Unlock AI-powered posts that amplify your professional voice.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://linkl.nabri.xyz' },
        {
          property: 'og:image',
          content: 'https://linkl.nabri.xyz/linkl.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Linkl - Turn Words into Connections',
        },
        {
          name: 'twitter:description',
          content:
            'Unlock AI-powered posts that amplify your professional voice.',
        },
        {
          name: 'twitter:image',
          content: 'https://linkl.nabri.xyz/linkl.png',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/fonts'],
  build: {
    transpile: ['vue-sonner'],
  },
})

