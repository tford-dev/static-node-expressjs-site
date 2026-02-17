import Link from 'next/link';
import ProjectGrid from '@/components/ProjectGrid';
import { octoberLabImages, projects } from '@/data/projects';

export default function HomePage() {
  const octoberCover = octoberLabImages[0] ? `/${octoberLabImages[0]}` : '/static/img/october-lab0.png';

  return (
    <div className="stack">
      <section className="hero">
        <div className="hero-layout">
          <div className="stack hero-copy">
            <div className="pill">IT Professional · Raleigh, North Carolina</div>
            <h1>Welcome!</h1>
            <p>
              My name is a Terrance Ford and I&apos;m an IT professional based in Raleigh, North Carolina. The projects below use
              various technologies such as React.js, Vanilla Javascript, HTML, CSS, PostgreSQL, Node.js, and several others.
              More simple apps are hosted on Github pages as others are hosted on Netlify for the front-end, Heroku for the
              back-end, and Neon for the database.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="button">
                About & contact
              </Link>
              <a className="button secondary" href="https://www.linkedin.com/in/terrance-ford-661aab226/" target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
              <a className="button secondary" href="https://github.com/tford-dev" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="avatar-ring">
              <img src="/static/img/side-image-no-smile-brighter.png" alt="Terrance Ford portrait" loading="lazy" />
            </div>
            <div className="card mini-card">
              <p className="small-label">Currently</p>
              <p style={{ margin: 0 }}>Building network labs and researching AI workflows</p>
            </div>
          </div>
        </div>

        {/* <div className="hero-grid">
          <div className="stat-card">
            <span className="small-label">Experience</span>
            <strong>4+ years</strong>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Technical support, system administration, and networking labs.</p>
          </div>
          <div className="stat-card">
            <span className="small-label">Certifications</span>
            <strong>CCNP Enterprise</strong>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Plus Security+, Network+, A+.</p>
          </div>
          <div className="stat-card">
            <span className="small-label">Toolbox</span>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              React, Node.js, PostgreSQL, Tailwind, Cisco Networking, Identity & Access Management, Automation.
            </p>
          </div>
        </div> */}
      </section>

      <div className="section-header">
        <div>
          <p className="small-label">Highlighted Lab</p>
          <h2>The October Lab (Linux, GLBP, IPSEC, DMVPN, NAT, eBGP, OSPF, EIGRP)</h2>
          <p className="section-description">Hands-on networking lab built with VMWare Workstation Pro, GNS3 server, and Cisco CML.</p>
        </div>
        <Link href="/it-lab-october-lab-2025" className="button secondary">
          View lab story
        </Link>
      </div>
      <div className="card">
        <img src={octoberCover} alt="October lab topology" loading="lazy" style={{ maxHeight: 360, objectFit: 'cover', width: '100%' }} />
        <p className="section-description" style={{ marginTop: 12 }}>
          Each site communicates securely over an IPsec DMVPN tunnel with GLBP at the core and services like RADIUS, DNS,
          and DHCP running on Linux.
        </p>
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Featured Projects</p>
          <h2>Applications & UI builds</h2>
        </div>
        <Link href="/about" className="button secondary">
          Meet Terrance
        </Link>
      </div>

      <ProjectGrid items={projects} />
    </div>
  );
}
