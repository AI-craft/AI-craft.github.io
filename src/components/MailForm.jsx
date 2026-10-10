import { useState } from 'react'
import { useLang } from '../i18n'
import { company, mailForm } from '../content'

// GitHub Pages has no server, so the form composes an email in the visitor's mail app.
// fields: [{ key, label, type: 'text'|'email'|'tel'|'select'|'textarea', options, required, placeholder, full }]
export default function MailForm({ fields, initial = {}, subject, submitLabel }) {
  const { t } = useLang()
  const [values, setValues] = useState(initial)
  const [copied, setCopied] = useState(false)
  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = fields.map((f) => `■ ${t(f.label)}\n${values[f.key] || '-'}`).join('\n\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject(values))}&body=${encodeURIComponent(body)}`
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(company.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  const input = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.key} className={f.full || f.type === 'textarea' ? 'sm:col-span-2' : ''}>
          <span className="mb-1.5 block text-sm font-medium text-slate-700">
            {t(f.label)}
            {f.required && <span className="ml-1 text-brand-600">*</span>}
          </span>
          {f.type === 'select' ? (
            <select className={input} value={values[f.key] || ''} onChange={set(f.key)} required={f.required}>
              <option value="" disabled>—</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : f.type === 'textarea' ? (
            <textarea className={`${input} min-h-36`} value={values[f.key] || ''} onChange={set(f.key)} required={f.required} placeholder={t(f.placeholder)} />
          ) : (
            <input className={input} type={f.type || 'text'} value={values[f.key] || ''} onChange={set(f.key)} required={f.required} placeholder={t(f.placeholder)} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 sm:w-auto">
          {t(submitLabel)}
        </button>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">{t(mailForm.note)}</p>
        <p className="mt-2 flex items-center gap-3 text-sm">
          <a href={`mailto:${company.email}`} className="font-medium text-brand-600">{company.email}</a>
          <button type="button" onClick={copy} className="rounded border border-slate-300 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-50">
            {t(copied ? mailForm.copied : mailForm.copy)}
          </button>
        </p>
      </div>
    </form>
  )
}
