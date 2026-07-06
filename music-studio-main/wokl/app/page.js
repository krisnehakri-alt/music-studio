import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { instrumentsData } from './data/instruments'

const WA = (msg) => `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`

export const metadata = {
  title: 'Wokl Music Studio — Premium Recording & Creative Studio',
  description: 'Premium rental-based recording studio, instrument hire & creative shoot space. Book via WhatsApp.',
}

const services = [
  { icon: '🎙️', title: 'Music Recording', desc: 'Professional sessions with top-tier mics, acoustic treatment & mixing console. Capture your sound perfectly.', href: '/services' },
  { icon: '🎸', title: 'Instrument Rentals', desc: 'Access 50+ premium instruments — guitars, keys, drums, violins and more — available by the hour or day.', href: '/services' },
  { icon: '📸', title: 'Photo & Video Shoots', desc: 'Cinematic studio space with professional lighting rigs and creative ambiance for music videos and portraits.', href: '/services' },
]

const testimonials = [
  { stars: 5, text: '"Incredible studio! The acoustics are perfect and the instruments are top quality. Recorded my debut EP here and could not be happier."', name: 'Arjun Rao', role: 'Independent Artist', initials: 'AR' },
  { stars: 5, text: '"Booked the photoshoot space for a music video — the lighting setup was exactly what we needed. Very professional team!"', name: 'Priya Sharma', role: 'Music Video Director', initials: 'PS' },
  { stars: 5, text: '"Rented a full drum kit and keyboard for a week. Excellent condition, fair pricing, and the studio vibe is unmatched."', name: 'Karan Mehta', role: 'Drummer & Producer', initials: 'KM' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero_studio.png" alt="Wokl Music Studio" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(7,7,15,0.88) 0%,rgba(15,5,30,0.78) 50%,rgba(7,7,15,0.92) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '140px 24px 80px', width: '100%' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: 50, padding: '7px 18px', fontFamily: 'var(--font-heading)', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-purple-light)', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent-gold)', borderRadius: '50%', animation: 'pulseWa 1.5s ease-in-out infinite' }} />
            Now Accepting Bookings
          </div>
          <h1 className="fade-up delay-1" style={{ maxWidth: 680, marginBottom: 22 }}>
            Where Sound<br /><span className="gradient-text">Meets Vision.</span>
          </h1>
          <p className="fade-up delay-2" style={{ maxWidth: 500, fontSize: '1.08rem', marginBottom: 38, color: 'rgba(148,163,184,0.92)' }}>
            Premium rental-based recording studio, instrument hire & creative shoot space — all in one cinematic environment.
          </p>
          <div className="fade-up delay-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary">Explore Services ↗</Link>
            <a href={WA("Hi Wokl Music Studio! I'd like to enquire about bookings and availability.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
          {/* Stats */}
          <div className="fade-up delay-4" style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}>
            {[['200+','Sessions Completed'],['50+','Instruments Available'],['98%','Client Satisfaction'],['5 yrs','In the Industry']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 800, background: 'linear-gradient(135deg,var(--accent-purple-light),var(--accent-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{num}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 1 }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,var(--accent-purple),transparent)', animation: 'pulseWa 1.8s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── Featured Instruments ── */}
      <section style={{ padding: '96px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Equipment Rental</span>
            <h2>Rent <span className="gradient-text">Premium Gear</span></h2>
            <p>From vintage guitars to industry-standard microphones, rent what you need, when you need it.</p>
          </div>
          <div className="grid-3">
            {instrumentsData.slice(0, 3).map(inst => (
              <div key={inst.id} className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: 240, overflow: 'hidden' }}>
                  <Image 
                    src={inst.image} 
                    alt={inst.name} 
                    fill 
                    unoptimized
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  {/* Price display removed as per request */}

                </div>
                
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 8 }}>{inst.category}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 12 }}>{inst.name}</h3>
                  <p style={{ fontSize: '0.85rem', marginBottom: 24, flexGrow: 1, color: 'var(--text-muted)' }}>{inst.shortDesc}</p>
                  
                  <Link href={`/equipment/${inst.slug}`} className="btn btn-outline" style={{ justifyContent: 'center', padding: '10px' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/studio-equipment" className="btn btn-primary">View All Equipment →</Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg,var(--bg-primary) 0%,var(--bg-secondary) 100%)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ What We Offer</span>
            <h2>Everything Your <span className="gradient-text">Creative Vision</span> Needs</h2>
            <p>From recording sessions to instrument rentals and shoot spaces — all under one roof.</p>
          </div>
          <div className="grid-3">
            {services.map(({ icon, title, desc, href }) => (
              <div key={title} className="card" style={{ cursor: 'pointer' }}>
                <div style={{ width: 54, height: 54, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(245,158,11,0.1))', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 20 }}>{icon}</div>
                <h3 style={{ marginBottom: 10, fontSize: '1.2rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{desc}</p>
                <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, fontFamily: 'var(--font-heading)', fontSize: '0.84rem', fontWeight: 600, color: 'var(--accent-purple-light)', transition: 'gap 0.2s' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Gallery</span>
            <h2>Inside <span className="gradient-text">Wokl Studio</span></h2>
            <p>A glimpse into our world — where creativity comes alive every session.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '280px 280px', gap: 14 }}>
            {[
              { src: '/images/hero_studio.png', alt: 'Studio Interior', span: true },
              { src: '/images/recording_session.png', alt: 'Recording Session' },
              { src: '/images/mixing_console.png', alt: 'Mixing Console' },
              { src: '/images/instruments_showcase.png', alt: 'Instruments' },
              { src: '/images/gallery_band.png', alt: 'Band Session' },
            ].map(({ src, alt, span }, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', gridRow: span ? '1 / 3' : undefined }}>
                <Image src={src} alt={alt} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,7,15,0.65) 0%,transparent 55%)', opacity: 0.7 }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/gallery" className="btn btn-outline">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Client Love</span>
            <h2>What Our <span className="gradient-text">Artists Say</span></h2>
          </div>
          <div className="grid-3">
            {testimonials.map(({ stars, text, name, role, initials }) => (
              <div key={name} className="testimonial-card">
                <div className="stars">{'★'.repeat(stars)}</div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{initials}</div>
                  <div><div className="author-name">{name}</div><div className="author-role">{role}</div></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/testimonials" className="btn btn-outline">Read All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="cta-box">
            <span className="section-label">✦ Ready to Create?</span>
            <h2>Start Your <span className="gradient-text">Creative Journey</span> Today</h2>
            <p>Reach out on WhatsApp — we reply within minutes to plan your perfect session.</p>
            <div className="cta-buttons">

              <Link href="/contact" className="btn btn-outline">View Contact Info</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
