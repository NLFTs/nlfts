import { sendRedirect } from 'h3'

export default defineEventHandler(() => {
  return sendRedirect(undefined, 'https://wa.me/6283160325595', 302)
})
