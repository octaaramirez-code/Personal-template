import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, bySlug } from '../articles'
import { profile } from '../../content'
import ArticleView from './article-view'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const a = bySlug(slug)
  if (!a) return {}
  return {
    title: `${a.title.en}, ${profile.firstName} ${profile.lastName}`,
    description: a.summary.en,
    openGraph: {
      title: a.title.en,
      description: a.summary.en,
      type: 'article',
      publishedTime: a.date,
      url: 'https://schap.vercel.app/writing/' + a.slug,
    },
    twitter: {
      card: 'summary_large_image',
      title: a.title.en,
      description: a.summary.en,
      creator: profile.twitterHandle,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = bySlug(slug)
  if (!article) notFound()

  const i = articles.findIndex((a) => a.slug === slug)
  const next = articles[(i + 1) % articles.length]

  return <ArticleView article={article} next={next} />
}
