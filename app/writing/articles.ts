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

export const articles: Article[] = [
  {
    slug: 'an-example-article',
    date: '2026-01-15',
    dateLabel: { en: 'January 2026', es: 'Enero 2026' },
    minutes: 3,
    title: {
      en: 'An example article',
      es: 'Un artículo de ejemplo',
    },
    summary: {
      en: 'One sentence that makes someone want to read the rest. This is what shows up in the list.',
      es: 'Una frase que haga que alguien quiera leer el resto. Esto es lo que aparece en la lista.',
    },
    body: {
      en: [
        { t: 'p', v: 'Open with the point, not with a warm up. The reader decided to click, do not make them wait for the payoff.' },
        { t: 'h', v: 'A section heading' },
        { t: 'p', v: 'Write in short paragraphs. One idea each. If a paragraph is doing two jobs, split it.' },
        { t: 'ul', v: ['A list item', 'Another list item', 'A third one'] },
        { t: 'quote', v: 'A pull quote, for the line worth remembering.' },
        { t: 'p', v: 'Close with what changes for the reader now that they have read it.' },
      ],
      es: [
        { t: 'p', v: 'Abrí con el punto, no con un calentamiento. El lector ya hizo clic, no lo hagas esperar.' },
        { t: 'h', v: 'Un subtítulo' },
        { t: 'p', v: 'Escribí en párrafos cortos. Una idea cada uno. Si un párrafo hace dos cosas, partilo.' },
        { t: 'ul', v: ['Un ítem de lista', 'Otro ítem', 'Un tercero'] },
        { t: 'quote', v: 'Una cita destacada, para la línea que vale la pena recordar.' },
        { t: 'p', v: 'Cerrá con qué cambia para el lector ahora que lo leyó.' },
      ],
    },
  },
]

export const bySlug = (slug: string) => articles.find((a) => a.slug === slug)
