import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = (msg) => `https://wa.me/918102064727?text=${encodeURIComponent(msg)}`

export const metadata = {
  title: 'About Studio',
  description: 'Learn about Wokl Music Studio — our story, vision, and what makes us the most creative studio space in the city.',
}

const usps = [
  { icon: '🎚️', title: 'Industry-Grade Equipment', desc: 'We use professional-grade consoles, monitors, and microphones used by top artists worldwide.' },
  { icon: '🔇', title: 'Acoustic Perfection', desc: 'Fully soundproofed recording booths with precision acoustic treatment for crystal-clear sound.' },
  { icon: '🌙', title: 'Cinematic Atmosphere', desc: 'Moody, dramatic lighting and curated décor that inspires creativity the moment you walk in.' },
  { icon: '⚡', title: 'Flexible Booking', desc: 'Hourly, half-day, and full-day rates. No long contracts — just pure creative freedom.' },
  { icon: '🎓', title: 'Experienced Team', desc: 'Our studio engineers and coordinators have 10+ years of combined professional experience.' },
  { icon: '📱', title: 'WhatsApp-First', desc: 'Instant bookings and queries handled personally on WhatsApp — no bots, no wait times.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <span className="section-label fade-up">✦ Our Story</span>
        <h1 className="fade-up delay-1">Built for <span className="gradient-text">Creators</span>,<br />By Creators</h1>
        <p className="fade-up delay-2">Wokl Music Studio was born from a simple idea — every artist deserves access to a world-class creative space without the burden of ownership.</p>
      </div>

      {/* Brand Story */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span className="section-label">✦ The Beginning</span>
            <h2 style={{ marginBottom: 20 }}>A Studio <span className="gradient-text">Born from Passion</span></h2>
            <p style={{ marginBottom: 18 }}>Founded in 2019, Wokl Music Studio started as a humble recording space with big dreams. We saw talented musicians struggling to access professional-grade equipment and spaces, so we built a solution — a premium, rental-based creative hub open to all.</p>
            <p style={{ marginBottom: 18 }}>Today, Wokl is home to recording artists, bands, music producers, photographers, videographers, and creative minds from across the city. Our space has witnessed the birth of countless albums, music videos, and viral content.</p>
            <p>We believe that a great environment unlocks great work. That is why every corner of Wokl is designed with intention — to inspire, motivate, and elevate your creative output.</p>
            <a href={WA("Hi Wokl! I'd like to visit the studio and see the space.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 32 }}>Book a Studio Tour</a>
          </div>
          <div style={{ position: 'relative', height: 500, borderRadius: 20, overflow: 'hidden' }}>
            <Image src="/images/recording_session.png" alt="Inside Wokl Studio" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),transparent)' }} />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="section-label">✦ Our Vision</span>
          <h2 style={{ marginBottom: 20 }}>Democratising <span className="gradient-text">Creative Access</span></h2>
          <div className="divider" />
          <p style={{ fontSize: '1.12rem', lineHeight: 1.9, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            "We envision a world where every artist — regardless of budget — has access to the tools and spaces they need to make their best work. Wokl is not just a studio; it is a creative community, a launching pad, and a home for the next generation of music and visual artists."
          </p>
          <p style={{ marginTop: 20, color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>— Wokl Music Studio Founders</p>
        </div>
      </section>

      {/* USPs */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Why Choose Wokl</span>
            <h2>What Makes Us <span className="gradient-text">Different</span></h2>
            <p>We are not just a rental space — we are a creative partner committed to your success.</p>
          </div>
          <div className="grid-3">
            {usps.map(({ icon, title, desc }) => (
              <div key={title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{icon}</div>
                <h3 style={{ marginBottom: 10, fontSize: '1.15rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Environment */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ The Space</span>
            <h2>Step Into Our <span className="gradient-text">World</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, height: 420 }}>
            {['/images/hero_studio.png','/images/mixing_console.png','/images/photoshoot_space.png'].map((src, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
                <Image src={src} alt="Studio Space" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,7,15,0.5),transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="cta-box">
            <span className="section-label">✦ Visit Us</span>
            <h2>Come Experience <span className="gradient-text">Wokl</span> First-Hand</h2>
            <p>Book a studio tour or your first session — we promise you will not want to leave.</p>
            <div className="cta-buttons">
              <a href={WA("Hi Wokl! I'd love to book a session at your studio. Please share details.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Book a Session
              </a>
              <Link href="/services" className="btn btn-outline">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}.about-img{height:300px!important;}}`}</style>
    </>
  )
}
