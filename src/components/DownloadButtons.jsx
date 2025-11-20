function DownloadButtons() {
  return (
    <div className="download-area">
      <div className="download-buttons">
        <button className="btn btn-primary">Get Node.js®</button>
        <button className="btn btn-secondary">
          Get security support for EOL Node.js versions
        </button>
      </div>

      <div className="download-icons">
        <button className="icon-btn" aria-label="LTS">▢</button>
        <button className="icon-btn" aria-label="Current">▣</button>
        <button className="icon-btn" aria-label="Binary">&lt;/&gt;</button>
        <button className="icon-btn" aria-label="Package manager">⌘</button>
      </div>
    </div>
  );
}

export default DownloadButtons;
