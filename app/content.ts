/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Everything on the site comes from here.
   You should not need to touch page.tsx unless you want to change the layout.

   The site is bilingual: every visible string has an `en` and an `es` version.
   If you only want one language, put the same text in both.
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  firstName: 'Octavio',
  lastName: 'Ramírez',
  email: 'octaaramirez@gmail.com',

  // Shown as the small logo in the top left corner.
  initials: 'OR',
  // Shown under your photo and in the footer.
  locationShort: 'MAR DEL PLATA, AR',

  // Put your photo at public/portrait.jpg (portrait crop, roughly 4:5).
  portrait: '/portrait.jpg',

  // Your deployed URL, used for metadata and social cards.
  // Update this once you deploy on Vercel, to whatever URL it gives you.
  siteUrl: 'https://octavio-ramirez.vercel.app',

  // Shown in the browser tab and social previews.
  title: 'Octavio Ramírez — Licenciado en Finanzas',
  description:
    'Análisis financiero y administración corporativa, con experiencia en modelado financiero, flujo de caja y control de gestión. Abierto a roles remotos.',
  twitterHandle: '',

  // CV in English, from your resume. Point .es at a Spanish version if you make one later.
  cv: { en: '/cv/octavio-ramirez-cv.pdf', es: '/cv/octavio-ramirez-cv.pdf' },
}

/* icon accepts: 'x' | 'linkedin' | 'instagram' | 'mail' */
export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jorgeoctavioramirez/', icon: 'linkedin' as const },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' as const },
]

/* Roles you are open to. `primary: true` shows under "Primary", false under "Also open to". */
export const roles = [
  {
    n: '01', primary: true,
    area: { en: 'Financial Analysis', es: 'Análisis Financiero' },
    titles: ['Financial Analyst', 'FP&A Analyst', 'Investment Analyst'],
    owns: {
      en: 'Financial models, cash flow projections and reports that turn raw numbers into decisions management can actually act on.',
      es: 'Modelos financieros, proyecciones de flujo de caja y reportes que convierten los números en decisiones que la gerencia puede tomar.',
    },
    caps: ['Financial modeling', 'Advanced Excel', 'Bloomberg Terminals', 'Cash flow forecasting'],
  },
  {
    n: '02', primary: true,
    area: { en: 'Corporate Administration', es: 'Administración Corporativa' },
    titles: ['Corporate Administration', 'Management Control Analyst', 'Accounting & Treasury'],
    owns: {
      en: 'Cost structures, supplier and treasury coordination, and the internal controls that keep the numbers reliable.',
      es: 'Estructuras de costos, coordinación con proveedores y tesorería, y los controles internos que mantienen los números confiables.',
    },
    caps: ['Accounting', 'Treasury', 'Reconciliations', 'SAP FI'],
  },
  {
    n: '03', primary: false,
    area: { en: 'Markets & SAP', es: 'Mercados y SAP' },
    titles: ['SAP FI Consultant (Jr.)', 'Markets & Data Analyst'],
    owns: {
      en: 'Support on SAP S/4HANA financial accounting processes, and market or data analysis with Bloomberg and analytics tools.',
      es: 'Soporte en procesos de contabilidad financiera en SAP S/4HANA, y análisis de mercado o datos con Bloomberg y herramientas de analítica.',
    },
    caps: ['SAP S/4HANA (FI)', 'Bloomberg Terminals', 'Data Analytics'],
  },
]

/* How you work. Keep these short and specific: they are the most read part of the page. */
export const principles = [
  {
    n: '01',
    t: { en: 'Numbers first', es: 'Los números primero' },
    d: {
      en: 'A decision should follow the model, not justify one already made.',
      es: 'Una decisión debería seguir al modelo, no justificar una ya tomada.',
    },
  },
  {
    n: '02',
    t: { en: 'Document every assumption', es: 'Documentar cada supuesto' },
    d: {
      en: 'A forecast without its assumptions written down is just a guess with a chart.',
      es: 'Una proyección sin sus supuestos escritos es solo una suposición con gráfico.',
    },
  },
  {
    n: '03',
    t: { en: 'Control before speed', es: 'Control antes que velocidad' },
    d: {
      en: 'Closing the books right beats closing them fast — errors compound faster than the time you save.',
      es: 'Cerrar bien vale más que cerrar rápido: los errores se acumulan más rápido de lo que se ahorra tiempo.',
    },
  },
  {
    n: '04',
    t: { en: 'One number, one owner', es: 'Un número, un responsable' },
    d: {
      en: 'If nobody is accountable for a figure, nobody catches it when it is wrong.',
      es: 'Si nadie es responsable de un número, nadie lo detecta cuando está mal.',
    },
  },
]

