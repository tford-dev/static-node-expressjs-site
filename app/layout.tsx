import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Terrance Ford | Portfolio',
  description:
    "IT professional based in Raleigh, North Carolina. Full-stack projects, networking labs, and hands-on problem solving showcased for recruiters.",
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
    description:
      'Projects, networking labs, and hands-on problem solving by Terrance Ford, IT professional based in Raleigh, North Carolina.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/static/img/side-image-no-smile-brighter.png',
        width: 640,
        height: 640,
        alt: 'Terrance Ford portrait'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terrance Ford | IT Professional & Full-Stack Developer',
    description: 'Showcasing projects, networking labs, and automation work.',
    images: ['/static/img/side-image-no-smile-brighter.png']
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large'
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1021' }
  ],
  alternates: {
    canonical: '/'
  }
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
                  name: 'Terrance Ford',
                  jobTitle: 'IT Professional',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Raleigh',
                    addressRegion: 'NC',
                    addressCountry: 'US'
                  },
                  url: 'https://www.linkedin.com/in/terrance-ford-661aab226/',
                  sameAs: [
                    'https://www.linkedin.com/in/terrance-ford-661aab226/',
                    'https://github.com/tford-dev'
                  ]
                },
                {
                  '@type': 'WebSite',
                  name: 'Terrance Ford Portfolio',
                  url: '/',
                  publisher: { '@type': 'Person', name: 'Terrance Ford' },
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
