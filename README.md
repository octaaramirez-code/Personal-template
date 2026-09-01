# Personal site template

A bilingual personal site: profile, roles, experience, projects, writing and contact.
Static, no CMS, no database. All the content lives in one file.

Light and dark, English and Spanish, both switchable from the header.

Built with Next.js, TypeScript and Tailwind. Deploys on Vercel in about two minutes.

---

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Make it yours

Almost everything is in **`app/content.ts`**. Open it and work top to bottom:

| What | Where |
| --- | --- |
| Name, email, initials, location | `profile` |
| Your links | `socials` |
| Roles you are open to | `roles` |
| How you work, what you bring | `principles`, `contributions` |
| Projects | `projects` |
| Jobs | `experience` |
| Tools you use | `stack` |
| Studies and certifications | `education`, `certifications` |
| Every label and your bio | `t` (`en` and `es`) |

Then:

1. **Photo.** Replace `public/portrait.jpg` with yours. Portrait crop, roughly 4:5.
2. **Articles.** Edit `app/writing/articles.ts`. Each one gets a page at `/writing/<slug>`. Leave the array empty and the section disappears.
3. **CV.** Optional. Drop your PDFs in `public/cv/` and point `profile.cv` at them. While it is `null` the download button does not render.
4. **Favicon.** Edit `app/icon.svg`.

The site is bilingual, so every visible string has an `en` and an `es` version. If you only want one language, put the same text in both.

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). No environment variables, no configuration.

Once it is live, set `profile.siteUrl` to your real URL so the social preview cards work.

## Structure

```
app/
  content.ts        <- edit this
  page.tsx          <- the layout, only if you want to change the design
  layout.tsx        <- metadata, reads from content.ts
  globals.css       <- colours, type scale, motion
  icon.svg          <- favicon
  writing/
    articles.ts     <- your articles
public/
  portrait.jpg      <- your photo
```

## Notes

- Type scale, spacing and colours are defined as CSS variables at the top of `globals.css`. Change them there rather than hunting through the components.
- Nothing above font weight 500 anywhere, on purpose.
- Motion respects `prefers-reduced-motion`.
- Theme follows the system by default and remembers the choice after that.
