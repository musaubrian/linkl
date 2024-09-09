import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

const groqKey = useRuntimeConfig().GROQ_API_KEY
const MODEL = 'llama3-8b-8192'

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: groqKey,
})

export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  const { text } = await generateText({
    model: groq(MODEL),
    prompt: body.prompt,
  })

  return { result: text }
})
