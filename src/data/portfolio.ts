// Shared types keep every component typed without duplicating content.

export type Accent = 'pink' | 'cyan' | 'violet' | 'lime'
export type PillSize = 'core' | 'mid' | 'light'
export type ProjectVariant = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6'
export type OrbitIconClass = 'html' | 'css' | 'js' | 'php' | 'sql' | 'py'

export interface NavLink {
  label: string
  href: string
}

export interface NavbarContent {
  /** Rendered before the Projects dropdown. */
  primaryLinks: NavLink[]
  dropdownLabel: string
  dropdownLinks: NavLink[]
  /** Rendered after the Projects dropdown. */
  secondaryLinks: NavLink[]
  ctaLabel: string
}

export interface CallToAction {
  label: string
  href: string
}

export interface OrbitIcon {
  label: string
  className: OrbitIconClass
}

export interface HeroContent {
  eyebrow: string
  headingStart: string
  glowWord: string
  headingEnd: string
  description: string
  primaryCta: CallToAction
  secondaryCta: CallToAction
  caption: string
  orbitIcons: OrbitIcon[]
}

export interface BuildItem {
  className: 'b1' | 'b2' | 'b3' | 'b4'
  accent: Accent
  title: string
  description: string
  mutedOnDark?: boolean
}

export interface SkillPill {
  label: string
  size: PillSize
}

export interface Project {
  variant: ProjectVariant
  badge?: string
  title: string
  description: string
  tags: string[]
}

export interface ContactLink {
  label: string
  href?: string
}

export interface ContactFormContent {
  nameLabel: string
  emailLabel: string
  messageLabel: string
  submitLabel: string
  successMessage: string
  requiredMessage: string
  invalidEmailMessage: string
}

export interface ContactContent {
  availability: string
  statusHeading: string
  statusText: string
  heading: string
  text: string
  email: string
  links: ContactLink[]
  form: ContactFormContent
}

export interface PortfolioContent {
  navbar: NavbarContent
  hero: HeroContent
  build: {
    title: string
    lede: string
    items: BuildItem[]
  }
  technologies: {
    title: string
    lede: string
    pills: SkillPill[]
  }
  projects: {
    title: string
    lede: string
    items: Project[]
  }
  contact: ContactContent
  footer: {
    text: string
  }
}

