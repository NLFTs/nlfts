import { sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://discord.gg/uNc3r3ZKQx', 302)
})
