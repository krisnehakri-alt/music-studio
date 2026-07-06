'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useToast } from '../components/Toast'
import { instrumentsData } from '../data/instruments'

const equipment = [
  { icon: '🎚️', name: 'Mixing Console', detail: 'Yamaha CL3 — 72-channel digital console with premium preamps' },
  { icon: '🎤', name: 'Microphones', detail: 'Neumann U87, Shure SM7B, AKG C414, Rode NT1, sE Electronics' },
  { icon: '🔊', name: 'Studio Monitors', detail: 'Genelec 8341A, Yamaha HS8, KRK Rokit 8 — flat response monitoring' },
  { icon: '💻', name: 'DAW & Software', detail: 'Logic Pro X, Pro Tools Ultimate, Ableton Live 11, FL Studio' },
  { icon: '🎛️', name: 'Audio Interface', detail: 'Universal Audio Apollo X8P, Focusrite Scarlett 18i20' },
  { icon: '🔌', name: 'Outboard Gear', detail: 'API 312, Neve 1073, dbx 160A Compressor, Lexicon 480L Reverb' },
  { icon: '📡', name: 'Wireless Systems', detail: 'Shure ULXD4 Wireless, Sennheiser EW 100 Series' },
  { icon: '💡', name: 'Studio Lighting', detail: 'Godox SL200II, Aputure 600D Pro, Neewer LED Panels, RGB Lights' },
]

export default function StudioEquipmentPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [loadingId, setLoadingId] = useState(null)
  const showToast = useToast()

  const categories = ['All', 'Guitar', 'Keyboard & Piano', 'Drums & Percussion', 'Studio Equipment', 'DJ Setup']

  const filteredInstruments = activeCategory === 'All' 
    ? instrumentsData 
    : instrumentsData.filter(inst => inst.category === activeCategory)

  const handleRentNow = (id, name) => {
    setLoadingId(id)
    // Simulate booking API call
    setTimeout(() => {
      setLoadingId(null)
      showToast(`Successfully initiated rental for ${name}! Please check WhatsApp.`)
      // Open WhatsApp
      const msg = `Hi Wokl! I'd like to rent the ${name}.`
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank')
    }, 800)
  }

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <span className="section-label fade-up">✦ Our Setup</span>
        <h1 className="fade-up delay-1">Rent Professional<br /><span className="gradient-text">Music Instruments</span></h1>
        <p className="fade-up delay-2">Choose from a wide range of studio-quality instruments and gear.</p>
      </div>

      {/* Instruments Rental Section */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-secondary)' }} id="instruments-rental">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          
          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)} 
                style={{
                  padding: '9px 22px', 
                  borderRadius: 50, 
                  border: activeCategory === cat ? '1px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                  background: activeCategory === cat ? 'rgba(139,92,246,0.18)' : 'var(--bg-card)',
                  color: activeCategory === cat ? 'var(--accent-purple-light)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '0.85rem', 
                  fontWeight: 600,
                  cursor: 'pointer', 
                  transition: 'all 0.25s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instrument Cards Grid */}
          <div className="grid-3">
            {filteredInstruments.map(inst => (
              <div key={inst.id} className="card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: 240, overflow: 'hidden' }}>
                  <Image 
                    src={inst.image} 
                    alt={inst.name} 
                    fill 
                    unoptimized
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    className="inst-card-img"
                  />
                  {/* Price display removed as per request */}

                </div>
                
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 8 }}>{inst.category}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: 12 }}>{inst.name}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: 24, flexGrow: 1 }}>{inst.shortDesc}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <Link href={`/equipment/${inst.slug}`} className="btn btn-outline" style={{ justifyContent: 'center', padding: '10px' }}>
                      View Details
                    </Link>
                    <button 
                      onClick={() => handleRentNow(inst.id, inst.name)} 
                      className="btn btn-primary" 
                      style={{ justifyContent: 'center', padding: '10px' }}
                      disabled={loadingId === inst.id}
                    >
                      {loadingId === inst.id ? 'Processing...' : 'Rent Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredInstruments.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No instruments found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Equipment (Existing) */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Audio & Visual Equipment</span>
            <h2>Industry-Grade <span className="gradient-text">Gear</span></h2>
            <p>Every piece of equipment in our studio is handpicked for professional-quality output.</p>
          </div>
          <div className="grid-4">
            {equipment.map(({ icon, name, detail }) => (
              <div key={name} className="card" style={{ textAlign: 'center', padding: 28 }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{icon}</div>
                <h4 style={{ marginBottom: 8, fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{name}</h4>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Overview (Existing, moved down) */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 500, borderRadius: 20, overflow: 'hidden' }}>
            <Image src="/images/mixing_console.png" alt="Studio Mixing Console" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),transparent)' }} />
          </div>
          <div>
            <span className="section-label">✦ The Studio</span>
            <h2 style={{ marginBottom: 18 }}>A <span className="gradient-text">Professional-Grade</span> Environment</h2>
            <p style={{ marginBottom: 16 }}>Our main recording room is a 1,200 sq ft acoustic masterpiece — fully treated with Rockwool panels, bass traps, and diffusers for a neutral, accurate monitoring environment.</p>
            <p style={{ marginBottom: 16 }}>The live room can accommodate full bands with up to 6 musicians simultaneously. Isolation booths are available for vocal tracking and instrument separation.</p>
            <p>Every session is run through our professional signal chain — ensuring your recordings are industry-ready from the moment you hit record.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
              {[['1,200 sq ft','Studio Space'],['32 ch','Mixing Console'],['50+','Instruments'],['4K','Video Ready']].map(([val, label]) => (
                <div key={label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '18px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg,var(--accent-purple-light),var(--accent-gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        .card:hover .inst-card-img { transform: scale(1.05); }
        @media(max-width:768px){
          .eq-overview{grid-template-columns:1fr!important;}
          .eq-img{height:300px!important;}
        }
      `}</style>
    </>
  )
}
