import Link from 'next/link';

const certs = [
  'static/img/0001.jpg',
  'static/img/0002.jpg',
  'static/img/0003.jpg',
  'static/img/0004.png',
  'static/img/0005.png',
  'static/img/specialist_large.jpg',
  'static/img/N-plus.jpg',
  'static/img/A-plus.jpg'
];

const skills = ['Cisco Networking', 'Technical Support', 'Identity and Access Management', 'Web Development', 'System Administration'];

export default function AboutPage() {
  return (
    <div className="stack">
      <div className="section-header">
        <div>
          <p className="small-label">About</p>
          <h2>Terrance Ford</h2>
          <p className="section-description">IT Professional · Raleigh, North Carolina</p>
        </div>
        <Link href="/" className="button secondary">
          ← Back home
        </Link>
      </div>

      <div className="detail-layout">
        <div className="card">
          <div className="bento">
            <div className="stack" style={{ alignItems: 'flex-start' }}>
              <div className="avatar-ring">
                <img src="/static/img/side-image-arm-up-brighter.png" alt="Terrance Ford" loading="lazy" />
              </div>
            </div>

            <div className="stack">
              <p>
                My name is Terrance Ford and I&apos;m an IT professional based in Raleigh, North Carolina. I have 4 years of
                experience working in Information Technology and I hold a CCNP Enterprise certification. With a background
                in technical support and system administration, I understand the real-world challenges businesses face and
                build solutions that drive productivity. I’m passionate about problem-solving, automation, and continuous
                learning to stay ahead in the ever-evolving tech landscape.
              </p>
              <div className="hero-actions">
                <a className="button" href="mailto:terrance@terrance-ford.com">
                  Email me
                </a>
                <a className="button secondary" href="tel:+17578145785">
                  Call: (757)-814-5785
                </a>
              </div>
            </div>

            <div className="stack framed" style={{ alignItems: 'flex-start' }}>
              <p className="small-label">Links</p>
              <a href="https://github.com/tford-dev" target="_blank" rel="noreferrer">
                — Github
              </a>
              <a href="https://www.linkedin.com/in/terrance-ford-661aab226/" target="_blank" rel="noreferrer">
                — LinkedIn
              </a>
              <a href="mailto:terrance@terrance-ford.com">— Email: terrance@terrance-ford.com</a>
              <p>— Phone: (757)-814-5785</p>
            </div>
          </div>
        </div>

        <div className="side-panel">
          <p className="small-label">Skills</p>
          <ul className="list-muted">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Certifications</p>
        </div>
      </div>
      <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {certs.map((src) => (
          <img key={src} src={`/${src}`} alt="certification" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
