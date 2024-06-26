import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comanda Eletronica',
  description: 'Comanda Eletronica',
  publisher: 'CodeWave Digital Solutions',
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'Comanda Eletronica',
  keywords: ['comanda', 'eletronica'],
  themeColor: '#131316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Provider>
          <div className="grid grid-cols-[16rem,1fr] h-screen">
            <Sidebar />
            <main className="overflow-y-auto p-6">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  )
}
