import './globals.css'
import { ToastProvider } from './components/Toast'

export const metadata = {
  title: { default: 'Wokl Music Studio', template: '%s | Wokl Music Studio' },
  description: 'Premium rental-based music recording studio, instrument hire & creative shoot space. Book via WhatsApp.',
  keywords: ['music studio', 'recording studio', 'instrument rental', 'photoshoot studio', 'Wokl'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
