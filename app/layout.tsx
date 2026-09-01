import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { profile } from './content'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const description = profile.description

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.title,
  description,
  openGraph: {
    title: profile.title,
    description,
    url: profile.siteUrl,
    siteName: `${profile.firstName} ${profile.lastName}`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.title,
    description,
    creator: profile.twitterHandle,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
