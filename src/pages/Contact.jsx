import { useLang } from '../i18n'
import { company, contact } from '../content'
import Icon from '../components/Icon'
import MailForm from '../components/MailForm'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const { t } = useLang()
  const f = contact.fields

  const fields = [
    { key: 'type', label: f.type, type: 'select', options: contact.types.map(t), required: true, full: true },
    { key: 'name', label: f.name, required: true },
    { key: 'company', label: f.company },
    { key: 'email', label: f.email, type: 'email', required: true },
    { key: 'phone', label: f.phone, type: 'tel' },
    { key: 'message', label: f.message, type: 'textarea', required: true },
  ]

  return (
    <>
      <PageHeader title={t(contact.title)} intro={t(contact.intro)} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <MailForm
          key={t(contact.title)}
          fields={fields}
          subject={(v) => `${t(contact.subject)} ${v.type || ''} - ${v.name || ''}`}
          submitLabel={contact.submit}
        />
        <aside className="space-y-6 lg:self-start">
          <h2 className="text-xl font-bold text-white">{t(contact.infoTitle)}</h2>
          <div className="flex gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400"><Icon name="mail" className="size-5" /></div>
            <div>
              <p className="text-sm text-slate-400">{t(contact.emailLabel)}</p>
              <a href={`mailto:${company.email}`} className="font-medium text-white hover:text-brand-400">{company.email}</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400"><Icon name="pin" className="size-5" /></div>
            <div>
              <p className="text-sm text-slate-400">{t(contact.addressLabel)}</p>
              <p className="font-medium leading-relaxed text-white">{t(company.address)}</p>
              <a href={company.mapUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-brand-400 hover:text-brand-300">
                {t(contact.mapLink)} →
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
