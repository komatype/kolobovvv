import './globals.css'
import localFont from 'next/font/local'

const lineyka = localFont({
  src: '../shared/assets/fonts/LineykaVariable.otf',
  display: 'swap',
  variable: '--font-lineyka',
})

export const metadata = {
  title: 'Ilya Kolobov',
  description: 'Portfolio — art direction & product design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={lineyka.variable}>
      <body>{children}</body>
    </html>
  )
}
