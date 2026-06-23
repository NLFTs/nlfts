import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://chat.whatsapp.com/CsT9hYFZUmz6NRFJzZ3yhj', 302)
})
