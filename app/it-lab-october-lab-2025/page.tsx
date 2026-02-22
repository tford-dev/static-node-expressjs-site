import type { Metadata } from 'next';
import Link from 'next/link';
import { octoberLabImages } from '@/data/projects';

const labDescription =
  'Detailed IT networking lab by Terrance Ford covering Linux services, GLBP, DMVPN, IPsec, eBGP, OSPF, EIGRP, NAT, DNS, DHCP, and RADIUS.';

export const metadata: Metadata = {
  title: 'October Lab 2025',
  description: labDescription,
  alternates: {
    canonical: '/it-lab-october-lab-2025'
  },
  openGraph: {
    title: 'October Lab 2025 | Terrance Ford',
    description: labDescription,
    url: '/it-lab-october-lab-2025',
    images: [
      {
        url: '/static/img/october-lab0.png',
        width: 1200,
        height: 630,
        alt: 'October IT lab topology'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'October Lab 2025 | Terrance Ford',
    description: labDescription,
    images: ['/static/img/october-lab0.png']
  }
};

const technologies = [
  'VLANs',
  'Trunking (802.1Q)',
  'GLBP',
  'eBGP',
  'OSPF',
  'Named EIGRP',
  'Static Routing',
  'DHCP (Cisco IOS-XE)',
  'DNS',
  'DMVPN',
  'NHRP',
  'IPsec',
  'GRE',
  'NAT',
  'ACLs',
  'Route Redistribution',
  'Route Maps',
  'SSH',
  'AAA',
  'RADIUS Authentication',
  'Linux (Debian)',
  'FreeRADIUS 3.0',
  'BIND9 DNS',
  'VPN Encryption'
];

const storyline = [
  {
    text: 'Each site has its own IGP, and each site is able to communicate with the others over an IPsec DMVPN tunnel.',
    images: [2, 3, 4],
    note: "The Cisco IOS image I'm using for the routers was causing DMVPN bugs."
  },
  {
    text: 'The HQ site is the hub and the Branch sites are the spokes.',
    images: [5, 6],
    note: "Notice how there are no public addresses in this traceroute due to NAT implementation at the core routers."
  },
  {
    text: 'Each site is connected to the ISP-CLOUD router through eBGP.',
    images: [7],
    note: 'Active BGP connection between ISP-CLOUD and BRANCH-3-CORE routers. The ISP-CLOUD router filters private addresses.'
  },
  {
    text: 'ISP-CLOUD router provides real internet connectivity to each site from its WAN connection on interface g0/4.',
    images: [8],
    note: 'PC5 successfully pinging FQDNs.'
  },
  {
    text: 'Traffic from each site going to the public internet is translated with NAT at the core routers, and then translated again at interface g0/4 on the ISP-CLOUD router.',
    images: [9],
    note: "'show ip nat translations' output."
  },
  {
    text: 'Traffic from each site going to another site is redistributed into EIGRP (name: “CORPORATE TUNNEL”, AS 7500), encapsulated in GRE, and then protected with IPsec.',
    images: [10]
  },
  {
    text: 'Traffic received from another site is redistributed into the EIGRP DMVPN TUNNEL and then sent to the host.',
    images: [11],
    note: "Redistribution at each core router is performed with ACLs and route-maps of the site's internal network to avoid loops."
  },
  { text: 'The access layer at each site is layer 2.', images: [12] },
  {
    text: "Each switch at the access layer of each site advertises it's VLAN networks into their site's IGP.",
    images: [13]
  },
  { text: 'There are only 2 VLANs at each site, the PC VLAN and the SERVER VLAN.', images: [14] },
  { text: 'Each PC in the PC VLAN can get DHCP IPv4 addressing from BRANCH-2-DHCP in AS 7502.', images: [15] },
  {
    text: 'Each device in the network can resolve hostnames of Linux or network devices at any site by using BRANCH-1-DNS in AS 7501.',
    images: [16, 17],
    note: '10.0.1.34 is the DNS server. BRANCH-1-DNS also uses public DNS servers 1.1.1.1 and 8.8.8.8.'
  },
  {
    text: 'You must sign into each network device at a site using credentials stored on the RADIUS server, HQ-RADIUS, in AS 7500.',
    images: [18]
  },
  {
    text: 'You can only SSH into a network device at a site using credentials stored in HQ-RADIUS in AS 7500.',
    images: [19]
  }
];

const hq = [
  { text: 'Core router HQ-R1-CORE is the hub in the DMVPN tunnel(172.16.0.1/28) between each site.', images: [20] },
  { text: 'AS 7500 uses OSPF as the IGP.', images: [21] },
  { text: 'The hosts in AS 7500 use 10.0.0.1 as their default gateway, which is the virtual IP in GLBP 10.', images: [22] },
  { text: 'HQ-R3-GLBP is the Active Virtual Gateway and HQ-R2-GLBP is an Active Virtual Forwarder with the next highest priority.', images: [23] },
  { text: 'The connection between the GLBP routers and HQ-SW are trunk connections.', images: [24] }
];

const hqRadius = [
  { text: 'This radius server is powered by the FreeRADIUS 3.0 package.', images: [25] },
  { text: 'Each client is able to authenticate using the key october-lab over ports 1812 and 1813.', images: [26, 27] }
];

const branch1 = [
  { text: 'Core router BRANCH-1-CORE is a spoke(172.16.0.2/28) in the DMVPN tunnel.', images: [28] },
  { text: 'AS 7501 uses named EIGRP as the IGP.', images: [29] },
  { text: 'This DNS server is powered by the BIND9 package.', images: [30] }
];

const branch2 = [
  { text: 'Core router BRANCH-2-CORE is a spoke(172.16.0.3/28) in the DMVPN tunnel.', images: [31] },
  { text: 'AS 7502 uses OSPF as the IGP.', images: [32] },
  { text: 'This DHCP server is technically a Cisco router, so I have enabled RADIUS authentication on it.', images: [33] }
];

const branch3 = [
  { text: 'Core router BRANCH-3-CORE is a spoke(172.16.0.4/28) in the DMVPN tunnel.', images: [34] },
  { text: 'AS 7502 uses static routing inside its network.', images: [35] }
];

const imagePath = (index?: number) => {
  if (index === undefined) return undefined;
  const path = octoberLabImages[index];
  return path ? `/${path}` : undefined;
};

export default function OctoberLabPage() {
  return (
    <div className="stack">
      <div className="section-header">
        <div>
          <p className="small-label">IT Lab</p>
          <h2>The October Lab (Linux, GLBP, IPSEC, DMVPN, NAT, eBGP, OSPF, EIGRP)</h2>
          <p className="section-description">Information Technology Lab using VMWare Workstation Pro, GNS3 server, and Cisco CML.</p>
        </div>
        <Link href="/" className="button secondary">
          ← Back home
        </Link>
      </div>

      <div className="card stack">
        <p className="small-label">Big Picture</p>
        <p>In October of 2025, I began working on a lab that has an HQ site and three Branch sites.</p>
        <p>This is an Information Technology Lab using VMWare Workstation Pro, GNS3 server, and Cisco CML.</p>
        <div className="grid-two">
          {[0, 1].map((idx) => {
            const src = imagePath(idx);
            return src ? <img key={idx} src={src} alt="october lab" /> : null;
          })}
        </div>
      </div>

      <div className="card stack">
        <p className="small-label">Technologies used in this lab</p>
        <div className="grid-two" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <ul className="list-muted">
            {technologies.slice(0, Math.ceil(technologies.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="list-muted">
            {technologies.slice(Math.ceil(technologies.length / 2)).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Network flow</p>
          <h2>How each site stays connected</h2>
        </div>
      </div>
      <div className="timeline">
        {storyline.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.note && <blockquote>{item.note}</blockquote>}
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="october lab" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">HQ - AS 7500</p>
          <h2>Hub details</h2>
        </div>
      </div>
      <div className="timeline">
        {hq.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="HQ details" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">HQ-RADIUS (Debian Linux)</p>
          <h2>Authentication</h2>
        </div>
      </div>
      <div className="timeline">
        {hqRadius.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="HQ-RADIUS" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Branch 1 - AS 7501</p>
          <h2>Spoke and DNS</h2>
        </div>
      </div>
      <div className="timeline">
        {branch1.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="Branch 1" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Branch 2 - AS 7502</p>
          <h2>Spoke and DHCP</h2>
        </div>
      </div>
      <div className="timeline">
        {branch2.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="Branch 2" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-header">
        <div>
          <p className="small-label">Branch 3 - AS 7503</p>
          <h2>Spoke and routing</h2>
        </div>
      </div>
      <div className="timeline">
        {branch3.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <p>{item.text}</p>
            {item.images && (
              <div className="gallery-grid">
                {item.images.map((imgIndex) => {
                  const src = imagePath(imgIndex);
                  return src ? <img key={src} src={src} alt="Branch 3" /> : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
