import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://github.com/sponsors/nlfts', 302)
})
