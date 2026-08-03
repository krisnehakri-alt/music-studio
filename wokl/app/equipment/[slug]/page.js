'use client'
import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useToast } from '../../components/Toast'
import { getInstrumentBySlug, getRelatedInstruments } from '../../data/instruments'

export default function InstrumentDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise)
  const { slug } = params
  const instrument = getInstrumentBySlug(slug)
  const [loading, setLoading] = useState(false)
  const showToast = useToast()

  if (!instrument) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '160px 24px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Instrument Not Found</h2>
          <Link href="/studio-equipment" className="btn btn-primary" style={{ marginTop: 24 }}>Back to Equipment</Link>
        </div>
        <Footer />
      </>
    )
  }

  const related = getRelatedInstruments(slug, instrument.category)

  const handleRentNow = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      showToast(`Successfully initiated rental for ${instrument.name}! Please check WhatsApp.`)
      const msg = `Hi Wokl! I'd like to rent the ${instrument.name}.`
      window.open(`https://wa.me/918102064727?text=${encodeURIComponent(msg)}`, '_blank')
    }, 800)
  }

  return (
    <>
      <Navbar />

      <div className="page-hero" style={{ paddingBottom: '40px' }}>
        <span className="section-label fade-up">✦ Equipment Details</span>
        <h1 className="fade-up delay-1">{instrument.name}</h1>
      </div>

      <section style={{ padding: '40px 24px 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          
          {/* Image */}
          <div style={{ position: 'relative', width: '100%', height: 600, borderRadius: 24, overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <Image 
              src={instrument.image} 
              alt={instrument.name} 
              fill 
              unoptimized
              style={{ objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,7,15,0.4), transparent)' }} />
          </div>

          {/* Details */}
          <div>
            <Link href="/studio-equipment" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 24, transition: 'color 0.2s' }} className="back-link">
              <span>←</span> Back to Equipment
            </Link>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 12 }}>{instrument.category}</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 16 }}>{instrument.name}</h2>
            
            {/* Price display removed as per request */}

            
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32, color: 'var(--text-secondary)' }}>
              {instrument.description}
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: 16 }}>Key Features</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
              {instrument.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>✓</span> {f}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleRentNow} 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.1rem' }}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Rent This Instrument Now'}
            </button>
          </div>
        </div>
      </section>

      {/* Related Instruments */}
      {related.length > 0 && (
        <section style={{ padding: '80px 24px', background: 'var(--bg-secondary)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="section-header">
              <h2><span className="gradient-text">Related</span> Equipment</h2>
            </div>
            
            <div className="grid-3">
              {related.map(inst => (
                <div key={inst.id} className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
                    <Image 
                      src={inst.image} 
                      alt={inst.name} 
                      fill 
                      unoptimized
                      style={{ objectFit: 'cover' }} 
                    />
                    {/* Price display removed as per request */}

                  </div>
                  
                  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{inst.name}</h3>
                    <p style={{ fontSize: '0.85rem', marginBottom: 20, flexGrow: 1, color: 'var(--text-muted)' }}>{inst.shortDesc}</p>
                    
                    <Link href={`/equipment/${inst.slug}`} className="btn btn-outline" style={{ justifyContent: 'center', padding: '8px', fontSize: '0.85rem' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      
      <style>{`
        .back-link:hover { color: var(--text-primary) !important; }
        @media(max-width:900px){
          section > div { grid-template-columns: 1fr !important; }
          div[style*="height: 600px"] { height: 400px !important; }
        }
      `}</style>
    </>
  )
}