// All visible copy and links live here; components only render this data.
export const portfolio: PortfolioContent = {
  navbar: {
    primaryLinks: [
      { label: 'Home', href: '#home' },
      { label: 'What I Build', href: '#build' },
      { label: 'Skills', href: '#skills' },
    ],
    dropdownLabel: 'Projects',
    dropdownLinks: [
      { label: 'Web Development', href: '#projects' },
      { label: 'Mobile Development', href: '#projects' },
      { label: 'All Projects', href: '#projects' },
    ],
    secondaryLinks: [{ label: 'Contact', href: '#contact' }],
    ctaLabel: 'Get in touch',
  },

  hero: {
    eyebrow: 'Available for internships',
    headingStart: "Hi, I'm Ace — I build ",
    glowWord: 'software',
    headingEnd: ' that solves campus-sized problems.',
    description:
      "I'm a Computer Science student at Tangub City Global College. Most of what I build starts as coursework or a capstone need — tournament systems, attendance trackers, small tools that make a real process less annoying — then turns into something I keep improving.",
    primaryCta: { label: 'See my projects', href: '#projects' },
    secondaryCta: { label: 'Open to opportunities', href: '#contact' },
    caption: 'BSCS Student · From Tangub City Global College',
    orbitIcons: [
      { label: 'HTML', className: 'html' },
      { label: 'CSS', className: 'css' },
      { label: 'JS', className: 'js' },
      { label: 'PHP', className: 'php' },
      { label: 'SQL', className: 'sql' },
      { label: 'PY', className: 'py' },
    ],
  },

  build: {
    title: 'What I build',
    lede: 'Four kinds of projects keep showing up in my work — from full systems to weekend practice builds.',
    items: [
      {
        className: 'b1',
        accent: 'pink',
        title: 'Campus systems',
        description:
          "Tournament management and instructor attendance tools built for real use at TCGC — role-based access, live data, and schedules that don't double-book.",
      },
      {
        className: 'b2',
        accent: 'violet',
        title: 'Mobile apps',
        description:
          'Flutter apps wired up to Firebase, Supabase, and SQLite — where I learn how a real backend behaves outside the classroom.',
        mutedOnDark: true,
      },
      {
        className: 'b3',
        accent: 'lime',
        title: 'Learning tools',
        description:
          'Browser games and analyzers built around compiler and grammar concepts, made to explain themselves as you play.',
      },
      {
        className: 'b4',
        accent: 'cyan',
        title: 'Small practice builds',
        description:
          'API projects, CRUD apps, and single-file experiments — the fast, low-stakes builds I use to try out something new.',
      },
    ],
  },

  technologies: {
    title: 'Technologies I work with',
    lede: 'No percentages — just what I actually reach for, sized by how often I use it.',
    pills: [
      { label: 'HTML', size: 'core' },
      { label: 'CSS', size: 'core' },
      { label: 'JavaScript', size: 'core' },
      { label: 'Flutter', size: 'mid' },
      { label: 'Firebase', size: 'mid' },
      { label: 'SQL / SQLite', size: 'mid' },
      { label: 'PHP', size: 'mid' },
      { label: 'Git', size: 'mid' },
      { label: 'Python', size: 'light' },
      { label: 'Dart', size: 'light' },
      { label: 'Supabase', size: 'light' },
      { label: 'REST APIs', size: 'light' },
    ],
  },

  projects: {
    title: 'Projects',
    lede: 'A mix of capstone work, coursework, and things I built to figure out how something works.',
    items: [
      {
        variant: 'p1',
        badge: 'Capstone project',
        title: 'TCGC Sport Hub',
        description:
          'A web-based sports tournament management and monitoring system built with Firebase and vanilla JavaScript. Handles registration, match scheduling with conflict detection, bracket generation, and live score tracking — plus a public viewer so teams can follow matches as they happen.',
        tags: ['Firebase', 'JavaScript', 'HTML/CSS'],
      },
      {
        variant: 'p2',
        title: 'Good Appearance App',
        description:
          'A modern single-page web application designed with a clean and user-friendly interface. Built to provide an organized and responsive experience, with interactive features powered by JavaScript and a structured layout using HTML and CSS.',
        tags: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        variant: 'p3',
        title: 'Instructor Attendance Monitoring System',
        description:
          'A Flutter app for tracking instructor attendance, with role-based views, an attendance history log, and profile photo uploads.',
        tags: ['Flutter', 'Firebase', 'SQLite'],
      },
      {
        variant: 'p4',
        title: 'Lexical Analyzer',
        description:
          'A coursework project that breaks source code into tokens — a first look at how a compiler reads code before it can run.',
        tags: ['Flutter', 'Compilers'],
      },
      {
        variant: 'p5',
        title: 'EduTracker',
        description:
          'An academic tracking tool for keeping coursework, grades, and deadlines in one place instead of scattered across notes.',
        tags: ['HTML', 'JavaScript'],
      },
      {
        variant: 'p6',
        title: 'Rick and Morty API Explorer',
        description:
          'A practice build for working with external data — pulling character info from the public Rick and Morty API and making it searchable.',
        tags: ['JavaScript', 'REST API'],
      },
    ],
  },

  contact: {
    availability: 'Open to opportunities',
    statusHeading:
      'A BSCS student at TCGC, building my skills through projects and hands-on experience.',
    statusText:
      'Open to internships, freelance opportunities, and collaborations on interesting projects.',
    heading: "Let's talk about your project.",
    text: 'Reach out directly — check these regularly.',
    email: 'acedumandagan0@gmail.com',
    links: [
      { label: '✉ acedumandagan0@gmail.com', href: 'mailto:acedumandagan0@gmail.com' },
      { label: '📍 Tangub City, Philippines' },
    ],
    form: {
      nameLabel: 'Your name',
      emailLabel: 'Email address',
      messageLabel: 'Message',
      submitLabel: 'Send message',
      successMessage: 'Draft opened in your email app — send it to reach me.',
      requiredMessage: 'Please fill in all fields.',
      invalidEmailMessage: 'Enter a valid email address.',
    },
  },

  footer: {
    text: '© 2026 Ace F. Dumandagan. All rights reserved.',
  },
}
