import Layout from '@/components/Layout'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'

export default function PricingPage() {
  return (
    <Layout
      title="Pricing — Mary Denman Photography Greenville SC"
      description="Headshot session fee $125 + $125 per image. Professional coaching included. Studio at Taylors Mill, Taylors SC. Accepts cash, credit card, Venmo, Cash App, PayPal."
    >
      <div className="pt-20">
        <PricingSection />
        <FAQ />
      </div>
    </Layout>
  )
}
