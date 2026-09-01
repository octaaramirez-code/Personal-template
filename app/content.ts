/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Everything on the site comes from here.
   You should not need to touch page.tsx unless you want to change the layout.

   The site is bilingual: every visible string has an `en` and an `es` version.
   If you only want one language, put the same text in both.
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  firstName: 'Your',
  lastName: 'Name',
  email: 'you@example.com',

  // Shown as the small logo in the top left corner.
  initials: 'YN',
  // Shown under your photo and in the footer.
  locationShort: 'YOUR CITY, XX',

  // Put your photo at public/portrait.jpg (portrait crop, roughly 4:5).
  portrait: '/portrait.jpg',

  // Your deployed URL, used for metadata and social cards.
  siteUrl: 'https://your-site.vercel.app',

  // Shown in the browser tab and social previews.
  title: 'Your Name, Product and Design',
  description:
    'Product design and frontend, with a bias for shipping. Based anywhere. Open to product, design and engineering roles.',
  twitterHandle: '@yourhandle',

  // To offer a CV download: drop your PDFs in public/cv/ and replace null with
  //   { en: '/cv/cv-en.pdf', es: '/cv/cv-es.pdf' }
  // While this is null the download button simply does not render.
  cv: null as { en: string; es: string } | null,
}

/* icon accepts: 'x' | 'linkedin' | 'instagram' | 'mail' */
export const socials = [
  { label: 'X', href: 'https://x.com/yourhandle', icon: 'x' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourhandle/', icon: 'linkedin' as const },
  { label: 'Instagram', href: 'https://instagram.com/yourhandle', icon: 'instagram' as const },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' as const },
]

/* Roles you are open to. `primary: true` shows under "Primary", false under "Also open to". */
export const roles = [
  {
    n: '01', primary: true,
    area: { en: 'Product Design', es: 'Diseño de Producto' },
    titles: ['Product Designer', 'UX Designer', 'Design Generalist'],
    owns: {
      en: 'End to end product work, from the first sketch to the shipped interface, and the research that says whether it was the right thing.',
      es: 'Producto de punta a punta, del primer boceto a la interfaz publicada, y la investigación que dice si era lo correcto.',
    },
    caps: ['Interface design', 'Design systems', 'Prototyping', 'User research', 'Figma'],
  },
  {
    n: '02', primary: true,
    area: { en: 'Frontend Engineering', es: 'Frontend' },
    titles: ['Frontend Engineer', 'Design Engineer'],
    owns: {
      en: 'Turning designs into fast, accessible interfaces, and keeping the component library honest as the product grows.',
      es: 'Convertir diseños en interfaces rápidas y accesibles, y mantener la librería de componentes sana mientras el producto crece.',
    },
    caps: ['React', 'TypeScript', 'Next.js', 'CSS', 'Accessibility'],
  },
  {
    n: '03', primary: false,
    area: { en: 'Brand and Content', es: 'Marca y Contenido' },
    titles: ['Brand Designer', 'Content Designer'],
    owns: {
      en: 'Visual identity, the words inside the product, and keeping both consistent across every surface.',
      es: 'Identidad visual, las palabras dentro del producto, y mantener ambas consistentes en cada superficie.',
    },
    caps: ['Visual identity', 'UX writing', 'Art direction'],
  },
]

/* How you work. Keep these short and specific: they are the most read part of the page. */
export const principles = [
  {
    n: '01',
    t: { en: 'Ship it and watch', es: 'Publicarlo y mirar' },
    d: {
      en: 'A real user for ten minutes beats a meeting about what users might want.',
      es: 'Un usuario real diez minutos vale más que una reunión sobre lo que los usuarios querrían.',
    },
  },
  {
    n: '02',
    t: { en: 'Write it down', es: 'Escribirlo' },
    d: {
      en: 'If a decision is not written down, it gets made again next month by someone else.',
      es: 'Si una decisión no está escrita, alguien la vuelve a tomar el mes que viene.',
    },
  },
  {
    n: '03',
    t: { en: 'Cut the scope, not the quality', es: 'Recortar alcance, no calidad' },
    d: {
      en: 'Half the features finished properly beats all of them half finished.',
      es: 'La mitad de las funciones bien terminadas vale más que todas a medias.',
    },
  },
  {
    n: '04',
    t: { en: 'One problem at a time', es: 'Un problema a la vez' },
    d: {
      en: 'Find the actual constraint and let the rest wait. Five priorities is the same as none.',
      es: 'Encontrar la restricción real y dejar que el resto espere. Cinco prioridades es igual a ninguna.',
    },
  },
]

/* What you bring to a team. Concrete, not adjectives. */
export const contributions = [
  {
    t: { en: 'I design and build', es: 'Diseño y construyo' },
    d: {
      en: 'I can take an idea to a working interface without a handoff in the middle.',
      es: 'Puedo llevar una idea a una interfaz funcionando sin un handoff en el medio.',
    },
  },
  {
    t: { en: 'I work in two languages', es: 'Trabajo en dos idiomas' },
    d: {
      en: 'Comfortable running projects and client calls in English and Spanish.',
      es: 'Cómodo llevando proyectos y llamadas con clientes en inglés y español.',
    },
  },
  {
    t: { en: 'I leave things better documented', es: 'Dejo todo mejor documentado' },
    d: {
      en: 'Components, decisions and process, so the next person moves faster than I did.',
      es: 'Componentes, decisiones y proceso, para que el próximo avance más rápido que yo.',
    },
  },
]

export const projects = [
  {
    name: 'Example Project',
    href: 'https://example.com',
    status: { en: 'Live', es: 'En vivo' },
    d: {
      en: 'One or two sentences on what it is and what problem it solves. Say what it does, not how excited you are about it.',
      es: 'Una o dos frases sobre qué es y qué problema resuelve. Decí qué hace, no lo entusiasmado que estás.',
    },
    facts: { en: ['A concrete number', 'Another fact', 'A third one'], es: ['Un número concreto', 'Otro dato', 'Un tercero'] },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'This site',
    href: null,
    status: { en: 'This site', es: 'Este sitio' },
    d: {
      en: 'Bilingual personal site. Static, no CMS, all content in a single file.',
      es: 'Sitio personal bilingüe. Estático, sin CMS, todo el contenido en un solo archivo.',
    },
    facts: { en: ['Bilingual', 'Light and dark', 'Static'], es: ['Bilingüe', 'Claro y oscuro', 'Estático'] },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
]

export const experience = [
  {
    company: 'Company Name', href: 'https://example.com', years: '2024 -',
    role: { en: 'Your role there', es: 'Tu rol ahí' },
    notes: {
      en: [
        'What you actually owned, with a number attached where you have one.',
        'A second line if the first does not cover it. Two or three lines is plenty.',
      ],
      es: [
        'De qué te hiciste cargo realmente, con un número cuando lo tengas.',
        'Una segunda línea si la primera no alcanza. Con dos o tres líneas sobra.',
      ],
    },
  },
  {
    company: 'Previous Company', href: null, years: '2022 - 2024',
    role: { en: 'Your previous role', es: 'Tu rol anterior' },
    notes: {
      en: ['One line on the outcome, not the job description.'],
      es: ['Una línea sobre el resultado, no la descripción del puesto.'],
    },
  },
]

export const stack = [
  { g: { en: 'Design', es: 'Diseño' }, items: ['Figma', 'Framer', 'Photoshop', 'Illustrator'] },
  { g: { en: 'Build', es: 'Construcción' }, items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Vercel'] },
  { g: { en: 'Data and analytics', es: 'Datos y analítica' }, items: ['GA4', 'PostHog', 'Metabase', 'SQL'] },
  { g: { en: 'Operations', es: 'Operaciones' }, items: ['Notion', 'Linear', 'Slack', 'Airtable'] },
]

/* Links to writing published elsewhere (X, Medium, your newsletter). */
export const external = [
  { title: 'An article you wrote somewhere else', date: 'Jan 2026', href: 'https://example.com' },
]

export const education = [
  {
    institution: 'Your University', years: '2020 - 2024',
    degree: { en: 'Your degree', es: 'Tu carrera' },
  },
]

export const certifications = [
  { name: 'A certification you hold', issuer: 'Issuer', date: '2025' },
]

/* ── Interface strings and long-form copy ─────────────────────────────────── */

export const t = {
  en: {
    nav: { profile: 'Profile', roles: 'Roles', method: 'How I work', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    discipline: 'Product Design / Frontend / Brand',
    lead: 'I design and build the interfaces products are used through. Product design and frontend, with a bias for shipping.',
    available: 'Available now',
    getInTouch: 'Get in touch', cv: 'Download CV', readMore: 'Read',
    s: { profile: 'Profile', roles: 'Roles I can fill', method: 'How I work', experience: 'Experience', projects: 'Projects', stack: 'Stack', writing: 'Writing', education: 'Education', contact: 'Contact' },
    principles: 'Working principles', method: 'Method', bring: 'What I bring to a team',
    methodLine: 'Ship, then look at what happened.',
    methodBody: 'I would rather put something small in front of a real person this week than argue about the perfect version of it for a month.',
    facts: 'Facts',
    f: { location: 'Location', availability: 'Availability', mode: 'Work mode', languages: 'Languages', focus: 'Focus' },
    fv: {
      location: 'Your City, Country',
      availability: 'Immediate',
      mode: 'Remote, hybrid, or freelance',
      languages: 'Spanish native, English C1',
      focus: 'Product design, frontend',
    },
    primary: 'Primary', secondary: 'Also open to', owns: 'Would own',
    alsoOnX: 'Also on X', certifications: 'Certifications',
    contactBody: 'Open to roles in product design, frontend and brand. Remote, hybrid or freelance. Also up for a good conversation with anyone building something interesting.',
    bio: [
      'First paragraph. Where you started and what you were doing before this. Keep it plain, no throat clearing.',
      'Second paragraph. What changed, what you learned, and the work that actually shaped how you think.',
      'Third paragraph. What you are doing now, and what you are looking for next.',
    ],
  },
  es: {
    nav: { profile: 'Perfil', roles: 'Roles', method: 'Cómo trabajo', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    discipline: 'Diseño de Producto / Frontend / Marca',
    lead: 'Diseño y construyo las interfaces a través de las que se usan los productos. Diseño de producto y frontend, con sesgo a publicar.',
    available: 'Disponible ahora',
    getInTouch: 'Contactame', cv: 'Descargar CV', readMore: 'Leer',
    s: { profile: 'Perfil', roles: 'Roles que puedo ocupar', method: 'Cómo trabajo', experience: 'Experiencia', projects: 'Proyectos', stack: 'Stack', writing: 'Escritos', education: 'Formación', contact: 'Contacto' },
    principles: 'Códigos de trabajo', method: 'Método', bring: 'Qué aporto a un equipo',
    methodLine: 'Publicar y después mirar qué pasó.',
    methodBody: 'Prefiero poner algo chico frente a una persona real esta semana antes que discutir la versión perfecta durante un mes.',
    facts: 'Datos',
    f: { location: 'Ubicación', availability: 'Disponibilidad', mode: 'Modalidad', languages: 'Idiomas', focus: 'Foco' },
    fv: {
      location: 'Tu Ciudad, País',
      availability: 'Inmediata',
      mode: 'Remoto, híbrido o freelance',
      languages: 'Español nativo, Inglés C1',
      focus: 'Diseño de producto, frontend',
    },
    primary: 'Principal', secondary: 'También abierto a', owns: 'Me haría cargo de',
    alsoOnX: 'También en X', certifications: 'Certificaciones',
    contactBody: 'Abierto a roles de diseño de producto, frontend y marca. Remoto, híbrido o freelance. También listo para una buena charla con cualquiera que esté construyendo algo interesante.',
    bio: [
      'Primer párrafo. Dónde empezaste y qué hacías antes de esto. Directo, sin vueltas.',
      'Segundo párrafo. Qué cambió, qué aprendiste, y el trabajo que realmente formó cómo pensás.',
      'Tercer párrafo. Qué estás haciendo ahora, y qué buscás después.',
    ],
  },
}
