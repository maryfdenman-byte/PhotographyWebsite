import Layout from '@/components/Layout'
import AboutSection from '@/components/AboutSection'

export default function AboutPage() {
  return (
    <Layout
      title="About Mary Denman — Headshot Photographer Greenville SC"
      description="Meet Mary Denman, a professional headshot photographer based in Taylors, SC. Studio at historic Taylors Mill. Serving Greenville, SC and surrounding areas."
    >
      <div className="pt-20">
        <AboutSection />
      </div>
    </Layout>
  )
}
