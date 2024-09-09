<template>
  <div class="h-screen w-full flex flex-col items-center justify-center gap-4">
    <h1
      class="inline-flex items-center font-semibold text-slate-600 justify-center w-full text-3xl text-pretty"
    >
      Craft your next
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
          class="w-8 h-8"
        >
          <path
            fill="#0288D1"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
      </span>
      Post
    </h1>

    <div
      class="h-[70dvh] w-11/12 md:h-[50dvh] bg-blue-100/70 md:w-4/6 shadow-lg rounded-lg"
    >
      <div
        class="w-full h-full text-lg text-pretty tracking-wide flex flex-col items-center gap-3"
      >
        <form class="h-full w-full" @submit="handleSubmit">
          <textarea
            v-model="context"
            required
            class="bg-inherit w-full h-3/4 p-3 text-md tracking-tight"
            placeholder="Provide some context"
            :readonly="gotResult"
          ></textarea>

          <div
            class="flex flex-row h-1/4 bg-blue-100/90 w-full items-center justify-around p-2"
          >
            <div
              class="w-3/6 inline-flex items-center justify-around my-3"
              v-if="gotResult"
            >
              <button
                type="button"
                class="inline-flex items-center justify-center gap-2"
                @click="regenerate"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Regenerate
              </button>
              <button
                type="button"
                @click="copyToClipboard"
                class="inline-flex items-center justify-center gap-2 bg-blue-200 py-2 px-3 rounded-md hover:bg-blue-300 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
                Copy
              </button>
            </div>
            <div
              v-else
              class="w-9/12 md:w-4/6 h-full inline-flex items-center justify-between"
            >
              <Select required v-model="mode">
                <SelectTrigger class="w-[180px]">
                  <SelectValue placeholder="Mode to write in" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Mode</SelectLabel>
                    <SelectItem value="informative"> Informative </SelectItem>
                    <SelectItem value="story"> Story </SelectItem>
                    <SelectItem value="advice"> Advice </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <button
                type="submit"
                :disabled="generating"
                class="bg-blue-500 relative overflow-hidden rounded-md px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
              >
                {{ generating ? 'Generating...' : 'Generate' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const generating = ref(false)
const gotResult = ref(false)
const mode = ref('')
const context = ref('')
const postResult = ref('')
const { $toast } = useNuxtApp()

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  generating.value = true
  try {
    const { result } = await $fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify({
        prompt: `
<instruction>
Given the following information(context and tone), create an engaging linkedin
feel free to use emojis but in moderation, do not overuse.
Use the followng context and tone to craft the post
The post should be geared to engagement, be as creative as possible without going out of the context, tone and constraints
You can include hashtags that are relevant and will help in spreading the post to the masses
</instruction>

<constraint>
YOU MUST ADHERE TO THIS CONSTRAINT
<mandatory>Your response should not have any form and or variation of markdown formatting</mandatory>
Respond only with the post, nothing more nothing less, no small talk or whatnot, just the post itself
If the context and tone do not involve any linkedin requirements such as code generation, or a code block asking you to fix it, reply with "I can not respond to that"
</constraint>

<context>
${context.value}
</context>

<tone>
${mode.value}
</tone>
`,
      }),
    })
    postResult.value = result
    context.value = result
    $toast.success('Post is ready')
    gotResult.value = true
  } catch (e) {
    $toast.error('Something went wrong')
    console.error(e)
  } finally {
    generating.value = false
  }
}

const regenerate = () => {
  gotResult.value = false
}
const copyToClipboard = () => {
  if (postResult.value.length < 1) {
    $toast.warning('Nothing to copy')
    return
  }
  navigator.clipboard.writeText(postResult.value).then(
    function () {
      $toast.success('Copied to Clipboard')
    },
    function (err) {
      console.error(err)
      $toast.error('Could not copy to clipoard')
    },
  )
}
</script>
