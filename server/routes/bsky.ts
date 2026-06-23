import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://bsky.app/profile/nlfts.dev', 302)
})
