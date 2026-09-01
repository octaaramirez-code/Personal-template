'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Article } from '../articles'
import { profile } from '../../content'

type Lang = 'en' | 'es'

const ui = {
  en: { back: 'All writing', next: 'Next', min: 'min read' },
  es: { back: 'Todos los escritos', next: 'Siguiente', min: 'min de lectura' },
}

const Sun = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
)
const Moon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /></svg>
)

export default function ArticleView({ article, next }: { article: Article; next: Article }) {
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = storedTheme ? storedTheme === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    const storedLang = localStorage.getItem('lang') as Lang | null
    if (storedLang === 'es' || storedLang === 'en') setLang(storedLang)
  }, [])

  const toggleTheme = () => {
    const n = !dark
    setDark(n)
    document.documentElement.classList.toggle('dark', n)
    localStorage.setItem('theme', n ? 'dark' : 'light')
  }
  const toggleLang = () => {
    const n: Lang = lang === 'en' ? 'es' : 'en'
    setLang(n)
    localStorage.setItem('lang', n)
    document.documentElement.lang = n
  }

  const u = ui[lang]

  return (
    <div className="min-h-[100dvh]">
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1152px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
          <Link href="/" className="text-[15px] font-semibold tracking-[-0.3px]">SC</Link>
          <div className="flex items-center gap-1">
            <Link href="/#writing" className="dim px-2 h-8 inline-flex items-center text-[14px]">{u.back}</Link>
            <button onClick={toggleLang} className="dim px-2 h-8 text-[13px] font-medium rounded-md" aria-label="Toggle language">
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="dim p-2 rounded-md" aria-label="Toggle theme">
              {mounted && dark ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[680px] mx-auto px-6 pt-14 pb-20">
        <article className="rise">
          <p className="eyebrow mb-3">{article.dateLabel[lang]} · {article.minutes} {u.min}</p>
          <h1 className="h-article mb-5">{article.title[lang]}</h1>
          <p className="text-[19px] leading-[30px] mb-10" style={{ color: 'var(--gray)' }}>
            {article.summary[lang]}
          </p>

          <div className="prose">
            {article.body[lang].map((b, i) => {
              if (b.t === 'h') return <h2 key={i}>{b.v}</h2>
              if (b.t === 'quote') return <blockquote key={i}>{b.v}</blockquote>
              if (b.t === 'ul') return <ul key={i}>{b.v.map((li, j) => <li key={j}>{li}</li>)}</ul>
              return <p key={i}>{b.v}</p>
            })}
          </div>
        </article>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="eyebrow mb-2">{u.next}</p>
          <Link href={'/writing/' + next.slug} className="group block">
            <p className="text-[22px] font-semibold tracking-[-0.4px] leading-snug group-hover:underline underline-offset-4">
              {next.title[lang]}
            </p>
            <p className="text-[15px] mt-1" style={{ color: 'var(--gray)' }}>{next.summary[lang]}</p>
          </Link>
        </div>
      </main>

      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1152px] mx-auto px-6 py-8 flex items-center justify-between gap-6 text-[14px]" style={{ color: 'var(--faint)' }}>
          <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
          <span>Buenos Aires, Argentina</span>
        </div>
      </footer>
    </div>
  )
}
