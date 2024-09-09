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
      script: [
        {
          innerHTML: `
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_zFX5BLVW6bbpzf1cNuduWK61sQWlWusrdzOJH38Bf25', {api_host: 'https://us.i.posthog.com', person_profiles: 'identified_only'});
          `,
          type: 'text/javascript',
          charset: 'utf-8',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'posthog-analytics': ['innerHTML'],
      },
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

