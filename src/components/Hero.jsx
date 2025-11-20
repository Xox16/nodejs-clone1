import DownloadButtons from "./DownloadButtons";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Texto izquierda */}
        <div className="hero-text">
          <h1 className="hero-title">
            Run JavaScript
            <br />
            Everywhere
          </h1>
          <p className="hero-subtitle">
            Node.js® is a JavaScript runtime built on Chrome&apos;s V8 JavaScript
            engine that helps you build fast, scalable network applications.
          </p>

          <DownloadButtons />

          <p className="hero-note">
            Download the LTS version for most users, or try the latest features
            with the Current release.
          </p>
        </div>

        {/* UNA sola tarjeta de código */}
        <div className="hero-code-card">
          <div className="code-card-header">Create an HTTP server</div>
          <pre className="code-block">
            <code>
{`import http from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
