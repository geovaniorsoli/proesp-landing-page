import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Escolha os pesos que vai usar
  variable: '--font-poppins', // Cria uma variável CSS
});

export const metadata: Metadata = {
  title: 'PROESP - Associação Protetora da Diversidades das Espécies',
  description: 'Proteger com Natureza e União - Preservação ambiental e educação ecológica',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
