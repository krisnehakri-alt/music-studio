'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA_BASE = 'https://wa.me/919876543210?text='

const contactInfo = [
  { icon: '📍', label: 'Address', value: '42, Creative Hub Lane, Bandra West, Mumbai - 400050, India' },
  { icon: '📱', label: 'WhatsApp / Phone', value: '+91 8102064727' },
  { icon: '✉️', label: 'Email', value: 'hello@woklstudio.com' },
  { icon: '🕐', label: 'Studio Hours', value: 'Mon – Sat: 9:00 AM – 10:00 PM\nSunday: 10:00 AM – 8:00 PM' },
]

const services = ['Music Recording Session', 'Instrument Rental', 'Photoshoot Space', 'Video Shoot Space', 'Full Day Package', 'Custom Enquiry']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi Wokl Music Studio! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}\n\nPlease get back to me. Thank you!`
    window.open(WA_BASE + encodeURIComponent(msg), '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <Navbar />

      <div className="page-hero">
        <span className="section-label fade-up">✦ Contact Us</span>
        <h1 className="fade-up delay-1">Let's <span className="gradient-text">Create Together</span></h1>
        <p className="fade-up delay-2">Reach out via WhatsApp or fill in the form below — we'll get back to you within minutes.</p>
      </div>

      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, alignItems: 'start' }}>

          {/* Contact Info */}
          <div>
            <span className="section-label">✦ Find Us</span>
            <h2 style={{ marginBottom: 32, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Studio <span className="gradient-text">Details</span></h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 16, background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '20px 22px', transition: 'border-color 0.3s' }}>
                  <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(245,158,11,0.1))', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Primary CTA */}
            <div style={{ background: 'linear-gradient(135deg,rgba(37,211,102,0.12),rgba(18,140,126,0.08))', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 20, padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 10 }}>💬</div>
              <h3 style={{ marginBottom: 8, fontSize: '1.15rem' }}>Fastest Response</h3>
              <p style={{ fontSize: '0.88rem', marginBottom: 20 }}>Message us on WhatsApp and we'll reply within minutes — 7 days a week.</p>
              <a href={WA_BASE + encodeURIComponent("Hi Wokl Music Studio! I'd like to enquire about booking a session.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <span className="section-label">✦ Send Enquiry</span>
            <h2 style={{ marginBottom: 32, fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>Quick <span className="gradient-text">Enquiry Form</span></h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Arjun Rao" style={{ width: '100%', padding: '13px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12, color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.93rem', outline: 'none', transition: 'border-color 0.25s' }} onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'} onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>WhatsApp Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 8102064727" style={{ width: '100%', padding: '13px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12, color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.93rem', outline: 'none', transition: 'border-color 0.25s' }} onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'} onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Service Interested In *</label>
                <select name="service" value={form.service} onChange={handleChange} required style={{ width: '100%', padding: '13px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12, color: form.service ? 'var(--text-primary)' : 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.93rem', outline: 'none', cursor: 'pointer' }}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s} value={s} style={{ background: 'var(--bg-secondary)' }}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, preferred dates, and any specific requirements..." style={{ width: '100%', padding: '13px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 12, color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.93rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.25s' }} onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'} onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
              </div>
              <button type="submit" className="btn btn-whatsapp" style={{ justifyContent: 'center', fontSize: '1rem', padding: '15px 32px', opacity: sent ? 0.8 : 1 }}>
                {sent ? '✓ Opening WhatsApp...' : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Send via WhatsApp
                  </>
                )}
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>This form opens WhatsApp with your message pre-filled. No accounts or sign-ups needed.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">✦ Location</span>
            <h2>Find <span className="gradient-text">Wokl Studio</span></h2>
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-subtle)', height: 420 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.462!2d72.836!3d19.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBandra+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }} allowFullScreen loading="lazy" title="Wokl Music Studio Location" />
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media(max-width:768px){
          div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important;}
          div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}
        }
        input::placeholder,textarea::placeholder{color:var(--text-muted);}
      `}</style>
    </>
  )
}
