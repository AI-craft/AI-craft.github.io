import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { ui } from '../content'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="mx-auto max-w-6xl px-4 py-32 text-center sm:px-6">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <p className="mt-4 text-lg text-slate-600">{t(ui.notFound)}</p>
      <Link to="/" className="mt-8 inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">{t(ui.goHome)}</Link>
    </section>
  )
}
