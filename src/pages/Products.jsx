import { useLang } from '../i18n'
import { home, nav, products } from '../content'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { CtaBand } from './Home'

export default function Products() {
  const { t } = useLang()
  return (
    <>
      <PageHeader title={t(nav[1].label)} intro={t(home.productsText)} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
