'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from './writing/articles'
import {
  profile, socials as socialsData, roles, principles, contributions,
  projects, experience, stack, external, education, certifications, t,
} from './content'

// ── Reveal ────────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal${inView ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const ic = 'w-[16px] h-[16px]'
const XIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
const LinkedInIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
const InstagramIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" /></svg>
const MailIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
const Arrow = ({ c = 'w-3.5 h-3.5' }: { c?: string }) => <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17L17 7M7 7h10v10" /></svg>
const SunIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
const MoonIcon = () => <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /></svg>

// ── Data. Everything you edit lives in app/content.ts ───────────────────────

type Lang = 'en' | 'es'
const EMAIL = profile.email

const iconMap = { x: XIcon, linkedin: LinkedInIcon, instagram: InstagramIcon, mail: MailIcon }
const socials = socialsData.map((s) => ({ ...s, Icon: iconMap[s.icon] }))


// ── Section shell: mono index on the left, content on the right ──────────────

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rule py-14 md:py-20">
      <div className="grid md:grid-cols-[160px_1fr] gap-y-6 gap-x-10">
        <div>
          <Reveal>
            <p className="idx md:sticky md:top-24">{n} / {title}</p>
          </Reveal>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState<Lang>('es')
  const [active, setActive] = useState('')

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = storedTheme ? storedTheme === 'dark' : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    const storedLang = localStorage.getItem('lang') as Lang | null
    if (storedLang === 'es' || storedLang === 'en') setLang(storedLang)
    else setLang(navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es')
  }, [])

  useEffect(() => {
    const ids = ['profile', 'roles', 'experience', 'projects', 'method', 'contact']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
        if (vis.length) setActive(vis[0].target.id)
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
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

  const c = t[lang]
  const navKeys = ['profile', 'roles', 'experience', 'projects', 'method', 'contact'] as const

  return (
    <div className="min-h-[100dvh]">
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'color-mix(in srgb, var(--bg) 88%, transparent)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <a href="#" className="mono text-[13px] tracking-[0.14em]">{profile.initials}</a>
          <div className="hidden md:flex items-center gap-6 mono text-[11.5px] tracking-[0.1em] uppercase">
            {navKeys.map((k) => (
              <a key={k} href={`#${k}`} className={`dim${active === k ? ' nav-on' : ''}`}>{c.nav[k]}</a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={toggleLang} className="dim mono px-2 h-8 text-[11.5px] tracking-[0.1em]" aria-label="Toggle language">
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="dim p-2" aria-label="Toggle theme">
              {mounted && dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-14 items-start">
            <div className="rise order-2 md:order-1">
              <div className="overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <Image
                  src={profile.portrait}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  width={900}
                  height={1125}
                  priority
                  className="w-full h-auto"
                />
              </div>
              <p className="meta mt-2">{profile.locationShort}</p>
            </div>

            <div className="rise order-1 md:order-2" style={{ animationDelay: '70ms' }}>
              <p className="mono text-[11.5px] tracking-[0.1em] uppercase inline-flex items-center gap-2 mb-6" style={{ color: 'var(--gray)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                {c.available}
              </p>

              <h1 className="name mb-5">{profile.firstName}{' '}<br />{profile.lastName}</h1>

              <p className="idx mb-7">{c.discipline}</p>

              <p className="lead max-w-[52ch] mb-8">{c.lead}</p>

              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <a href={`mailto:${EMAIL}`} className="btn btn-solid">{c.getInTouch}</a>
                {profile.cv && (
                  <a href={lang === 'es' ? profile.cv.es : profile.cv.en} download className="btn">{c.cv}</a>
                )}
              </div>

              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer" aria-label={s.label} className="dim">
                    <s.Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 01 Profile ── */}
        <Section id="profile" n="01" title={c.s.profile}>
          <div className="space-y-4 max-w-[68ch]" style={{ color: 'var(--gray)' }}>
            {c.bio.map((p, i) => <Reveal key={i} delay={i * 50}><p>{p}</p></Reveal>)}
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <p className="idx mb-3">{c.facts}</p>
              <dl>
                {(['location', 'availability', 'mode', 'languages', 'focus'] as const).map((k) => (
                  <div key={k} className="rule grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-x-6 py-2.5">
                    <dt className="meta">{c.f[k]}</dt>
                    <dd className="text-[14.5px]">{c.fv[k]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Section>

        {/* ── 02 Roles ── */}
        <Section id="roles" n="02" title={c.s.roles}>
          <div className="space-y-10">
            {roles.map((r, i) => (
              <Reveal key={r.n} delay={i * 50}>
                <div className="rule pt-5">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="h-section">{r.area[lang]}</h3>
                    <span className="meta whitespace-nowrap">{r.primary ? c.primary : c.secondary}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {r.titles.map((x) => <span key={x} className="tag">{x}</span>)}
                  </div>

                  <div className="grid md:grid-cols-[1fr_1fr] gap-x-10 gap-y-3">
                    <div>
                      <p className="meta mb-1.5">{c.owns}</p>
                      <p className="text-[14.5px] leading-[1.65]" style={{ color: 'var(--gray)' }}>{r.owns[lang]}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 content-start">
                      {r.caps.map((x) => (
                        <span key={x} className="mono text-[11.5px]" style={{ color: 'var(--faint)' }}>{x}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── 03 Experience ── */}
        <Section id="experience" n="03" title={c.s.experience}>
          <div>
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 50}>
                <div className="rule py-5">
                  <div className="flex items-baseline justify-between gap-6 mb-1">
                    <p className="text-[16px]">
                      {e.href
                        ? <a href={e.href} target="_blank" rel="noopener noreferrer" className="u">{e.company}</a>
                        : e.company}
                      <span style={{ color: 'var(--faint)' }}>, </span>
                      <span style={{ color: 'var(--gray)' }}>{e.role[lang]}</span>
                    </p>
                    <span className="meta whitespace-nowrap">{e.years}</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5 max-w-[74ch]">
                    {e.notes[lang].map((n, j) => (
                      <p key={j} className="text-[14.5px] leading-[1.6]" style={{ color: 'var(--faint)' }}>{n}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── 04 Education ── */}
        <Section id="education" n="04" title={c.s.education}>
          <div>
            {education.map((e, i) => (
              <Reveal key={e.institution} delay={i * 40}>
                <div className="rule flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="text-[15.5px]">{e.degree[lang]}</p>
                    <p className="text-[14px] mt-0.5" style={{ color: 'var(--gray)' }}>{e.institution}</p>
                  </div>
                  <span className="meta whitespace-nowrap">{e.years}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="idx mt-9 mb-1">{c.certifications}</p>
            <div>
              {certifications.map((cert) => (
                <div key={cert.name} className="rule flex items-baseline justify-between gap-6 py-3">
                  <p className="text-[14.5px]" style={{ color: 'var(--gray)' }}>{cert.name}</p>
                  <span className="meta whitespace-nowrap">{cert.issuer} · {cert.date}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* ── 05 Projects ── */}
        <Section id="projects" n="05" title={c.s.projects}>
          <div className="space-y-8">
            {projects.map((pj, i) => (
              <Reveal key={pj.name} delay={i * 60}>
                <div className="rule pt-5">
                  <div className="flex items-baseline justify-between gap-6 mb-2">
                    <h3 className="h-section">
                      {pj.href
                        ? <a href={pj.href} target="_blank" rel="noopener noreferrer" className="u">{pj.name}</a>
                        : pj.name}
                    </h3>
                    <span className="meta whitespace-nowrap">{pj.status[lang]}</span>
                  </div>
                  <p className="text-[14.5px] leading-[1.65] max-w-[70ch] mb-4" style={{ color: 'var(--gray)' }}>
                    {pj.d[lang]}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3">
                    {pj.facts[lang].map((f) => (
                      <span key={f} className="meta">{f}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pj.stack.map((x) => <span key={x} className="tag">{x}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── 06 Stack ── */}
        <Section id="stack" n="06" title={c.s.stack}>
          <div>
            {stack.map((row, i) => (
              <Reveal key={row.g.en} delay={i * 40}>
                <div className="rule grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-2 py-4">
                  <p className="meta">{row.g[lang]}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {row.items.map((x) => <span key={x} className="tag">{x}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── 07 How I work ── */}
        <Section id="method" n="07" title={c.s.method}>
          <div>
            <div>
              <Reveal>
                <p className="h-section mb-2">{c.methodLine}</p>
                <p className="max-w-[62ch] mb-10" style={{ color: 'var(--gray)' }}>{c.methodBody}</p>
              </Reveal>

              <p className="idx mb-1">{c.principles}</p>
              <div>
                {principles.map((pr, i) => (
                  <Reveal key={pr.n} delay={i * 45}>
                    <div className="rule row-hover grid grid-cols-[28px_1fr] gap-x-4 py-4">
                      <span className="principle-n pt-1">{pr.n}</span>
                      <div>
                        <p className="text-[15.5px] mb-1">{pr.t[lang]}</p>
                        <p className="text-[14.5px] leading-[1.6] max-w-[58ch]" style={{ color: 'var(--faint)' }}>
                          {pr.d[lang]}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <p className="idx mt-10 mb-1">{c.bring}</p>
              <div>
                {contributions.map((cb, i) => (
                  <Reveal key={cb.t.en} delay={i * 45}>
                    <div className="rule row-hover py-4">
                      <p className="text-[15.5px] mb-1">{cb.t[lang]}</p>
                      <p className="text-[14.5px] leading-[1.6] max-w-[58ch]" style={{ color: 'var(--faint)' }}>
                        {cb.d[lang]}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── 08 Writing ── */}
        <Section id="writing" n="08" title={c.s.writing}>
          <div>
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 50}>
                <Link href={`/writing/${a.slug}`} className="group block rule py-5">
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="text-[16px] group-hover:underline underline-offset-4">{a.title[lang]}</span>
                    <span className="meta whitespace-nowrap">{a.dateLabel[lang]}</span>
                  </div>
                  <p className="text-[14.5px] leading-[1.6] mt-1.5 max-w-[70ch]" style={{ color: 'var(--gray)' }}>
                    {a.summary[lang]}
                  </p>
                  <span className="meta inline-flex items-center gap-1.5 mt-2.5">{c.readMore} <Arrow c="w-3 h-3" /></span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <p className="idx mt-10 mb-1">{c.alsoOnX}</p>
            <div>
              {external.map((x) => (
                <a key={x.href} href={x.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 rule py-3">
                  <span className="text-[14.5px] group-hover:underline underline-offset-4" style={{ color: 'var(--gray)' }}>{x.title}</span>
                  <span className="meta inline-flex items-center gap-2 whitespace-nowrap">
                    {x.date}<Arrow c="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* ── 09 Contact ── */}
        <Section id="contact" n="09" title={c.s.contact}>
          <Reveal>
            <p className="max-w-[62ch] mb-6" style={{ color: 'var(--gray)' }}>{c.contactBody}</p>
            <a href={`mailto:${EMAIL}`} className="u text-[18px] inline-block mb-8">{EMAIL}</a>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={s.label} className="dim">
                  <s.Icon />
                </a>
              ))}
            </div>
          </Reveal>
        </Section>

      </main>

      <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1100px] mx-auto px-6 py-7 flex items-center justify-between gap-6">
          <span className="meta">© {new Date().getFullYear()} {`${profile.firstName} ${profile.lastName}`.toUpperCase()}</span>
          <span className="meta">{profile.locationShort}</span>
        </div>
      </footer>
    </div>
  )
}
