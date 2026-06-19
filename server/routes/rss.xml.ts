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

  const now = new Date().toUTCString()

  const items = posts.map((post) => {
    const url = `${baseUrl}${post.path ?? '/blog'}`
    const pubDate = post.date ? new Date(post.date).toUTCString() : now
    const author = post.authors?.[0]?.name ?? 'NLFTs'
    const title = escapeXml(post.title ?? 'Untitled')
    const description = escapeXml(post.description ?? '')
    const category = post.badge?.label ? `<category>${escapeXml(post.badge.label)}</category>` : ''

    let image = `${baseUrl}/NLFTs.png`
    if (post.image?.src) {
      image = post.image.src.startsWith('http')
        ? post.image.src
        : `${baseUrl}/${post.image.src.replace(/^\.?\//, '')}`
    }

    return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(author)}</dc:creator>
      ${category}
      <enclosure url="${image}" type="image/png" length="0"/>
    </item>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <channel>
    <title>NLFTs Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Tips, tutorial, dan info seputar web development, hosting, game server, dan aplikasi Android dari tim NLFTs.</description>
    <language>id</language>
    <copyright>Copyright ${new Date().getFullYear()} NLFTs</copyright>
    <managingEditor>halo@NLFTs.dev (NLFTs)</managingEditor>
    <webMaster>halo@NLFTs.dev (NLFTs)</webMaster>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/NLFTs.png</url>
      <title>NLFTs Blog</title>
      <link>${baseUrl}/blog</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
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
