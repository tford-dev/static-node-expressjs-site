export default function Footer() {
  return (
    <footer className="footer container">
      <div>©{new Date().getFullYear()} Terrance Ford. All rights reserved.</div>
      <div className="project-meta">
        <a href="mailto:terrance@terrance-ford.com">terrance@terrance-ford.com</a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/terrance-ford-661aab226/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span>·</span>
        <a href="https://github.com/tford-dev" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}
