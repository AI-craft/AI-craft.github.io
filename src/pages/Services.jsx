import { useLang } from '../i18n'
import { nav, services } from '../content'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import { CtaBand } from './Home'

export default function Services() {
  const { t } = useLang()
  return (
    <>
      <PageHeader title={t(nav[2].label)} intro={t(services.intro)} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.items.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                <Icon name={s.icon} />
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">{t(s.title)}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{t(s.text)}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-200">
                    <Icon name="check" className="size-4 text-brand-400" /> {t(pt)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-2 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white">{t(services.processTitle)}</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-5">
            {services.process.map((step, i) => (
              <li key={i} className="rounded-xl bg-surface p-5 ring-1 ring-white/10">
                <span className="text-sm font-bold text-brand-400">0{i + 1}</span>
                <p className="mt-1 font-semibold text-white">{t(step)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-white">{t(services.casesTitle)}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.cases.map((c, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-xl border border-white/10">
              <div className="h-48 overflow-hidden bg-navy-900">
                <img src={c.image} alt="" className="size-full object-cover object-top" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wide text-brand-400 uppercase">{t(c.tag)}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{t(c.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{t(c.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