/* What you bring to a team. Concrete, not adjectives. */
export const contributions = [
  {
    t: { en: 'I build the model and read it', es: 'Armo el modelo y lo interpreto' },
    d: {
      en: 'From the spreadsheet to the explanation management actually needs, without a handoff in between.',
      es: 'De la planilla a la explicación que la gerencia realmente necesita, sin un handoff en el medio.',
    },
  },
  {
    t: { en: 'I work across borders', es: 'Trabajo en entornos internacionales' },
    d: {
      en: 'Experience coordinating finance and operations between Argentina and Costa Rica, in Spanish and English (C1).',
      es: 'Experiencia coordinando finanzas y operaciones entre Argentina y Costa Rica, en español e inglés (C1).',
    },
  },
  {
    t: { en: 'I close the loop on the detail', es: 'Cierro el detalle' },
    d: {
      en: 'Reconciliations, supporting documentation and controls done properly, not just fast.',
      es: 'Conciliaciones, documentación de respaldo y controles bien hechos, no solo rápidos.',
    },
  },
]

export const projects = [
  {
    name: 'La Comarca Glamping Dome',
    href: null,
    status: { en: 'Live', es: 'En vivo' },
    d: {
      en: 'Glamping venture in Puntarenas, Costa Rica. Co-led the launch: debt amortization plan, operating cost structure and demand forecasting.',
      es: 'Emprendimiento de glamping en Puntarenas, Costa Rica. Colideré el lanzamiento: plan de amortización de deuda, estructura de costos operativos y proyección de demanda.',
    },
    facts: {
      en: ['Co-founder since 2023', 'Demand & occupancy forecasting model', 'Pricing & supplier negotiation'],
      es: ['Cofundador desde 2023', 'Modelo de proyección de demanda y ocupación', 'Pricing y negociación con proveedores'],
    },
    stack: ['Excel', 'Financial modeling', 'Cash flow forecasting'],
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
    company: 'La Comarca Glamping Dome', href: null, years: '2023 -',
    role: { en: 'Co-Founder & Financial Consultant', es: 'Cofundador y Consultor Financiero' },
    notes: {
      en: [
        'Co-led the launch: designed the mortgage debt amortization plan and the operating cost structure.',
        'Built demand and occupancy forecasting models from local tourism market analytics and benchmarking.',
        'Ran pricing, supplier negotiation and cash flow reporting for management decisions.',
      ],
      es: [
        'Colideré el lanzamiento: diseñé el plan de amortización de la deuda hipotecaria y la estructura de costos operativos.',
        'Construí modelos de proyección de demanda y ocupación a partir de analítica de turismo local y benchmarking.',
        'Llevé pricing, negociación con proveedores y reportes de flujo de caja para la toma de decisiones.',
      ],
    },
  },
  {
    company: 'Grupo Lumio', href: null, years: '2022 - 2023',
    role: { en: 'Accounting Assistant', es: 'Asistente Contable' },
    notes: {
      en: [
        'Managed and controlled supporting documentation for supplier and client accounts, coordinating with treasury.',
        'Supported reconciliations and monitored internal administrative and accounting processes.',
      ],
      es: [
        'Gestioné y controlé la documentación de respaldo de cuentas de proveedores y clientes, coordinando con tesorería.',
        'Di soporte en conciliaciones y monitoreo de procesos administrativos y contables internos.',
      ],
    },
  },
]

export const stack = [
  { g: { en: 'Finance', es: 'Finanzas' }, items: ['Bloomberg Terminals', 'Financial Modeling', 'Cash Flow Forecasting', 'Valuation'] },
  { g: { en: 'Tools', es: 'Herramientas' }, items: ['Advanced Excel', 'SAP S/4HANA (FI)', 'Financial Python'] },
  { g: { en: 'Accounting & Control', es: 'Contabilidad y Control' }, items: ['Management Control', 'Treasury', 'Reconciliations', 'Documentary Audit'] },
]

/* Links to writing published elsewhere (X, Medium, your newsletter). */
export const external: { title: string; date: string; href: string }[] = []

export const education = [
  {
    institution: 'Universidad Argentina de la Empresa (UADE)', years: '2022 - 2026',
    degree: { en: "Bachelor's Degree in Finance", es: 'Licenciatura en Finanzas' },
  },
]

export const certifications = [
  { name: 'Bloomberg Market Concepts (BMC)', issuer: 'Bloomberg L.P.', date: '2025' },
  { name: 'SAP S/4HANA Cloud – Financial Accounting (C_TS4FI)', issuer: 'SAP SE / SAP Learning', date: 'En curso' },
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google / Coursera', date: 'En curso' },
]

/* ── Interface strings and long-form copy ─────────────────────────────────── */

