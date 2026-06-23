import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://www.instagram.com/nlfts.dev', 302)
})
