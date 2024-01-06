import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { theme } from './theme'
import { MetadataDynamic } from '@/components/MetadataDynamic'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'

import FaviconImage from '@/image/favicon.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'もちポートフォリオ',
  description: 'もちのポートフォリオサイトです。',
  icons: [{ rel: 'icon', url: FaviconImage.src }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <MetadataDynamic />
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-TXBGDG4HDJ'></Script>
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TXBGDG4HDJ');
        `}
      </Script>
      <body className={inter.className} style={{ backgroundColor: 'gray' }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <Box sx={{ pt: '60px' }} bgcolor='white' minHeight='90vh' component='main'>
            {children}
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
