import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'
import { company, nav } from '../content'
import logo from '../assets/logo.png'
import Icon from './Icon'

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center rounded-full border border-white/10 p-0.5 text-xs font-semibold">
      {['ko', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 transition ${lang === l ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white'}`}
        >
          {l === 'ko' ? '한국어' : 'EN'}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition ${isActive ? 'text-brand-400' : 'text-slate-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="AICraft" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>{t(n.label)}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-4 py-3 md:hidden">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={(s) => `rounded-lg px-3 py-2.5 ${linkClass(s)}`}>
              {t(n.label)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white">{t(company.name)}</p>
          <p className="mt-3 text-sm leading-relaxed">{t(company.address)}</p>
          <p className="mt-1 text-sm">
            E-mail: <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm md:justify-self-end">
          {nav.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-white">{t(n.label)}</Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">ⓒ {new Date().getFullYear()} AICraft Inc. All rights reserved.</div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
