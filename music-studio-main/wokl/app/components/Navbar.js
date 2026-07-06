'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WA_NUMBER = '919876543210'
const WA_MSG = encodeURIComponent("Hi Wokl Music Studio! 👋 I'd like to enquire about your services and availability.")
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/studio-equipment', label: 'Studio & Equipment' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(7,7,15,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#8b5cf6,#f59e0b)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🎵</div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.28rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Wokl</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Music Studio</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{
                  padding: '8px 15px', borderRadius: 8, display: 'block',
                  fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 500,
                  color: pathname === href ? 'var(--accent-purple-light)' : 'var(--text-secondary)',
                  background: pathname === href ? 'rgba(139,92,246,0.1)' : 'transparent',
                  transition: 'all 0.25s',
                  textDecoration: 'none',
                }}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp nav-wa" style={{ padding: '9px 18px', fontSize: '0.82rem' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Now
            </a>
            <button onClick={() => setMenuOpen(true)} className="hamburger-btn" aria-label="Open menu" style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 8, background: 'none', border: 'none' }}>
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}></span>
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(7,7,15,0.97)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.8rem', cursor: 'pointer' }}>✕</button>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 700,
              color: pathname === href ? 'var(--accent-purple-light)' : 'var(--text-secondary)',
              padding: '8px 24px', textDecoration: 'none', transition: 'color 0.2s',
            }}>{label}</Link>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ marginTop: 20 }}>📲 Book via WhatsApp</a>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <span className="wa-tooltip">Chat with us!</span>
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <style>{`
        @media (max-width:768px) {
          .nav-desktop { display:none !important; }
          .hamburger-btn { display:flex !important; }
          .nav-wa { display:none !important; }
        }
      `}</style>
    </>
  )
}
