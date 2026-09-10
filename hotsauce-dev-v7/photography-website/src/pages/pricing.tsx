import Layout from '@/components/Layout'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'

export default function PricingPage() {
  return (
    <Layout
      title="Pricing — Mary Denman Photography Greenville SC"
      description="Individual headshots: $125 session fee + $125 per image. Corporate on-location: $600 onsite + $125 per image. Coaching included. Studio at Taylors Mill, Taylors SC."
    >
      <div className="pt-20">
        <PricingSection />
        <FAQ />
      </div>
    </Layout>
  )
}
