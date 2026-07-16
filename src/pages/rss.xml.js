import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.tagline,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title || post.data.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      pubDate: post.data.date,
      link: `${import.meta.env.BASE_URL}blog/#${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
