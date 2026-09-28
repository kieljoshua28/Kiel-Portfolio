function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-container">
        <p>My complete resume with detailed information about my skills and experience.</p>
        
        <div className="download-section">
          <a href="/Kiel_Resume.pdf" download className="download-btn">
            📥 Download Resume (PDF)
          </a>
        </div>

        <div className="resume-preview">
          <h3>Quick Overview</h3>
          <ul>
            <li>📚 Education: Computer Engineering</li>
            <li>💻 Programming: React, JavaScript, Python</li>
            <li>🛡️ Cybersecurity: ISC2 Certified</li>
            <li>🎯 Focus: Web Development & Security</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume