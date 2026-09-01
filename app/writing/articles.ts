/* ─────────────────────────────────────────────────────────────────────────────
   Your articles. Each one gets its own page at /writing/<slug>.
   Delete this example and add your own, or leave the array empty
   and the Writing section disappears on its own.
   ───────────────────────────────────────────────────────────────────────────── */

export type Block =
  | { t: 'p'; v: string }
  | { t: 'h'; v: string }
  | { t: 'ul'; v: string[] }
  | { t: 'quote'; v: string }

export type Article = {
  slug: string
  date: string
  dateLabel: { en: string; es: string }
  minutes: number
  title: { en: string; es: string }
  summary: { en: string; es: string }
  body: { en: Block[]; es: Block[] }
}

export const articles: Article[] = []

export const bySlug = (slug: string) => articles.find((a) => a.slug === slug)
