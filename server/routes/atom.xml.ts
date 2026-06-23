import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://NLFTs.dev'

  let posts: any[] = []
  try {
    posts = await queryCollection(event, 'posts')
      .order('date', 'DESC')
      .all()
  }
  catch (e) {
    posts = []
  }

  const updated = posts[0]?.date
    ? new Date(posts[0].date).toISOString()
    : new Date().toISOString()

  const entries = posts.map((post) => {
    const url = `${baseUrl}${post.path ?? '/blog'}`
    const published = post.date ? new Date(post.date).toISOString() : new Date().toISOString()
    const author = post.authors?.[0]?.name ?? 'NLFTs'

    return `
  <entry>
    <title>${escapeXml(post.title ?? 'Untitled')}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <published>${published}</published>
    <updated>${published}</updated>
    <summary>${escapeXml(post.description ?? '')}</summary>
    <author><name>${escapeXml(author)}</name></author>
  </entry>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>NLFTs Blog</title>
  <subtitle>Tips, tutorial, dan info seputar web development dari tim NLFTs.</subtitle>
  <link href="${baseUrl}/blog"/>
  <link rel="self" href="${baseUrl}/atom.xml" type="application/atom+xml"/>
  <id>${baseUrl}/</id>
  <updated>${updated}</updated>
  <author><name>NLFTs</name><email>halo@NLFTs.dev</email></author>
  <icon>${baseUrl}/nlfts.webp</icon>
  ${entries}
</feed>`

  setHeader(event, 'Content-Type', 'application/atom+xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')

  return xml
})

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
