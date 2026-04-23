import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = (msg) => `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`

export const metadata = {
  title: 'Testimonials',
  description: 'Read what artists, musicians and creators say about their experience at Wokl Music Studio.',
}

const testimonials = [
  { stars: 5, text: 'Incredible studio! The acoustics are perfect and the instruments are top quality. I recorded my debut EP here and couldn\'t be happier. The team is super professional and accommodating.', name: 'Arjun Rao', role: 'Independent Artist', initials: 'AR', tag: 'Recording' },
  { stars: 5, text: 'Booked the photoshoot space for a music video — the lighting setup and cinematic ambiance was exactly what we needed. Very professional team and great value for money!', name: 'Priya Sharma', role: 'Music Video Director', initials: 'PS', tag: 'Shoots' },
  { stars: 5, text: 'Rented a full drum kit and keyboard for a week-long rehearsal. Excellent condition, fair pricing, and the studio vibe is absolutely unmatched. Will definitely be back.', name: 'Karan Mehta', role: 'Drummer & Producer', initials: 'KM', tag: 'Rental' },
  { stars: 5, text: 'As a voice-over artist, I needed a quiet, treated booth with good mics. Wokl delivered on all fronts. The Neumann U87 paired with their console is simply outstanding.', name: 'Sneha Iyer', role: 'Voice-Over Artist', initials: 'SI', tag: 'Recording' },
  { stars: 5, text: 'Our band has been using Wokl for every album session for the past two years. The space is always clean, the gear is always working, and the vibe keeps our creative energy high.', name: 'The Midnight Echoes', role: 'Indie Rock Band', initials: 'ME', tag: 'Recording' },
  { stars: 5, text: 'I needed a professional space for a brand photoshoot on a budget. Wokl\'s hourly rate was the best in the city, and the results looked like a ₹5-lakh production. Highly recommend.', name: 'Rahul Bose', role: 'Brand Photographer', initials: 'RB', tag: 'Shoots' },
  { stars: 5, text: 'Rented the PA system and mics for a live acoustic performance. Setup was smooth, equipment was top-notch, and WhatsApp booking was lightning-fast. 10/10 experience.', name: 'Divya Krishnan', role: 'Singer-Songwriter', initials: 'DK', tag: 'Rental' },
  { stars: 5, text: 'The vibe at Wokl is like no other studio I\'ve visited. Dark, cinematic, and inspiring. It genuinely makes you want to create. Their sound engineer is also incredibly talented.', name: 'Farhan Qureshi', role: 'Music Producer', initials: 'FQ', tag: 'Recording' },
  { stars: 5, text: 'I run a small podcast and needed a professional recording setup. Wokl\'s hourly package was perfect — got crystal-clear audio and the team was very helpful with the setup.', name: 'Ananya Pillai', role: 'Podcast Host', initials: 'AP', tag: 'Recording' },
]

const stats = [
  { num: '200+', label: 'Sessions Completed' },
  { num: '98%', label: 'Satisfaction Rate' },
  { num: '150+', label: 'Happy Clients' },
  { num: '5★', label: 'Average Rating' },
]

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <span className="section-label fade-up">✦ Client Love</span>
        <h1 className="fade-up delay-1">What Our <span className="gradient-text">Artists Say</span></h1>
        <p className="fade-up delay-2">Real stories from real creators who have made Wokl their creative home.</p>
      </div>

      {/* Stats */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {stats.map(({ num, label }) => (
              <div key={label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, background: 'linear-gradient(135deg,var(--accent-purple-light),var(--accent-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 6 }}>{num}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ padding: '0 24px 96px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 80 }}>
          <div className="section-header">
            <span className="section-label">✦ Reviews</span>
            <h2>Trusted by <span className="gradient-text">Hundreds of Artists</span></h2>
            <p>From indie musicians to professional producers — Wokl has been the creative home for all.</p>
          </div>
          <div className="grid-3">
            {testimonials.map(({ stars, text, name, role, initials, tag }) => (
              <div key={name} className="testimonial-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div className="stars">{'★'.repeat(stars)}</div>
                  <span style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 50, padding: '3px 11px', fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--accent-purple-light)' }}>{tag}</span>
                </div>
                <p className="testimonial-text">{`"${text}"`}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{initials}</div>
                  <div>
                    <div className="author-name">{name}</div>
                    <div className="author-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">✦ Join the Community</span>
          <h2 style={{ marginBottom: 16 }}>Your Story Could Be <span className="gradient-text">Next</span></h2>
          <div className="divider" />
          <p style={{ maxWidth: 540, margin: '0 auto 36px', fontSize: '1.05rem' }}>
            Join 150+ artists who have already made Wokl their creative home. Book your first session today and experience the difference.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href={WA("Hi Wokl! I'd like to book my first session after reading your reviews.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Your First Session
            </a>
            <Link href="/services" className="btn btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`@media(max-width:768px){div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </>
  )
}
