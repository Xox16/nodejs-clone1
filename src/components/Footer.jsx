function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copy">
          © 2025 Node.js. All rights reserved.
        </span>

        <div className="footer-links">
          <a href="#" className="footer-link">Releases</a>
          <a href="#" className="footer-link">Changelog</a>
          <a href="#" className="footer-link">GitHub</a>
        </div>

        <div className="footer-social">
  <button className="social-btn" aria-label="X">X</button>
  <button className="social-btn" aria-label="Mastodon">M</button>
  <button className="social-btn" aria-label="Discord">D</button>
  <button className="social-btn" aria-label="GitHub">G</button>
  <button className="social-btn" aria-label="YouTube">▶</button>
  <button className="social-btn" aria-label="LinkedIn">in</button>
</div>

      </div>
    </footer>
  );
}

export default Footer;
