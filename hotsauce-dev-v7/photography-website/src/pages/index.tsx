import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import LaughingCarousel from '@/components/LaughingCarousel'

export default function HomePage() {
  return (
    <Layout
      title="Mary Denman Photography — Headshots in Greenville &amp; Taylors, SC"
      description="Professional headshots and portraits in Greenville and Taylors, SC. Coached sessions at Taylors Mill studio or on location. Book with Mary Denman Photography."
    >
      <Hero />
      <Gallery />
      <Process />
      <Testimonials />
      <LaughingCarousel />
    </Layout>
  )
}
