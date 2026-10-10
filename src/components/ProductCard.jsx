import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { ui } from '../content'
import Icon from './Icon'

export default function ProductCard({ product: p }) {
  const { t } = useLang()
  return (
    <Link to={`/products/${p.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-800 to-brand-700">
        {p.images[0] ? (
          <img src={p.images[0]} alt="" className="size-full object-cover object-top opacity-90 transition group-hover:scale-105" />
        ) : (
          <Icon name={p.icon} className="size-16 text-white/80" />
        )}
        {p.comingSoon && (
          <span className="absolute top-3 right-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-bold text-navy-900">{t(ui.comingSoon)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{t(p.name)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{t(p.tagline)}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-400">
          {t(ui.learnMore)} <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
