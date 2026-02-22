import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="stack" style={{ padding: '80px 0' }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Project not found</h2>
        <p className="section-description">The page you requested does not exist.</p>
        <Link href="/" className="button" style={{ justifyContent: 'center' }}>
          Back to projects
        </Link>
      </div>
    </div>
  );
}
