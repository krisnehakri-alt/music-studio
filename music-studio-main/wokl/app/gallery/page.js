'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = `https://wa.me/919876543210?text=${encodeURIComponent("Hi Wokl! I saw your gallery and I'd love to book a session!")}`

const galleryItems = [
  { src: '/images/hero_studio.png', alt: 'Studio Interior', tag: 'Studio', span: 'col' },
  { src: '/images/recording_session.png', alt: 'Recording Session', tag: 'Recording' },
  { src: '/images/mixing_console.png', alt: 'Mixing Console', tag: 'Equipment' },
  { src: '/images/instruments_showcase.png', alt: 'Instruments', tag: 'Instruments', span: 'row' },
  { src: '/images/photoshoot_space.png', alt: 'Photoshoot Space', tag: 'Shoots' },
  { src: '/images/gallery_band.png', alt: 'Band Session', tag: 'Recording', span: 'col' },
]

const tags = ['All', 'Studio', 'Recording', 'Equipment', 'Instruments', 'Shoots']

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.tag === active)

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <span className="section-label fade-up">✦ Gallery</span>
        <h1 className="fade-up delay-1">Inside <span className="gradient-text">Wokl Studio</span></h1>
        <p className="fade-up delay-2">Every frame captures the energy, creativity, and passion that defines every session at Wokl.</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 48px', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {tags.map(tag => (
          <button key={tag} onClick={() => setActive(tag)} style={{
            padding: '9px 22px', borderRadius: 50, border: active === tag ? '1px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
            background: active === tag ? 'rgba(139,92,246,0.18)' : 'var(--bg-card)',
            color: active === tag ? 'var(--accent-purple-light)' : 'var(--text-secondary)',
            fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.25s',
          }}>{tag}</button>
        ))}
      </div>

      {/* Masonry Grid */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', columns: '3 320px', columnGap: 16 }}>
          {filtered.map(({ src, alt, tag }, i) => (
            <div key={i} onClick={() => setLightbox(src)} style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid var(--border-subtle)' }}>
              <div style={{ position: 'relative', width: '100%', height: i % 3 === 0 ? 380 : 260 }}>
                <Image src={src} alt={alt} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,7,15,0.8) 0%,transparent 50%)', opacity: 0, transition: 'opacity 0.3s ease' }} className="gal-hover-overlay" />
                <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 8, opacity: 0, transition: 'opacity 0.3s ease' }} className="gal-hover-info">
                  <span style={{ background: 'rgba(139,92,246,0.8)', borderRadius: 50, padding: '4px 12px', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 600, color: '#fff' }}>{tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: 16 }}>Click any image to view full size</p>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(10px)', zIndex: 9998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'fixed', top: 24, right: 24, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh', width: '100%', height: '70vh', borderRadius: 12, overflow: 'hidden' }}>
            <Image src={lightbox} alt="Gallery" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}

      {/* Video CTA */}
      <section style={{ padding: '0 24px 80px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 80 }}>
          <div className="cta-box">
            <span className="section-label">✦ Your Story, Next</span>
            <h2>Want Your Work <span className="gradient-text">Featured Here?</span></h2>
            <p>Book a session at Wokl and create content worthy of the spotlight. We can help with recording, photography and more.</p>
            <div className="cta-buttons">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Book Your Session</a>
              <Link href="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width:768px) { div[style*="columns: 3"] { columns: 2 200px !important; } }
        @media (max-width:480px) { div[style*="columns: 3"] { columns: 1 !important; } }
        div[style*="breakInside"]:hover img { transform: scale(1.04); }
        div[style*="breakInside"]:hover .gal-hover-overlay,
        div[style*="breakInside"]:hover .gal-hover-info { opacity: 1 !important; }
      `}</style>
    </>
  )
}
