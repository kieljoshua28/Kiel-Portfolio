function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <div className="resume-container">
        {/* DOWNLOAD BUTTON */}
        <div className="download-section">
          <a href="/KIEL_JOSHUA_LOZADA_RESUME.pdf" download className="download-btn">
            📥 Download Full Resume (PDF)
          </a>
          <p className="download-note">Complete resume with detailed certifications and training</p>
        </div>

        {/* QUICK OVERVIEW */}
        <div className="resume-section">
          <h3>Professional Summary</h3>
          <p className="summary-text">
            Fresh graduate and ISC2 CC-certified professional with fundamental knowledge of cybersecurity operations, 
            threat detection, and incident response. Committed to continuous learning and mentorship in entry-level 
            opportunities in IT support, Cybersecurity, and Software Development.
          </p>
        </div>

        {/* KEY HIGHLIGHTS */}
        <div className="resume-section">
          <h3>Key Highlights</h3>
          <div className="overview-items">
            <div className="overview-item">
              <span className="icon">🛡️</span>
              <div>
                <strong>Security Expertise</strong>
                <p>SIEM log analysis, threat detection, alert triage, incident response procedures</p>
              </div>
            </div>

            <div className="overview-item">
              <span className="icon">🔍</span>
              <div>
                <strong>Threat Analysis</strong>
                <p>Nessus scanning, NMAP reconnaissance, Wireshark packet analysis, CVE/CWE analysis</p>
              </div>
            </div>

            <div className="overview-item">
              <span className="icon">🌐</span>
              <div>
                <strong>Infrastructure & Networking</strong>
                <p>TCP/IP, OSI model, Active Directory, VMware, VirtualBox, Kali Linux</p>
              </div>
            </div>

            <div className="overview-item">
              <span className="icon">💻</span>
              <div>
                <strong>Programming & Development</strong>
                <p>Python, C/C++, C#, JavaScript, SQL, HTML/CSS, React, Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="resume-section">
          <h3>Work Experience</h3>
          
          <div className="experience-item">
            <div className="exp-header">
              <h4>Quality Assurance Analyst Intern</h4>
              <span className="exp-date">Jul – Sep 2025</span>
            </div>
            <p className="exp-company">Hooli Software Inc. (Hybrid)</p>
            <ul className="exp-details">
              <li>Tested 500+ software defects for security implications (authentication, data validation)</li>
              <li>Identified functional and reliability issues in production applications</li>
              <li>Utilized Postman for REST API validation, endpoint debugging, and security token verification</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>IT Staff Intern</h4>
              <span className="exp-date">Jul – Sep 2024</span>
            </div>
            <p className="exp-company">City Government of San Jose Del Monte, Bulacan</p>
            <ul className="exp-details">
              <li>Provided first level technical support to 30+ office staff</li>
              <li>Resolved hardware, networking, and connectivity issues</li>
              <li>Managed and analyzed operational data in Microsoft Excel</li>
            </ul>
          </div>
        </div>

        {/* SKILLS */}
        <div className="resume-section">
          <h3>Core Skills</h3>
          <div className="skills-category">
            <h5>Security & Networking</h5>
            <div className="skills-grid">
              <div className="skill-tag">Threat Detection</div>
              <div className="skill-tag">Incident Response</div>
              <div className="skill-tag">SIEM Analysis</div>
              <div className="skill-tag">Nessus</div>
              <div className="skill-tag">NMAP</div>
              <div className="skill-tag">Wireshark</div>
              <div className="skill-tag">Kali Linux</div>
              <div className="skill-tag">TCP/IP</div>
            </div>
          </div>

          <div className="skills-category">
            <h5>Programming & Development</h5>
            <div className="skills-grid">
              <div className="skill-tag">Python</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">C/C++</div>
              <div className="skill-tag">C#</div>
              <div className="skill-tag">SQL</div>
              <div className="skill-tag">HTML/CSS</div>
              <div className="skill-tag">Arduino/IoT</div>
            </div>
          </div>

          <div className="skills-category">
            <h5>Tools & Platforms</h5>
            <div className="skills-grid">
              <div className="skill-tag">VMware</div>
              <div className="skill-tag">VirtualBox</div>
              <div className="skill-tag">Postman</div>
              <div className="skill-tag">Git/GitHub</div>
              <div className="skill-tag">Active Directory</div>
              <div className="skill-tag">Jira</div>
              <div className="skill-tag">PowerShell</div>
              <div className="skill-tag">Linux Admin</div>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="resume-section">
          <h3>Certifications & Credentials</h3>
          <div className="certs-grid">
            <div className="cert-item">
              <span className="cert-icon">🛡️</span>
              <div>
                <strong>ISC2 CC</strong>
                <p>Certified in Cybersecurity</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🌐</span>
              <div>
                <strong>Cisco Networking Academy</strong>
                <p>Python, HTML, CSS Essentials</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">☁️</span>
              <div>
                <strong>AWS Skill Builder</strong>
                <p>AWS Cloud Practitioner (ongoing)</p>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🎓</span>
              <div>
                <strong>TryHackMe</strong>
                <p>30+ SOC Analyst training rooms</p>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="resume-section">
          <h3>Education</h3>
          
          <div className="experience-item">
            <div className="exp-header">
              <h4>Bachelor of Science in Computer Engineering</h4>
              <span className="exp-date">Graduated September 9, 2026</span>
            </div>
            <p className="exp-company">Polytechnic University of the Philippines – Santa Maria Bulacan Campus</p>
            <div className="edu-highlights">
              <p><strong>Honors:</strong> Cum Laude | Consistent Dean's Lister | President's Lister</p>
              <p><strong>Achievements:</strong> 1st Place CTF Competition (4th Year) | 2nd Place CTF (3rd Year)</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Senior High School - STEM</h4>
              <span className="exp-date">Completed 2022</span>
            </div>
            <p className="exp-company">Sapang Palay National High School</p>
            <div className="edu-highlights">
              <p><strong>Achievement:</strong> Best Capstone Project | Graduated With Honors</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Junior High School - Special Class</h4>
              <span className="exp-date">Completed 2020</span>
            </div>
            <p className="exp-company">Sapang Palay National High School</p>
            <div className="edu-highlights">
              <p><strong>Program:</strong> Special Program in Science, Technology, and Engineering</p>
              <p><strong>Achievement:</strong> Graduated With Honors | 5th Place Division Level Science Research Competition</p>
            </div>
          </div>
        </div>

        {/* TRAINING & LEARNING */}
        <div className="resume-section">
          <h3>Continuous Learning</h3>
          <div className="learning-items">
            <a href="https://skillbuilder.aws/training-activity" target="_blank" rel="noopener noreferrer" className="learning-link">
              ☁️ AWS Skill Builder - Cloud Practitioner Training
            </a>
            <a href="https://tryhackme.com/p/BASIC28" target="_blank" rel="noopener noreferrer" className="learning-link">
              🔗 TryHackMe - 30+ SOC Analyst Rooms
            </a>
            <a href="https://github.com/kieljoshua28" target="_blank" rel="noopener noreferrer" className="learning-link">
              🔗 GitHub - Projects & Learning
            </a>
            <a href="https://labex.io/u/lozada-kiel-joshua-p-73066224" target="_blank" rel="noopener noreferrer" className="learning-link">
              🔗 LabEx - Linux Administration & Bash Scripting
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume