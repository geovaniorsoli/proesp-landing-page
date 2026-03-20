import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/sonner"
import './globals.css'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'], // Escolha os pesos que vai usar
  variable: '--font-poppins', // Cria uma variável CSS
});

export const metadata: Metadata = {
  title: 'PROESP - Associação Protetora da Diversidades das Espécies',
  description: 'Proteger com Natureza e União - Preservação ambiental e educação ecológica',
  icons: '/icon.png'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Toaster />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
