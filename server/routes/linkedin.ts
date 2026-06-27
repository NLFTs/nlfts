import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://www.linkedin.com/company/nlfts', 302)
})
