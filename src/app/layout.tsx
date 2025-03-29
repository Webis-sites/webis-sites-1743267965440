import './globals.css'
import type { Metadata } from 'next'
import { Rubik, Heebo } from 'next/font/google'

// העמסת פונטים עבריים
const rubik = Rubik({ 
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-rubik',
})

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: 'מכון כושר ביתא | חווית לקוח מושלמת',
  description: 'מכון כושר מוביל בישראל עם ציוד חדשני, צוות מקצועי ושירות איכותי. הצטרפו עוד היום!',
  keywords: 'מכון כושר, פיטנס, אימון אישי, חדר כושר, ציוד מתקדם, בריאות, כושר',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he-IL" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <body className={`${rubik.className} antialiased min-h-screen bg-background font-sans`}>
        {children}
      </body>
    </html>
  )
}