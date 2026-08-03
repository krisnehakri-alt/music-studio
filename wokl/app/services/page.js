import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = (msg) => `https://wa.me/918102064727?text=${encodeURIComponent(msg)}`

export const metadata = {
  title: 'Services',
  description: 'Music recording, instrument rentals, photoshoots & video shoots at Wokl Music Studio. All bookable via WhatsApp.',
}

const services = [
  {
    icon: '🎙️', title: 'Music Recording Sessions', img: '/images/recording_session.png',
    desc: 'Step into our professionally treated recording booth equipped with industry-grade equipment. Whether you are laying down your first track or producing a full album, our space delivers crystal-clear, broadcast-quality sound.',
    features: ['Condenser & Dynamic Microphones', 'Acoustic Treatment & Sound Isolation', '32-channel Digital Mixing Console', 'Studio Monitor Speakers', 'DAW (Logic Pro / Pro Tools)', 'Session Engineer Available on Request'],
    wa: "Hi Wokl! I'd like to book a music recording session. Please share your rates and availability.",
    tag: 'Most Popular',
  },
  {
    icon: '🎸', title: 'Instrument Rentals', img: '/images/instruments_showcase.png',
    desc: 'Choose from our extensive collection of 50+ premium instruments. Perfect for artists who need equipment for a session, event, or practice without the investment of ownership.',
    features: ['Electric & Acoustic Guitars', 'Bass Guitars', 'Drum Kits (Electronic & Acoustic)', 'Keyboards & MIDI Controllers', 'Violins, Cellos & Strings', 'Microphones & PA Systems'],
    internalLink: '/studio-equipment',
    internalLinkLabel: 'Browse Rental Instruments',
    tag: null,
  },
  {
    icon: '📸', title: 'Photoshoot & Video Shoot Space', img: '/images/photoshoot_space.png',
    desc: 'Our cinematic studio space is the perfect backdrop for music videos, album cover shoots, brand content, and creative portraits. With dramatic lighting rigs and versatile setup options, every frame tells a story.',
    features: ['Professional Studio Lighting Rigs', 'Multiple Backdrops & Sets', 'Neon Accent Lighting', 'Full HD & 4K Videography Setup', 'Green Screen Available', 'Makeup & Styling Area'],
    wa: "Hi Wokl! I'd like to book the photoshoot/video shoot space. Please share rates and available slots.",
    tag: null,
  },
]

const pricing = [
  { plan: 'Hourly', price: '₹500', desc: 'Perfect for quick sessions and single instrument rentals.', features: ['1 Hour Studio Access', '1 Instrument Rental', 'Basic Equipment Included', 'WhatsApp Support'], popular: false },
  { plan: 'Half Day', price: '₹1,800', desc: 'Ideal for recording sessions, rehearsals and small shoots.', features: ['4 Hours Studio Access', 'Up to 3 Instruments', 'Full Equipment Suite', 'Session Coordinator', 'WhatsApp Support'], popular: true },
  { plan: 'Full Day', price: '₹3,200', desc: 'Complete creative day — record, shoot, and create freely.', features: ['8 Hours Studio Access', 'Unlimited Instruments', 'Full Equipment Suite', 'Dedicated Engineer', 'Priority WhatsApp Support', 'Free Session Recording'], popular: false },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <div className="page-hero">
        <span className="section-label fade-up">✦ Our Services</span>
        <h1 className="fade-up delay-1">Creative <span className="gradient-text">Services</span><br />Tailored for You</h1>
        <p className="fade-up delay-2">Everything you need for professional music and visual content creation — available to rent, no ownership required.</p>
      </div>

      {/* Services Detail */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 80 }}>
          {services.map(({ icon, title, img, desc, features, wa, internalLink, internalLinkLabel, tag }, idx) => (
            <div key={title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', direction: idx % 2 !== 0 ? 'rtl' : 'ltr' }}>
              <div style={{ position: 'relative', height: 420, borderRadius: 20, overflow: 'hidden' }}>
                <Image src={img} alt={title} fill style={{ objectFit: 'cover', direction: 'ltr' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(139,92,246,0.18),transparent)' }} />
                {tag && (
                  <div style={{ position: 'absolute', top: 20, left: 20, background: 'linear-gradient(135deg,var(--accent-purple),var(--accent-purple-dark))', borderRadius: 50, padding: '6px 16px', fontFamily: 'var(--font-heading)', fontSize: '0.76rem', fontWeight: 700, color: '#fff', direction: 'ltr' }}>{tag}</div>
                )}
              </div>
              <div style={{ direction: 'ltr' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 14 }}>{icon}</div>
                <h2 style={{ marginBottom: 16, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>{title}</h2>
                <p style={{ marginBottom: 24, lineHeight: 1.85 }}>{desc}</p>
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 32 }}>
                  {features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-purple-light)', fontSize: '0.7rem' }}>✦</span> {f}
                    </li>
                  ))}
                </ul>
                {wa ? (
                  <a href={WA(wa)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Enquire on WhatsApp
                  </a>
                ) : (
                  <Link href={internalLink || '/'} className="btn btn-primary">
                    {internalLinkLabel || 'Learn More'}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing section removed as per request */}


      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="cta-box">
            <span className="section-label">✦ Let's Create</span>
            <h2>Got Questions? <span className="gradient-text">We're Here</span></h2>
            <p>Reach us instantly on WhatsApp and we will help you find the perfect package for your project.</p>
            <div className="cta-buttons">
              <a href={WA("Hi Wokl! I have some questions about your services and pricing.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Ask on WhatsApp</a>
              <Link href="/studio-equipment" className="btn btn-outline">View Equipment →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:768px){.services-detail > div{grid-template-columns:1fr!important;direction:ltr!important;}}`}</style>
    </>
  )
}
