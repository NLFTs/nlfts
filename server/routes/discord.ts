import { sendRedirect } from 'h3'

export default defineEventHandler(() => {
  return sendRedirect(undefined, 'https://discord.gg/uNc3r3ZKQx', 302)
})
