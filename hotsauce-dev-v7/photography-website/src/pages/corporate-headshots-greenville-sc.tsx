import Layout from '@/components/Layout'
import ServicePage from '@/components/ServicePage'

// Copy is drawn from Mary's existing words on the site — the About bio, the
// FAQ answers, and the pricing page — expanded for this audience. No claim
// here is invented: the studio details, session structure, payment methods
// and prices all match what /pricing and the FAQ already say.
export default function CorporateHeadshotsPage() {
  return (
    <Layout
      title="Corporate Headshots in Greenville, SC — Mary Denman Photography"
      description="Corporate headshots for Greenville and Taylors, SC teams. I photograph at my Taylors Mill studio or bring the studio to your office, and coach everyone through it. $125 session + $125 per image."
    >
      <ServicePage
        eyebrow="Corporate Headshots"
        h1="Corporate Headshots in Greenville, SC"
        lede="Team photos that look like they belong together — shot at my Taylors Mill studio, or at your office anywhere in the Greenville area."
        photo={{
          src: '/images/mary-denman-corporate-headshot-greenville-sc.jpg',
          alt: 'Corporate headshot photographed by Mary Denman in Greenville SC',
        }}
        sections={[
          {
            heading: 'I can bring the studio to your office',
            paragraphs: [
              'Getting an entire team to the same place at the same time is usually the hardest part of a corporate headshot day. So I offer on-location sessions for corporate teams and offices throughout the Greenville, SC area — I arrive with lighting and backdrop, set up in a conference room or any space with a bit of room to work, and photograph everyone in turn.',
              'The alternative is my studio at the historic Taylors Mill, at 250 Mill Street BL1225 in Taylors. It is a creative space with great natural light, and it gives you two very different looks: clean and modern against a simple background, or images that use the original settings of the 1924 Mill behind you.',
            ],
          },
          {
            heading: 'Everyone gets coached, including the person dreading it',
            paragraphs: [
              'On every team there are one or two people who genuinely do not want to be photographed. That is my specialty. I coach every client through the session and no posing experience is required — most people are surprised by how comfortable and fun it turns out to be.',
              'That matters more for a company than it does for an individual. A team page where half the people look tense and half look relaxed reads as inconsistent. Coaching everyone through the same process is what makes the finished set hang together.',
            ],
          },
          {
            heading: 'What it costs',
            paragraphs: [
              'The session fee is $125 and covers the shoot itself. Images are priced at $125 each, so each person chooses exactly how many they want — most clients select two to five. For a team booking, tell me roughly how many people are involved and I will put together a quote.',
              'I accept cash, credit card, Venmo, Cash App, and PayPal, and payment is due at the time of the session.',
            ],
          },
          {
            heading: 'What to tell your team to wear',
            paragraphs: [
              'Solid colors photograph better than busy patterns, and everyone should wear something that makes them feel confident and professional. Bringing a couple of options is a good idea — we can choose together on the day.',
              'If your company has a dress code or brand colors you want reflected, send them over before the session and I will keep them in mind while we shoot.',
            ],
          },
        ]}
        gallery={[
          { src: '/images/gallery/mary-denman-corporate-headshots-greenville-sc.jpg', alt: 'Corporate team headshots in Greenville SC', label: 'Office Team' },
          { src: '/images/gallery/mary-denman-business-headshot-greenville-sc.jpg', alt: 'Business headshot in Greenville SC', label: 'Business' },
          { src: '/images/mary-denman-corporate-headshot-greenville-sc-2.jpg', alt: 'Corporate headshot at Taylors Mill studio', label: 'Corporate' },
        ]}
        closing="Whether it is one executive or forty people across three departments, I would rather hear what you actually need before quoting anything. Tell me the team size, where you are, and roughly when."
      />
    </Layout>
  )
}
