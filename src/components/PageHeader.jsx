import hero from '../assets/hero.jpg'

export default function PageHeader({ title, intro }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <img src={hero} alt="" className="absolute inset-0 size-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{intro}</p>}
      </div>
    </section>
  )
}
