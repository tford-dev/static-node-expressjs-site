import Link from 'next/link';

export default function RecentPage() {
  return (
    <div className="stack">
      <div className="section-header">
        <div>
          <p className="small-label">Recent Work</p>
          <h2>Hands-on labs in progress</h2>
          <p className="section-description">Dates kept exactly as you wrote them.</p>
        </div>
        <Link href="/" className="button secondary">
          ← Back home
        </Link>
      </div>

      <article className="card">
        <div className="detail-layout" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <p className="small-label">2/16/26</p>
            <h3>Recent project: AI Image Generator</h3>
            <div className="timeline">
              <div className="timeline-item">
                <p>Recently a close friend and I became fascinated with the rendering possibilities of self hosting AI.</p>
              </div>
              <div className="timeline-item">
                <p>I started researching self hosting AI-image-generator solutions and found Stability Matrix and ComfyUI.</p>
                <p>These tools are really good at rendering high quality images.</p>
              </div>
              <div className="timeline-item">
                <p>You can download the models and use different models based on your use case.</p>
                <p>
                  With the simple workflow below, you must enter in a positive prompt for what you want and a negative prompt for
                  what you don&apos;t want.
                </p>
                <p>The other settings such as weight and denoise can be adjusted for how different you would like the output image to be.</p>
              </div>
            </div>
          </div>
          <img src="/static/img/ai-image-generation-workflow.png" alt="AI image generation workflow" />
        </div>
      </article>

      <article className="card">
        <div className="detail-layout" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <p className="small-label">2/9/26</p>
            <h3>Recent project in progress: Hybrid Cloud Lab</h3>
            <div className="timeline">
              <div className="timeline-item">
                <p>Recently I wanted to expiriment more with Linux and wanted to build something as an engaging way to learn.</p>
                <p>So far I have 4 debian Linux devices in the lab.</p>
                <ul className="list-muted">
                  <li>1 to be used as a RADIUS server so network devices must authenticate with it to sign in</li>
                  <li>1 to be used as a DNS server to resolve names of network devices</li>
                  <li>1 to be used as a DHCP server for address assignment for vPCs</li>
                  <li>1 Kali Linux device to test and verify services in the network.</li>
                </ul>
              </div>
              <div className="timeline-item">
                <p>I decided to begin building the GNS3 lab and then integrate services once the network is stable.</p>
                <ul className="list-muted">
                  <li>The network has an HQ site connected to 2 branch sites.</li>
                  <li>All sites are connected to each other via the ISP router</li>
                  <li>Each site has a Cisco ASA firewall at the core, a Cisco IOSxe router, and a layer 3 switch.</li>
                </ul>
              </div>
              <div className="timeline-item">
                <p>The ISP router connects each site&apos;s firewall with eBGP - both IPv4 and IPv6,</p>
                <ul className="list-muted">
                  <li>The firewall connects to the internal router with iBGP,</li>
                  <li>and the routers connect to the internal switches with OSPF.</li>
                  <li>Traffic is redistributed at each internal router.</li>
                </ul>
              </div>
              <div className="timeline-item">
                <p>Traffic is translated at the firewalls, and traffic is translated again at g0/3 on the ISP router.</p>
                <ul className="list-muted">
                  <li>Interface g0/3 on the ISP router gives the whole network real internet.</li>
                  <li>RFC 1918 traffic is filtered in eBGP.</li>
                </ul>
                <p>
                  The sites communicate with each other through a site-to-site IPSEC tunnel - aes256 encryption and sha256 hashing.
                </p>
                <ul className="list-muted">
                  <li>Site to Site traffic is encrypted in eBGP.</li>
                  <li>I still need to set up the servers in this lab and I need to set up more security in the lab.</li>
                </ul>
              </div>
            </div>
          </div>
          <img src="/static/img/feb-lab-topology-kali-linux-2-8-26.png" alt="Hybrid cloud lab topology" />
        </div>
      </article>
    </div>
  );
}
