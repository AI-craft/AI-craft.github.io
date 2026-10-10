import { useSearchParams } from 'react-router-dom'
import { useLang } from '../i18n'
import { products, purchase, services } from '../content'
import MailForm from '../components/MailForm'
import PageHeader from '../components/PageHeader'

export default function Purchase() {
  const { t } = useLang()
  const [params] = useSearchParams()
  const f = purchase.fields
  const preselected = products.find((p) => p.id === params.get('item'))

  const items = [
    ...products.map((p) => t(p.name)),
    ...services.items.map((s) => t(s.title)),
    t(purchase.otherService),
  ]

  const fields = [
    { key: 'item', label: f.item, type: 'select', options: items, required: true, full: true },
    { key: 'company', label: f.company, required: true },
    { key: 'name', label: f.name, required: true },
    { key: 'email', label: f.email, type: 'email', required: true },
    { key: 'phone', label: f.phone, type: 'tel' },
    { key: 'quantity', label: f.quantity, placeholder: purchase.placeholders.quantity },
    { key: 'schedule', label: f.schedule, placeholder: purchase.placeholders.schedule },
    { key: 'message', label: f.message, type: 'textarea', required: true, placeholder: purchase.placeholders.message },
  ]

  return (
    <>
      <PageHeader title={t(purchase.title)} intro={t(purchase.intro)} />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {purchase.steps.map((s, i) => (
            <li key={i} className="rounded-lg bg-slate-50 px-4 py-3 text-sm ring-1 ring-slate-200">
              <span className="font-bold text-brand-600">{i + 1}.</span> <span className="font-medium text-slate-800">{t(s)}</span>
            </li>
          ))}
        </ol>
        <MailForm
          key={t(purchase.title) + (preselected?.id || '')}
          fields={fields}
          initial={preselected ? { item: t(preselected.name) } : {}}
          subject={(v) => `${t(purchase.subject)} ${v.item || ''} - ${v.company || ''}`}
          submitLabel={purchase.submit}
        />
      </section>
    </>
  )
}
