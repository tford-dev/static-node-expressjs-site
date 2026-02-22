import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { absoluteUrl, defaultOgImage, metadataBase, siteName, siteOrigin } from '@/lib/seo';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const baseDescription =
  "IT professional based in Raleigh, North Carolina. Full-stack projects, networking labs, and hands-on problem solving showcased for recruiters.";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'Terrance Ford | IT Professional Portfolio',
    template: '%s | Terrance Ford'
  },
  description: baseDescription,
  applicationName: siteName,
  authors: [{ name: 'Terrance Ford', url: siteOrigin }],
  creator: 'Terrance Ford',
  publisher: 'Terrance Ford',
  keywords: [
    'Terrance Ford',
    'IT professional',
    'Network engineer',
    'Full stack developer',
    'React portfolio',
    'Raleigh North Carolina',
    'CCNP',
    'System administration',
    'Automation',
    '2026 tech portfolio'
  ],
  openGraph: {
    title: 'Terrance Ford | IT Professional & Full-Stack Developer',
    description: baseDescription,
    type: 'website',
    locale: 'en_US',
    siteName,
    url: '/',
    images: [
      {
        url: defaultOgImage,
        width: 640,
        height: 640,
        alt: 'Terrance Ford portrait'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terrance Ford | IT Professional & Full-Stack Developer',
    description: baseDescription,
    images: [defaultOgImage]
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: '/static/img/favicon.ico',
    shortcut: '/static/img/favicon.ico',
    apple: '/static/img/favicon.ico'
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1021' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body>
        <div className="page-shell">
          <Header />
          <main className="main-content container">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': `${siteOrigin}/#person`,
                  name: 'Terrance Ford',
                  jobTitle: 'IT Professional',
                  image: absoluteUrl(defaultOgImage),
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Raleigh',
                    addressRegion: 'NC',
                    addressCountry: 'US'
                  },
                  url: siteOrigin,
                  sameAs: [
                    siteOrigin,
                    'https://www.linkedin.com/in/terrance-ford-661aab226/',
                    'https://github.com/tford-dev'
                  ],
                  knowsAbout: ['Cisco networking', 'System administration', 'Technical support', 'Automation', 'Full-stack web development']
                },
                {
                  '@type': 'WebSite',
                  '@id': `${siteOrigin}/#website`,
                  name: siteName,
                  url: siteOrigin,
                  description: baseDescription,
                  publisher: { '@id': `${siteOrigin}/#person` },
                  inLanguage: 'en'
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
