import Layout from '@/components/Layout'
import ServicePage from '@/components/ServicePage'

// As with the corporate page, every factual claim traces to copy that is
// already on the site: studio address and character from the FAQ, coaching
// approach from the About section, prices and payment methods from /pricing.
export default function DoctorHeadshotsPage() {
  return (
    <Layout
      title="Doctor & Healthcare Headshots in Greenville, SC — Mary Denman Photography"
      description="Headshots for physicians, dentists and healthcare practices in Greenville and Taylors, SC. Studio sessions $125 + $125 per image; on location at your practice $600 onsite + $125 per image."
    >
      <ServicePage
        eyebrow="Doctor & Healthcare Headshots"
        h1="Doctor Headshots in Greenville, SC"
        lede="A photograph patients see before they ever meet you — on your practice website, a hospital directory, or a referral listing."
        photo={{
          src: '/images/mary-denman-doctor-headshot-greenville-sc.jpg',
          alt: 'Doctor headshot photographed by Mary Denman in Greenville SC',
        }}
        sections={[
          {
            heading: 'Your headshot is doing work before you walk in the room',
            paragraphs: [
              'Your headshot is often the first impression you make — on a practice website, a directory listing, press materials, and more. For a physician that first impression is doing something specific: a patient deciding whether they feel comfortable putting themselves in your hands.',
              'That is a different job from an executive portrait. The aim is a picture that reads as credible and approachable at the same time, rather than one that leans hard on either.',
            ],
          },
          {
            heading: 'Two ways to do the session',
            paragraphs: [
              'My studio is at the historic Taylors Mill, 250 Mill Street BL1225, Taylors, SC 29687 — a beautiful, creative space with great natural light, about fifteen minutes from most of Greenville. You can have clean, modern headshots there, or images that use the original settings of the 1924 Mill as your background.',
              'If getting away from the practice is the problem, I also photograph on location throughout the Greenville, SC area. For a practice with several physicians and staff, that is usually the practical choice — I bring the setup to you and work through everyone between appointments.',
            ],
          },
          {
            heading: 'If you hate having your photo taken',
            paragraphs: [
              'Plenty of people who are entirely calm in a procedure room go stiff the moment a camera appears. I coach every client through the session — no posing experience required — and most people are surprised by how comfortable it turns out to be.',
              'You do not need to arrive knowing what to do with your hands. That is my part of the job.',
            ],
          },
          {
            heading: 'Practical details',
            paragraphs: [
              'For an individual session at the studio, the fee is $125 and covers the shoot. Images are $125 each, so you take exactly the number you need — most clients choose two to five, which is usually enough for a practice bio, a directory listing, and LinkedIn.',
              'If I come to your practice instead, the fee is $600 for up to three hours onsite, and images stay at $125 each. That is usually the sensible choice once more than one or two people need photographing.',
              'Wear something that makes you feel confident and professional; solid colors photograph better than busy patterns. Bring a couple of options, including a white coat or scrubs if you want a version in them. I accept cash, credit card, Venmo, Cash App, and PayPal.',
            ],
          },
        ]}
        gallery={[
          { src: '/images/gallery/mary-denman-doctor-headshot-greenville-sc.jpg', alt: 'Physician headshot in Greenville SC', label: 'Physician' },
          { src: '/images/gallery/mary-denman-professional-headshot-taylors-sc.jpg', alt: 'Professional headshot at Taylors Mill studio', label: 'Professional' },
          { src: '/images/gallery/mary-denman-business-headshot-greenville-sc.jpg', alt: 'Healthcare professional headshot in Greenville SC', label: 'Practice' },
        ]}
        closing="Tell me whether it is just you or the whole practice, and whether you would rather come to Taylors Mill or have me come to you."
      />
    </Layout>
  )
}
