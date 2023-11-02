import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Box, CssBaseline } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'もちポートフォリオ',
  description: 'もちのポートフォリオサイトです。',
  icons: [{ rel: 'icon', url: 'syougatsu2_mochi.png' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className} style={{ backgroundColor: 'gray' }}>
        <CssBaseline />
        <Header />
        <Box sx={{ py: '70px' }} bgcolor='white' minHeight='90vh'>
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  )
}
