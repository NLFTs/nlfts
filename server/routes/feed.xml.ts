// Redirect /feed.xml → /rss.xml untuk backward compatibility
// Feed reader lama yang sudah subscribe ke /feed.xml tetap bisa baca
export default defineEventHandler((event) => {
  return sendRedirect(event, '/rss.xml', 301)
})
