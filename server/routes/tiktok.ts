import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://www.tiktok.com', 302)
})
