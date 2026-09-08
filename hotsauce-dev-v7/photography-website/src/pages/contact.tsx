import Layout from '@/components/Layout'
import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <Layout
      title="Contact Mary Denman Photography — Book a Headshot Session"
      description="Book a headshot session with Mary Denman Photography in Taylors and Greenville, SC. Studio at Taylors Mill. Call (864) 380-4905 or email maryfdenman@gmail.com."
    >
      <div className="pt-20">
        <ContactSection />
      </div>
    </Layout>
  )
}
