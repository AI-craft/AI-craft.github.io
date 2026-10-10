import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { home, products, services, ui } from '../content'
import hero from '../assets/hero.jpg'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { t } = useLang()
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <img src={hero} alt="" className="absolute inset-0 size-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold tracking-widest text-brand-500 uppercase">{t(home.heroEyebrow)}</p>
          <h1 className="mt-4 text-4xl leading-tight font-bold whitespace-pre-line text-white sm:text-5xl lg:text-6xl">{t(home.heroTitle)}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t(home.heroText)}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-500">
              {t(ui.allProducts)} <Icon name="arrow" className="size-4" />
            </Link>
            <Link to="/contact" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {t(ui.contactUs)}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{t(home.aboutTitle)}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{t(home.aboutText)}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {home.highlights.map((h, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-2xl font-bold text-brand-600">{t(h.value)}</p>
                <p className="mt-1 text-sm text-slate-600">{t(h.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900">{t(home.capabilitiesTitle)}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.items.map((s, i) => (
              <Link key={i} to="/services" className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-5 font-semibold text-slate-900">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(s.text)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{t(home.productsTitle)}</h2>
            <p className="mt-3 text-slate-600">{t(home.productsText)}</p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700">
            {t(ui.allProducts)} <Icon name="arrow" className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-4 sm:px-6">
          <h2 className="text-lg font-bold text-slate-900">{t(home.industriesTitle)}</h2>
          {home.industries.map((ind, i) => (
            <span key={i} className="flex items-center gap-2 text-slate-600">
              <Icon name="check" className="size-4 text-brand-600" /> {t(ind)}
            </span>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function CtaBand() {
  const { t } = useLang()
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-navy-800 px-8 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t(home.ctaTitle)}</h2>
        <p className="mt-3 text-brand-100">{t(home.ctaText)}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/purchase" className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">{t(ui.requestQuote)}</Link>
          <Link to="/contact" className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">{t(ui.contactUs)}</Link>
        </div>
      </div>
    </section>
  )
}
