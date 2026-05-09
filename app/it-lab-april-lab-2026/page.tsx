import type { Metadata } from 'next';
import Link from 'next/link';
import { april2026LabImages } from '@/data/projects';

const labDescription =
  'Detailed IT networking lab by Terrance Ford covering network services on network devices and route manipulation';

  export const metadata: Metadata = {
    title: 'April Lab 2026',
    description: labDescription,
    alternates: {
      canonical: '/it-lab-april-lab-2026'
    },
    openGraph: {
      title: 'April Lab 2026 | Terrance Ford',
      description: labDescription,
      url: '/it-lab-april-lab-2025',
      images: [
        {
          url: '/static/img/april-lab-img0.png',
          width: 1200,
          height: 630,
          alt: 'April 2026 IT lab topology'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'April Lab 2026 | Terrance Ford',
      description: labDescription,
      images: ['/static/img/april-lab-img0.png']
    }
  };

  const technologies = [
    {
        text: 'OSPF'
    },
    {
        text:'BGP (eBGP / iBGP)'
    },
    {
        text:'Route redistribution (OSPF ↔ iBGP)'
    },
    {
        text:'Static routing'
    },
    {
        text:'OSPF timer tuning'
    },
    {
        text:'IPsec VPN (IKEv2, AES-256, SHA-256)'
    },
    {
        text:'Cisco ASA firewall'
    },
    {
        text:'ACLs'
    },
    {
        text:'Prefix-lists'
    },
    {
        text:'Route-maps'
    },
    {
        text:'VLANs'
    },
    {
        text:'Inter-VLAN routing'
    },
    {
        text:'Layer 3 switching'
    },
    {
        text:'DHCP (Linux ISC DHCP package)'
    },
    {
        text:'DNS (Linux Bind9 package)'
    },
    {
        text:'RADIUS (Linux FreeRADIUS package)'
    },
    {
        text:'AAA (authentication / authorization)'
    },
    {
        text:'SSH'
    },
    {
        text:'SFTP'
    },
    {
        text:'NAT (PAT on ASA)'
    },
    {
        text:'ICMP inspection'
    },
    {
        text:'Linux system administration (Debian/Kali)'
    },
    {
        text:'GNS3/VMWare lab environment'
    }
];

const spring2026lab = [
    {
        text: '-I began labbing in spring 2026 to review networking topics',
    },
    {
        text: '-I built an enterprise network lab with dynamic routing, firewall inspection, centralized AAA, and verified failover under link failure conditions.',
    },
    {
        text: '-I was able to reduce failover time in Site 1 from 1-2 minutes to seconds by simplifying routing.',
    },
    {
        text: 'Topology:',
        images: [0],
    },
    {
        text: '-Site 1(left) and Site 2(right) are connected over WAN through the ISP router using eBGP',
        images: [1],
    },
    {
        text: '-Site 1 uses only OSPF, Site 2 uses iBGP and OSPF to communicate internally and both sites communicate with each other over an IPSEC tunnel on the firewalls',
    },
    {
        text: '-Device CENTRAL-SERVER gives DHCP, DNS, and RADIUS services to both sites in the lab',
        images: [2],
    },
];

const routingArchitecture = [
    {
        text: 'OSPF/iBGP for intra-site routing and IPSEC Tunnels for inter-site routing',
    },
    {
        text: '-Site 1 is AS 8001, Site 2 is AS 8003, and ISP is 8000',
        images: [3],
    },
    {
        text: '-Routers and switches at both sites communicate internally with OSPF',
        images: [4],
    },
    {
        text: '-Site 1 only uses OSPF internally, no iBGP',
        images: [5],
    },
    {
        text: '-Firewall at Site 2 communicates with internal router using iBGP',
        images: [6],
    },
    {
        text: '-OSPF routes are redistributed in iBGP in Site 2',
        images: [7],
    },
    {
        text: '-Internal routers/switches get their default route passed down from the firewalls(default-information)',
        images: [8, 9],
    },
    {
        text: '-eBGP is used for WAN connectivity through the ISP router',
    },
    {
        text: '-Internal RFC1918 addresses are filtered/blocked in eBGP',
        images: [10],
    },
    {
        text: '(192.168.122.0/24 is local to the ISP router and is how it reaches the web/WAN):',
        images: [11],
    }
]


const highAvailabilityFailover = [
    {
        images: [12],
    },
    {
        text: '-Issue with early design: Traffic stopped flowing when SITE-1-R2 is down',
    },
    {
        text: '-Cause for issue: Used high weight parameter in iBGP on SITE-1-CORE-FW toward SITE-1-R2, floating static(default) routes on SITE-1-R2 and SITE-1-R1, and redistributing iBGP into OSPF(wasn’t necessary)',
    },
    {
        text: 'Solution:',
    },
    {
        text: '-Removed use of iBGP and redistribution in Site 1 and implemented only OSPF',
    },
    {
        text: '-Verified failover by having a continuous ping between the CENTRAL-SERVER at Site 1 and kali-admin at Site 2',
        images: [13, 14, 15, 16, 17],
    }
]

const securityLayer = [
    {
        text: '-The firewalls have an IPSEC tunnel using AES256 and SHA256 for encrypted site to site traffic',
        images: [18],
    },
    {
        text: '-Traffic traversing the firewalls is translated(Public traffic translated to 10.0.0.0/15)(10.0.0.0/15 traffic translated in PAT)',
        images: [19],
    },
    {
        text: '-Each network device has SSH enabled',
    },
    {
        text: '-kali-admin is the only device in the network that can SSH into network devices ',
        images: [20,21],
    },
    {
        text: '-CENTRAL-ADMIN is the only device in the network that can SFTP from kali-admin',
        images: [22, 23, 24, 25],
    },
]
    
const AAA = [   
    {
        text: '-The primary way to log into each network device at a site are with credentials stored on the RADIUS server which is CENTRAL-ADMIN at Site 1',
        images: [26, 27, 28],
    },
    {
        text: '-To SSH into a device you must use credentials on the RADIUS server as well',
        images: [29, 30],
    },
    {
        text: '-Because SSH is enabled on devices, there are also local credentials to fail back to',
        images: [31],
    }
]

const infrastructureServices = [
    {
        text: '-CENTRAL-SERVER is a Debian linux device that uses Bind9 service for DNS with 8.8.8.8/1.1.1.1 forwarders',
        images: [32, 33],
    },
        {
        text: '-CENTRAL-SERVER uses isc-dhcp-server service for DHCP clients ',
        images: [34],
    },
    {
        text: '-Clients that can use DHCP in the network are on VLAN 10(10.0.0.64/26 and 10.1.0.128/25)',
        images: [35, 36],
    },
        {
        text: '-Servers are on VLAN 20 (10.0.0.32/27 and 10.1.0.16/29)',
        images: [37, 38],
    },
]    
    
const miscRouteImplementation = [    
    {
        text: '-At Site 1, I explicitly made the preferred path flow through SITE-1-R2',
    },
    {
        text: '-SITE-1-R2 is the preferred path at Site 1 because its priority is higher than the other OSPF devices, the path cost is lower, and because interface g0/2 on SITE-1-CORE-FW is the management interface',
        images: [39],
    },
    {
        text: 'The Firewalls at each site are passing down default routes with default-originate toward internal neighbors in iBGP',
        images: [40],
    },
    {
        text: 'The Firewalls have their default routes pointing to the ISP router and have static routes for site to site connectivity over the IPSEC tunnel',
    },
    {
        text: 'The ISP router is giving each site WAN connectivity through a default route on g0/0',
    },
]

const imagePath = (index?: number) => {
  if (index === undefined) return undefined;
  const path = april2026LabImages[index];
  return path ? `/${path}` : undefined;
};

export default function April2026LabPage() {
  return (
    <>
      <div className="stack">
        <div className="section-header">
        <div>
          <h2>The April 2026 Lab (Linux, IPSEC, DNS, DHCP, SFTP, NAT, eBGP, OSPF)</h2>
          <p className="section-description">Information Technology Lab using VMWare Workstation Pro, GNS3 server, and Cisco CML.</p>
        </div>
        <Link href="/" className="button secondary">
          ← Back home
        </Link>
      </div>

        <div className="section-header">
            <div className="timeline">
            {spring2026lab.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>

        <div className="section-header">
            <div>
                <h2>Routing Architecture</h2>
            </div>
        </div>
            <div className="timeline">
            {routingArchitecture.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>

        <div className="section-header">
            <div>
                <h2>High Availability/Failover</h2>
            </div>
        </div>
            <div className="timeline">
            {highAvailabilityFailover.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>

        <div className="section-header">
            <div>
                <h2>Security Layer</h2>
            </div>
        </div>
            <div className="timeline">
            {securityLayer.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>

        <div className="section-header">
            <div>
                <h2>AAA</h2>
            </div>
        </div>
            <div className="timeline">
            {AAA.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>

        <div className="section-header">
            <div>
                <h2>Infrastructure Services</h2>
            </div>
        </div>
            <div className="timeline">
            {infrastructureServices.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>
        
        <div className="section-header">
            <div>
                <h2>Misc Route Implementation</h2>
            </div>
        </div>
            <div className="timeline">
            {miscRouteImplementation.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                {item.images && (
                    <div className="gallery-grid">
                    {item.images.map((imgIndex) => {
                        const src = imagePath(imgIndex);
                        return src ? <img key={src} src={src} alt="april 2026 lab" /> : null;
                    })}
                    </div>
                )}
                </div>
            ))}
        </div>

        <div className="section-header">
            <div>
                <h2>Technologies</h2>
            </div>
        </div>
            <div className="timeline">
            {technologies.map((item, idx) => (
                <div key={idx} className="timeline-item">
                {item.text && <p>{item.text}</p>}
                </div>
            ))}
            </div>
        </div>
    </>
  );
}