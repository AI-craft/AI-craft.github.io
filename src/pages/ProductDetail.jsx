import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { products, ui } from '../content'
import Icon from '../components/Icon'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { id } = useParams()
  const { t } = useLang()
  const p = products.find((x) => x.id === id)
  if (!p) return <NotFound />

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Link to="/products" className="text-sm text-slate-400 hover:text-white">{t(ui.backToProducts)}</Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden size-14 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-500 sm:flex">
              <Icon name={p.icon} className="size-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">{t(p.name)}</h1>
              <p className="mt-3 text-lg text-brand-100">{t(p.tagline)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-slate-700">{t(p.summary)}</p>

          <h2 className="mt-12 text-xl font-bold text-slate-900">{t(ui.features)}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {p.features.map((f, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-slate-200 p-4 text-sm leading-relaxed">
                <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {t(f)}
              </li>
            ))}
          </ul>

          {p.images.length > 0 && (
            <div className="mt-12 grid gap-4">
              {p.images.map((src, i) => (
                <img key={i} src={src} alt={`${t(p.name)} ${i + 1}`} className="w-full rounded-xl border border-slate-200 bg-slate-50" loading="lazy" />
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold tracking-wide text-slate-500 uppercase">{t(ui.tech)}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((x) => (
                <span key={x} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">{x}</span>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-semibold tracking-wide text-slate-500 uppercase">{t(ui.useCases)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t(p.useCases)}</p>
          </div>
          <Link to={`/purchase?item=${p.id}`} className="block rounded-lg bg-brand-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-700">
            {t(ui.requestQuote)}
          </Link>
          <Link to="/contact" className="block rounded-lg border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50">
            {t(ui.contactUs)}
          </Link>
        </aside>
      </section>
    </>
  )
}