export const t = {
  en: {
    nav: { profile: 'Profile', roles: 'Roles', method: 'How I work', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    discipline: 'Financial Analysis / Corporate Administration / SAP',
    lead: 'I turn financial data into models and reports that management can act on. Finance graduate, with a bias for rigor.',
    available: 'Available now',
    getInTouch: 'Get in touch', cv: 'Download CV', readMore: 'Read',
    s: { profile: 'Profile', roles: 'Roles I can fill', method: 'How I work', experience: 'Experience', projects: 'Projects', stack: 'Stack', writing: 'Writing', education: 'Education', contact: 'Contact' },
    principles: 'Working principles', method: 'Method', bring: 'What I bring to a team',
    methodLine: 'Build the model, document the assumptions, then decide.',
    methodBody: 'I would rather spend an extra hour making sure the numbers hold up than present a fast answer that falls apart under one follow-up question.',
    facts: 'Facts',
    f: { location: 'Location', availability: 'Availability', mode: 'Work mode', languages: 'Languages', focus: 'Focus' },
    fv: {
      location: 'Mar del Plata, Argentina',
      availability: 'Immediate',
      mode: 'Remote or hybrid',
      languages: 'Spanish native, English C1',
      focus: 'Financial analysis, corporate administration',
    },
    primary: 'Primary', secondary: 'Also open to', owns: 'Would own',
    alsoOnX: 'Also on X', certifications: 'Certifications',
    contactBody: 'Open to remote or hybrid roles in financial analysis, corporate administration and SAP FI. Also up for a good conversation about markets, models or finance in general.',
    bio: [
      "I'm a Finance graduate from UADE (Buenos Aires), with hands-on experience in financial advisory, accounting and management control across corporate and international environments.",
      'Co-founding a glamping venture in Costa Rica taught me to build financial models people actually use: demand forecasts, cash flow reports and cost structures that hold up when a real decision depends on them. Before that, at Grupo Lumio, I learned the discipline behind the numbers — documentation, reconciliations and the accounting processes that keep a company trustworthy.',
      "Right now I'm deepening my SAP FI skills and looking for a remote role in financial analysis or corporate administration where I can bring that mix of modeling and rigor to a team.",
    ],
  },
  es: {
    nav: { profile: 'Perfil', roles: 'Roles', method: 'Cómo trabajo', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    discipline: 'Análisis Financiero / Administración Corporativa / SAP',
    lead: 'Convierto datos financieros en modelos y reportes que la gerencia puede usar para decidir. Licenciado en Finanzas, con sesgo al rigor.',
    available: 'Disponible ahora',
    getInTouch: 'Contactame', cv: 'Descargar CV', readMore: 'Leer',
    s: { profile: 'Perfil', roles: 'Roles que puedo ocupar', method: 'Cómo trabajo', experience: 'Experiencia', projects: 'Proyectos', stack: 'Stack', writing: 'Escritos', education: 'Formación', contact: 'Contacto' },
    principles: 'Códigos de trabajo', method: 'Método', bring: 'Qué aporto a un equipo',
    methodLine: 'Armar el modelo, documentar los supuestos, y después decidir.',
    methodBody: 'Prefiero dedicar una hora más a que los números cierren antes que dar una respuesta rápida que se cae con la primera pregunta.',
    facts: 'Datos',
    f: { location: 'Ubicación', availability: 'Disponibilidad', mode: 'Modalidad', languages: 'Idiomas', focus: 'Foco' },
    fv: {
      location: 'Mar del Plata, Argentina',
      availability: 'Inmediata',
      mode: 'Remoto o híbrido',
      languages: 'Español nativo, Inglés C1',
      focus: 'Análisis financiero, administración corporativa',
    },
    primary: 'Principal', secondary: 'También abierto a', owns: 'Me haría cargo de',
    alsoOnX: 'También en X', certifications: 'Certificaciones',
    contactBody: 'Abierto a roles remotos o híbridos en análisis financiero, administración corporativa y SAP FI. También listo para una buena charla sobre mercados, modelos o finanzas en general.',
    bio: [
      'Soy Licenciado en Finanzas (UADE, Buenos Aires), con experiencia práctica en asesoría financiera, contabilidad y control de gestión en entornos corporativos e internacionales.',
      'Cofundar un emprendimiento de glamping en Costa Rica me enseñó a construir modelos financieros que la gente realmente usa: proyecciones de demanda, reportes de flujo de caja y estructuras de costos que sostienen una decisión real. Antes, en Grupo Lumio, aprendí la disciplina detrás de los números: documentación, conciliaciones y los procesos contables que mantienen confiables las finanzas de una empresa.',
      'Ahora estoy profundizando en SAP FI y buscando un rol remoto en análisis financiero o administración corporativa donde pueda aportar esa combinación de modelado y rigor a un equipo.',
    ],
  },
}
